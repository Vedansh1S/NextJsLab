// src/app/features/page.tsx
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Terminal,
  Cpu,
  Globe,
  Shield,
  Zap,
  LayoutTemplate,
  Rocket,
  Lock,
  BarChart3,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const features = [
  {
    title: "Global Edge Network",
    description: "Deploy your content to 100+ locations worldwide in seconds.",
    icon: Globe,
    gridClass: "md:col-span-2 md:row-span-1",
  },
  {
    title: "DDoS Protection",
    description: "Enterprise-grade security included in every plan.",
    icon: Shield,
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Serverless Compute",
    description: "Run backend logic without managing servers.",
    icon: Cpu,
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Instant Rollbacks",
    description: "Made a mistake? Revert to a previous version in one click.",
    icon: Zap,
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    title: "CLI First",
    description: "Control everything from your terminal.",
    icon: Terminal,
    gridClass: "md:col-span-2 md:row-span-1",
  },
  {
    title: "Analytics & Insights",
    description: "Real-time monitoring and detailed performance metrics.",
    icon: BarChart3,
    gridClass: "md:col-span-1 md:row-span-1",
  },
];

const useCases = [
  {
    icon: Rocket,
    title: "Startups",
    description:
      "Launch faster with pre-built infrastructure and zero DevOps overhead.",
  },
  {
    icon: Lock,
    title: "Enterprise",
    description:
      "Trust-grade security, compliance, and dedicated support for large-scale deployments.",
  },
  {
    icon: LayoutTemplate,
    title: "Agencies",
    description:
      "Build and deploy client projects in minutes with our CLI and dashboard.",
  },
];

export default function FeaturesPage() {
  return (
    <div className="container mx-auto px-4 py-24 space-y-24">
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <Badge variant="outline">Features</Badge>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          More power. Less configuration.
        </h1>
        <p className="text-lg text-muted-foreground">
          We stripped away the complexity so you can focus on writing code.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {features.map((feature, i) => {
          const Icon = feature.icon;
          return (
            <Card
              key={i}
              className={`${feature.gridClass} flex flex-col justify-between hover:shadow-lg transition-all duration-300 hover:border-primary/50 group cursor-pointer`}
            >
              <CardHeader>
                <Icon className="h-8 w-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Use Cases Section */}
      <div className="space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <Badge variant="outline">Use Cases</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Built for everyone
          </h2>
          <p className="text-lg text-muted-foreground">
            Whether you're a solo developer or managing enterprise
            infrastructure, SaaS.ui has you covered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {useCases.map((useCase, idx) => {
            const Icon = useCase.icon;
            return (
              <Card
                key={idx}
                className="flex flex-col transition-all hover:border-primary/50"
              >
                <CardHeader>
                  <div className="p-2 w-fit bg-primary/10 rounded-lg mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{useCase.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-muted-foreground">{useCase.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* CTA Section */}
      <div className="rounded-xl border border-primary/20 p-12 text-center space-y-6 hover:border-primary/50">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Ready to get started?
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Join thousands of developers who are building amazing things with
          SaaS.ui. Start with our free tier today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/pricing">
              View Pricing
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
