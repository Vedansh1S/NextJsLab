// src/app/page.tsx
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, Check, Code2, Layers, Zap } from "lucide-react"; // lucide-react comes with shadcn

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <main className="flex-1">
        {/* --- Hero Section --- */}
        <section className="container mx-auto px-4 sm:px-6 py-24 md:py-32 flex flex-col items-center text-center space-y-8">
          <Badge variant="secondary" className="px-4 py-2 text-sm">
            v2.0 is now live &rarr;
          </Badge>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight lg:text-7xl max-w-3xl">
            Build software <span className="text-primary">faster</span> than
            ever before.
          </h1>

          <p className="max-w-175 text-lg text-muted-foreground md:text-xl">
            The complete toolkit for developers who want to ship stunning apps
            without wrestling with CSS or complex configurations.
          </p>

          <Button size="lg" className="gap-2" asChild>
            <Link href="/login">
              {" "}
              Start Building <ArrowRight className="h-4 w-4" />{" "}
            </Link>
          </Button>
        </section>

        <Separator />

        {/* --- Features Grid --- */}
        <section
          id="features"
          className="container mx-auto px-4 sm:px-6 py-24 space-y-12"
        >
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Everything you need to ship
            </h2>
            <p className="text-muted-foreground text-lg">
              We handle the boring stuff so you can focus on your product's core
              value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <Card className="hover:border-primary/50 transition-all">
              <CardHeader>
                <Zap className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Lightning Fast</CardTitle>
                <CardDescription>
                  Optimized for speed. Zero runtime overhead with our modern
                  compiler.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" /> Instant
                    HMR
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" /> Edge Ready
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Feature 2 */}
            <Card className="hover:border-primary/50 transition-all">
              <CardHeader>
                <Code2 className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Type Safe</CardTitle>
                <CardDescription>
                  Built with TypeScript from the ground up. Catch errors before
                  they happen.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" /> 100% Typed
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />{" "}
                    Autocomplete
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Feature 3 */}
            <Card className="hover:border-primary/50 transition-all">
              <CardHeader>
                <Layers className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Scalable</CardTitle>
                <CardDescription>
                  From side project to enterprise. Our architecture scales with
                  you.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" /> Modular
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />{" "}
                    Micro-frontends
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* --- Newsletter / CTA --- */}
        <section className="bg-muted/50 py-24">
          <div className="container mx-auto px-4 sm:px-6 flex flex-col items-center text-center space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter">
              Ready to modernize your stack?
            </h2>
            <p className="text-muted-foreground max-w-150">
              Join 10,000+ developers building the future of the web.
            </p>
            <div className="flex w-full max-w-sm items-center space-x-2">
              <Input type="email" placeholder="Enter your email" />
              <Button type="submit">Subscribe</Button>
            </div>
            <p className="text-xs text-muted-foreground">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}