// src/app/about/page.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Zap, Shield, Users, Globe, ArrowRight } from "lucide-react";
import Link from "next/link";

const values = [
  {
    icon: Zap,
    title: "Speed First",
    description:
      "Performance is a feature. Every abstraction we ship is designed to be fast by default.",
  },
  {
    icon: Shield,
    title: "Security by Default",
    description:
      "Security is not an add-on. We bake enterprise-grade security into the core.",
  },
  {
    icon: Users,
    title: "Developer Obsessed",
    description: "Built by developers who hate bad DX as much as you do.",
  },
  {
    icon: Globe,
    title: "Built to Scale",
    description:
      "From side projects to global platforms — without rewriting everything.",
  },
];

export default function AboutPage() {
  return (
    <main className="relative overflow-hidden">

      <div className="container mx-auto px-4 py-28 space-y-28">
        {/* Hero / Mission */}
        <section className="text-center max-w-4xl mx-auto space-y-6">
          <Badge variant="outline">About Us</Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            The operating system <br className="hidden sm:block" />
            for modern web teams
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            SaaS.ui exists because developers waste too much time rebuilding the
            same foundations. We give you primitives that scale — technically
            and mentally.
          </p>
        </section>

        <Separator />

        {/* Stats */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "100+", label: "Requests / Day" },
            { value: "99.99%", label: "Uptime" },
            { value: "1+", label: "Countries" },
            { value: "24/7", label: "Support" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center rounded-xl bg-background/60 backdrop-blur p-6 transition"
            >
              <h3 className="text-4xl font-bold text-primary">{stat.value}</h3>
              <p className="mt-2 text-sm text-muted-foreground uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </section>

        <Separator />

        {/* Values */}
        <section className="space-y-14">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <Badge variant="outline">Our Values</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Principles we don’t compromise on
            </h2>
            <p className="text-lg text-muted-foreground">
              These values shape every architectural decision and every product
              trade-off.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <Card
                  key={value.title}
                  className="group relative overflow-hidden border-muted hover:border-primary/40 transition"
                >
                
                  <CardHeader>
                    <div className="mb-4 w-fit rounded-lg bg-primary/10 p-2">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        <Separator />

        {/* CTA */}
        <section className="relative overflow-hidden rounded-lg border border-primary/30 bg-background/70 backdrop-blur p-14 text-center space-y-8">

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Build faster. Ship smarter.
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join a growing community of developers who care about quality,
            performance, and long-term maintainability.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/pricing">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="https://github.com">Join Community</Link>
            </Button>
          </div>
        </section>
      </div>
    </main>
  );
}
