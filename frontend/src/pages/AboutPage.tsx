import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Users, Utensils } from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      icon: Utensils,
      title: 'Quality First',
      description:
        'We never compromise on quality. Every ingredient is carefully selected and every dish is prepared with meticulous attention to detail.',
    },
    {
      icon: Users,
      title: 'Community Focused',
      description:
        'We believe in supporting local farmers and producers, building relationships that strengthen our community and ensure freshness.',
    },
    {
      icon: Award,
      title: 'Culinary Excellence',
      description:
        'Our chefs bring years of training and passion to the kitchen, constantly innovating while honoring traditional techniques.',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="border-b bg-muted/30 py-16">
        <div className="container text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">Our Story</h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            A journey of passion, flavor, and community that started in a small kitchen and grew into something special.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="container py-16">
        <div className="mx-auto max-w-4xl space-y-8">
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl">Where It All Began</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Savory Kitchen was born from a simple dream: to create a place where food brings people together. What
                started as a passion project in 2018 has blossomed into a beloved neighborhood destination where every
                meal is an experience.
              </p>
              <p>
                Our founder, inspired by family recipes passed down through generations, combined traditional cooking
                methods with modern culinary techniques. The result? A menu that honors the past while embracing the
                present, using only the freshest, locally-sourced ingredients.
              </p>
              <p>
                Today, we're proud to serve our community with the same dedication and love that started it all. Every
                dish tells a story, and we're honored to be part of yours.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-muted/30 py-16">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">Our Values</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              The principles that guide everything we do, from sourcing ingredients to serving our guests.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="border-border/50 transition-shadow hover:shadow-warm">
                  <CardHeader>
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">{value.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="container py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight">Meet Our Team</h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Behind every great meal is a team of dedicated professionals who pour their heart into what they do. From
            our chefs to our servers, everyone at Savory Kitchen is committed to making your experience exceptional.
          </p>
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="py-8">
              <p className="text-lg italic text-muted-foreground">
                "Cooking is not just about feeding people—it's about creating memories, sparking joy, and bringing
                communities together. That's what we strive for every single day."
              </p>
              <p className="mt-4 font-semibold">— The Savory Kitchen Team</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
