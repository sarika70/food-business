import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, MapPin, Phone } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      content: '(555) 123-4567',
      description: 'Mon-Fri 9am-6pm',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'hello@savorykitchen.com',
      description: 'We reply within 24 hours',
    },
    {
      icon: MapPin,
      title: 'Location',
      content: '123 Culinary Street',
      description: 'Downtown, CA 90210',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="border-b bg-muted/30 py-16">
        <div className="container text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">Get in Touch</h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Have a question or want to make a reservation? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="container py-16">
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Contact Information */}
          <div className="space-y-6 lg:col-span-2">
            <div>
              <h2 className="mb-4 text-2xl font-bold tracking-tight">Contact Information</h2>
              <p className="text-muted-foreground">
                Reach out to us through any of these channels. We're here to help!
              </p>
            </div>
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <Card key={index} className="border-border/50">
                    <CardContent className="flex items-start gap-4 p-6">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-semibold">{info.title}</h3>
                        <p className="text-sm font-medium text-foreground">{info.content}</p>
                        <p className="text-sm text-muted-foreground">{info.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
