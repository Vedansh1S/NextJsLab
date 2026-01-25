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
    <div className="container mx-auto space-y-24 px-4 py-24">
      {/* Header */}
      <div className="mx-auto max-w-3xl space-y-4 text-center">
        <Badge variant="outline">Features</Badge>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          More power. Less configuration.
        </h1>
        <p className="text-muted-foreground text-lg">
          We stripped away the complexity so you can focus on writing code.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        {features.map((feature, i) => {
          const Icon = feature.icon;
          return (
            <Card
              key={i}
              className={`${feature.gridClass} hover:border-primary/50 group flex cursor-pointer flex-col justify-between transition-all duration-300 hover:shadow-lg`}
            >
              <CardHeader>
                <Icon className="text-primary mb-3 h-8 w-8 transition-transform group-hover:scale-110" />
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Use Cases Section */}
      <div className="space-y-12">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <Badge variant="outline">Use Cases</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Built for everyone
          </h2>
          <p className="text-muted-foreground text-lg">
            Whether you're a solo developer or managing enterprise
            infrastructure, SaaS.ui has you covered.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {useCases.map((useCase, idx) => {
            const Icon = useCase.icon;
            return (
              <Card
                key={idx}
                className="hover:border-primary/50 flex flex-col transition-all"
              >
                <CardHeader>
                  <div className="bg-primary/10 mb-4 w-fit rounded-lg p-2">
                    <Icon className="text-primary h-6 w-6" />
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
      <div className="border-primary/20 hover:border-primary/50 space-y-6 rounded-xl border p-12 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Ready to get started?
        </h2>
        <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
          Join thousands of developers who are building amazing things with
          SaaS.ui. Start with our free tier today.
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
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
