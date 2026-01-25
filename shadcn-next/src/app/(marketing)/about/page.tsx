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
      <div className="container mx-auto space-y-28 px-4 py-28">
        {/* Hero / Mission */}
        <section className="mx-auto max-w-4xl space-y-6 text-center">
          <Badge variant="outline">About Us</Badge>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            The operating system <br className="hidden sm:block" />
            for modern web teams
          </h1>
          <p className="text-muted-foreground mx-auto max-w-3xl text-lg leading-relaxed sm:text-xl">
            SaaS.ui exists because developers waste too much time rebuilding the
            same foundations. We give you primitives that scale — technically
            and mentally.
          </p>
        </section>

        <Separator />

        {/* Stats */}
        <section className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {[
            { value: "100+", label: "Requests / Day" },
            { value: "99.99%", label: "Uptime" },
            { value: "1+", label: "Countries" },
            { value: "24/7", label: "Support" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-background/60 rounded-xl p-6 text-center backdrop-blur transition"
            >
              <h3 className="text-primary text-4xl font-bold">{stat.value}</h3>
              <p className="text-muted-foreground mt-2 text-sm tracking-wider uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </section>

        <Separator />

        {/* Values */}
        <section className="space-y-14">
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <Badge variant="outline">Our Values</Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Principles we don’t compromise on
            </h2>
            <p className="text-muted-foreground text-lg">
              These values shape every architectural decision and every product
              trade-off.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <Card
                  key={value.title}
                  className="group border-muted hover:border-primary/40 relative overflow-hidden transition"
                >
                  <CardHeader>
                    <div className="bg-primary/10 mb-4 w-fit rounded-lg p-2">
                      <Icon className="text-primary h-6 w-6" />
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
        <section className="border-primary/30 bg-background/70 relative space-y-8 overflow-hidden rounded-lg border p-14 text-center backdrop-blur">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Build faster. Ship smarter.
          </h2>

          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Join a growing community of developers who care about quality,
            performance, and long-term maintainability.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
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
