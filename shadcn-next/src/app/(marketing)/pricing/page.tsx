// src/app/pricing/page.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils"; // Standard shadcn utility

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "monthly"
  );

  const plans = [
    {
      name: "Starter",
      description: "Perfect for side projects",
      price: { monthly: 0, yearly: 0 },
      features: ["1 User", "5 Projects", "Community Support"],
      cta: "Get Started",
      variant: "outline",
    },
    {
      name: "Pro",
      description: "For serious developers",
      price: { monthly: 29, yearly: 290 },
      features: [
        "Unlimited Users",
        "Unlimited Projects",
        "Priority Support",
        "Analytics Dashboard",
      ],
      cta: "Upgrade to Pro",
      popular: true,
      variant: "default",
    },
    {
      name: "Enterprise",
      description: "For large teams",
      price: { monthly: null, yearly: null }, // Null implies "Custom"
      features: ["SSO / SAML", "Dedicated Success Manager", "99.9% SLA"],
      cta: "Contact Sales",
      variant: "outline",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-24 min-h-screen">
      {/* Header Section */}
      <div className="text-center space-y-4 mb-16">
        <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
          Simple, transparent pricing
        </h1>
        <p className="text-lg text-muted-foreground">
          Choose the plan that's right for your business.
        </p>

        {/* Improved Toggle with 'Tabs' */}
        <div className="flex justify-center mt-8">
          <Tabs
            defaultValue="monthly"
            className="w-100"
            onValueChange={(value) =>
              setBillingCycle(value as "monthly" | "yearly")
            }
          >
            <div className="flex justify-center items-center gap-4">
              <TabsList className="grid w-full grid-cols-2 max-w-75">
                <TabsTrigger value="monthly">Monthly</TabsTrigger>
                <TabsTrigger value="yearly">Yearly</TabsTrigger>
              </TabsList>

              {/* The Psychology Trick: Show the savings explicitly */}
              <Badge
                variant="secondary"
                className="hidden sm:block text-primary border-primary/20"
              >
                Save 20%
              </Badge>
            </div>
          </Tabs>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan) => {
          const isPro = plan.popular;
          const price =
            billingCycle === "monthly" ? plan.price.monthly : plan.price.yearly;
          const isCustom = price === null;

          return (
            <Card
              key={plan.name}
              className={cn(
                "flex flex-col relative transition-all duration-200",
                isPro
                  ? "border-primary shadow-lg scale-100 md:scale-105 z-10"
                  : "border-border hover:border-primary/50"
              )}
            >
              {isPro && (
                <div className="absolute top-0 right-0 -mt-3 mr-4">
                  <Badge className="bg-primary hover:bg-primary">
                    Most Popular
                  </Badge>
                </div>
              )}

              <CardHeader>
                <CardTitle className="text-xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>

              <CardContent className="flex-1">
                <div className="flex items-baseline gap-1 mb-6">
                  {isCustom ? (
                    <span className="text-4xl font-bold">Custom</span>
                  ) : (
                    <>
                      <span className="text-4xl font-bold">${price}</span>
                      <span className="text-muted-foreground font-medium">
                        /{billingCycle === "monthly" ? "mo" : "yr"}
                      </span>
                    </>
                  )}
                </div>

                <ul className="space-y-3 text-sm text-muted-foreground">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Button
                  className="w-full"
                  size="lg"
                  variant={plan.variant as "default" | "outline"}
                >
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>

      {/* FAQ / Trust Signal below cards */}
      <div className="mt-16 text-center">
        <p className="text-muted-foreground text-sm">
          All prices in USD. Need a custom contract?{" "}
          <a href="#" className="underline hover:text-primary">
            Chat with us
          </a>
          .
        </p>
      </div>
    </div>
  );
}
