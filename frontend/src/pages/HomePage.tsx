import { useNavigate } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChefHat, Clock, Heart, Leaf } from 'lucide-react';

export default function HomePage() {
  const navigate = useNavigate();

  const highlights = [
    {
      icon: Leaf,
      title: 'Fresh Ingredients',
      description: 'Locally sourced, organic produce delivered daily to ensure the highest quality.',
    },
    {
      icon: ChefHat,
      title: 'Expert Chefs',
      description: 'Our culinary team brings decades of experience and passion to every dish.',
    },
    {
      icon: Clock,
      title: 'Quick Service',
      description: 'Enjoy restaurant-quality meals without the wait. Fast, friendly service guaranteed.',
    },
    {
      icon: Heart,
      title: 'Made with Love',
      description: 'Every recipe is crafted with care, bringing warmth and flavor to your table.',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/generated/hero-food.dim_1600x900.png"
            alt="Delicious food"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 hero-gradient" />
        </div>
        <div className="container relative z-10 flex min-h-[600px] flex-col items-center justify-center px-4 py-20 text-center text-white">
          <Badge variant="secondary" className="mb-6 bg-white/20 text-white backdrop-blur-sm">
            Welcome to Savory Kitchen
          </Badge>
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Where Every Meal
            <br />
            Tells a Story
          </h1>
          <p className="mb-8 max-w-2xl text-lg text-white/90 sm:text-xl">
            Experience the perfect blend of traditional recipes and modern culinary artistry. Fresh ingredients,
            bold flavors, and unforgettable moments.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button size="lg" variant="secondary" onClick={() => navigate({ to: '/menu' })} className="text-base">
              View Our Menu
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate({ to: '/contact' })}
              className="border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 hover:text-white"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="container py-20">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Why Choose Us</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            We're committed to delivering exceptional dining experiences through quality, passion, and service.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <Card key={index} className="border-border/50 transition-shadow hover:shadow-warm">
                <CardHeader>
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{highlight.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{highlight.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted/30 py-20">
        <div className="container">
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold sm:text-4xl">Ready to Experience the Difference?</CardTitle>
              <CardDescription className="mx-auto mt-4 max-w-2xl text-lg">
                Join us for a meal you won't forget. Browse our menu or reach out to make a reservation today.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" onClick={() => navigate({ to: '/menu' })}>
                Explore Menu
              </Button>
              <Button size="lg" variant="outline" onClick={() => navigate({ to: '/about' })}>
                Our Story
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
