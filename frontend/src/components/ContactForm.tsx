import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useActor } from '@/hooks/useActor';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactForm() {
  const { actor } = useActor();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const submitMutation = useMutation({
    mutationFn: async (data: FormData) => {
      if (!actor) {
        throw new Error('Backend connection not available');
      }
      await actor.submitContactForm(data.name, data.email, data.message);
    },
    onSuccess: () => {
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    },
  });

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      submitMutation.mutate(formData);
    }
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error for this field when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Success Alert */}
      {submitSuccess && (
        <Alert className="border-accent bg-accent/10">
          <CheckCircle2 className="h-4 w-4 text-accent" />
          <AlertTitle>Message sent successfully!</AlertTitle>
          <AlertDescription>Thank you for contacting us. We'll get back to you soon.</AlertDescription>
        </Alert>
      )}

      {/* Error Alert */}
      {submitMutation.isError && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            {submitMutation.error instanceof Error
              ? submitMutation.error.message
              : 'Failed to send message. Please try again.'}
          </AlertDescription>
        </Alert>
      )}

      {/* Name Field */}
      <div className="space-y-2">
        <Label htmlFor="name">
          Name <span className="text-destructive">*</span>
        </Label>
        <Input
          id="name"
          type="text"
          placeholder="Your full name"
          value={formData.name}
          onChange={(e) => handleChange('name', e.target.value)}
          className={errors.name ? 'border-destructive' : ''}
          disabled={submitMutation.isPending}
        />
        {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
      </div>

      {/* Email Field */}
      <div className="space-y-2">
        <Label htmlFor="email">
          Email <span className="text-destructive">*</span>
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="your.email@example.com"
          value={formData.email}
          onChange={(e) => handleChange('email', e.target.value)}
          className={errors.email ? 'border-destructive' : ''}
          disabled={submitMutation.isPending}
        />
        {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
      </div>

      {/* Message Field */}
      <div className="space-y-2">
        <Label htmlFor="message">
          Message <span className="text-destructive">*</span>
        </Label>
        <Textarea
          id="message"
          placeholder="Tell us how we can help you..."
          rows={6}
          value={formData.message}
          onChange={(e) => handleChange('message', e.target.value)}
          className={errors.message ? 'border-destructive' : ''}
          disabled={submitMutation.isPending}
        />
        {errors.message && <p className="text-sm text-destructive">{errors.message}</p>}
      </div>

      {/* Submit Button */}
      <Button type="submit" size="lg" className="w-full" disabled={submitMutation.isPending}>
        {submitMutation.isPending ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          'Send Message'
        )}
      </Button>
    </form>
  );
}
