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
import { ArrowRight, Check, Code2, Layers, Zap, Command, Cpu, Globe, Infinity, Box } from "lucide-react";

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
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <main className="flex-1">
        {/* --- Hero Section --- */}
        <section className="container mx-auto px-4 sm:px-6 py-28 md:py-36 flex flex-col items-center text-center space-y-8 relative">
          <div className="absolute inset-0 -z-10 bg-linear-to-b from-primary/10 via-transparent to-transparent" />

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-3xl">
            Build software <span className="text-primary">faster</span> than ever before.
          </h1>

          <p className="max-w-170 text-lg md:text-xl text-muted-foreground">
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
        <section className="relative border-y bg-muted/30 overflow-hidden">
          <div className="container mx-auto px-4 py-12">
            <p className="text-center text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-10">
              Trusted by innovative teams
            </p>

            <div className="relative overflow-hidden">
              <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-linear-to-r from-background to-transparent z-10" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-linear-to-l from-background to-transparent z-10" />

              <div className="marquee-track">
                {[...logos, ...logos].map((logo, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 px-8 text-muted-foreground hover:text-foreground transition-colors"
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
        <section id="features" className="container mx-auto px-4 sm:px-6 py-28 space-y-14">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Everything you need to ship
            </h2>
            <p className="text-muted-foreground text-lg">
              We handle the boring stuff so you can focus on your product's core value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group hover:border-primary/50 transition-all">
              <CardHeader>
                <Zap className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Lightning Fast</CardTitle>
                <CardDescription>
                  Optimized for speed. Zero runtime overhead with our modern compiler.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-500" />Instant HMR</li>
                  <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-500" />Edge Ready</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:border-primary/50 transition-all">
              <CardHeader>
                <Code2 className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Type Safe</CardTitle>
                <CardDescription>
                  Built with TypeScript from the ground up. Catch errors before they happen.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-500" />100% Typed</li>
                  <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-500" />Autocomplete</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:border-primary/50 transition-all">
              <CardHeader>
                <Layers className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Scalable</CardTitle>
                <CardDescription>
                  From side project to enterprise. Our architecture scales with you.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-500" />Modular</li>
                  <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-500" />Micro-frontends</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* --- Newsletter / CTA --- */}
        <section className="bg-muted/50 py-28">
          <div className="container mx-auto px-4 sm:px-6 flex flex-col items-center text-center space-y-6">
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
            <p className="text-xs text-muted-foreground">No spam. Unsubscribe anytime.</p>
          </div>
        </section>
      </main>
    </div>
  );
}