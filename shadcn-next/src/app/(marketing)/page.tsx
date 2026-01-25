// src/app/page.tsx
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  ArrowRight,
  Check,
  Code2,
  Layers,
  Zap,
  Command,
  Cpu,
  Globe,
  Infinity,
  Box,
} from "lucide-react";

// --- LOGO DATA ---
const logos = [
  { name: "Vercel", icon: Command },
  { name: "Next.js", icon: Box },
  { name: "Supabase", icon: Zap },
  { name: "Tailwind", icon: Layers },
  { name: "Stripe", icon: Globe },
  { name: "React", icon: Cpu },
  { name: "Framer", icon: Infinity },
];

export default function Home() {
  return (
    <div className="bg-background text-foreground flex min-h-screen flex-col">
      <main className="flex-1">
        {/* --- Hero Section --- */}
        <section className="relative container mx-auto flex flex-col items-center space-y-8 px-4 py-28 text-center sm:px-6 md:py-36">
          <div className="from-primary/10 absolute inset-0 -z-10 bg-linear-to-b via-transparent to-transparent" />

          <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight md:text-6xl lg:text-7xl">
            Build software <span className="text-primary">faster</span> than
            ever before.
          </h1>

          <p className="text-muted-foreground max-w-170 text-lg md:text-xl">
            The complete toolkit for developers who want to ship stunning apps
            without wrestling with CSS or complex configurations.
          </p>

          <Button size="lg" className="gap-2 rounded-full px-8" asChild>
            <Link href="/login">
              Start Building <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </section>

        {/* --- Infinite Marquee (Refined) --- */}
        <section className="bg-muted/30 relative overflow-hidden border-y">
          <div className="container mx-auto px-4 py-12">
            <p className="text-muted-foreground mb-10 text-center text-xs font-semibold tracking-widest uppercase">
              Trusted by innovative teams
            </p>

            <div className="relative overflow-hidden">
              <div className="from-background pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-linear-to-r to-transparent" />
              <div className="from-background pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-linear-to-l to-transparent" />

              <div className="marquee-track">
                {[...logos, ...logos].map((logo, idx) => (
                  <div
                    key={idx}
                    className="text-muted-foreground hover:text-foreground flex items-center gap-2 px-8 transition-colors"
                  >
                    <logo.icon className="h-7 w-7" />
                    <span className="text-base font-medium">{logo.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* --- Features Grid --- */}
        <section
          id="features"
          className="container mx-auto space-y-14 px-4 py-28 sm:px-6"
        >
          <div className="mx-auto max-w-2xl space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Everything you need to ship
            </h2>
            <p className="text-muted-foreground text-lg">
              We handle the boring stuff so you can focus on your product's core
              value.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <Card className="group hover:border-primary/50 transition-all">
              <CardHeader>
                <Zap className="text-primary mb-2 h-10 w-10" />
                <CardTitle>Lightning Fast</CardTitle>
                <CardDescription>
                  Optimized for speed. Zero runtime overhead with our modern
                  compiler.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-muted-foreground space-y-2 text-sm">
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    Instant HMR
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    Edge Ready
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:border-primary/50 transition-all">
              <CardHeader>
                <Code2 className="text-primary mb-2 h-10 w-10" />
                <CardTitle>Type Safe</CardTitle>
                <CardDescription>
                  Built with TypeScript from the ground up. Catch errors before
                  they happen.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-muted-foreground space-y-2 text-sm">
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    100% Typed
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    Autocomplete
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:border-primary/50 transition-all">
              <CardHeader>
                <Layers className="text-primary mb-2 h-10 w-10" />
                <CardTitle>Scalable</CardTitle>
                <CardDescription>
                  From side project to enterprise. Our architecture scales with
                  you.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-muted-foreground space-y-2 text-sm">
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    Modular
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    Micro-frontends
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* --- Newsletter / CTA --- */}
        <section className="bg-muted/50 py-28">
          <div className="container mx-auto flex flex-col items-center space-y-6 px-4 text-center sm:px-6">
            <h2 className="text-3xl font-bold tracking-tight">
              Ready to modernize your stack?
            </h2>
            <p className="text-muted-foreground max-w-150">
              Join 10,000+ developers building the future of the web.
            </p>
            <div className="flex w-full max-w-sm items-center space-x-2">
              <Input type="email" placeholder="Enter your email" />
              <Button type="submit">Subscribe</Button>
            </div>
            <p className="text-muted-foreground text-xs">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
