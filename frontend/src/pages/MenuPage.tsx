import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { menuData } from '@/data/menu';

export default function MenuPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="border-b bg-muted/30 py-16">
        <div className="container text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">Our Menu</h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Discover our carefully curated selection of dishes, made fresh daily with the finest ingredients.
          </p>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="container py-16">
        <div className="space-y-16">
          {menuData.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-8">
              <div className="text-center">
                <h2 className="mb-3 text-3xl font-bold tracking-tight">{category.name}</h2>
                <p className="mx-auto max-w-2xl text-muted-foreground">{category.description}</p>
              </div>
              <Separator />
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {category.items.map((item, itemIndex) => (
                  <Card key={itemIndex} className="transition-shadow hover:shadow-warm">
                    <CardHeader>
                      <div className="flex items-start justify-between gap-2">
                        <CardTitle className="text-xl">{item.name}</CardTitle>
                        <Badge variant="secondary" className="shrink-0 font-semibold">
                          ${item.price}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base leading-relaxed">{item.description}</CardDescription>
                      {item.tags && item.tags.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {item.tags.map((tag, tagIndex) => (
                            <Badge key={tagIndex} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
