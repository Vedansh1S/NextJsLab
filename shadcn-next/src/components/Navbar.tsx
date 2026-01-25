"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Layers, Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ===== Desktop Navbar ===== */}
      <header className="bg-background/70 sticky top-0 z-50 border-b backdrop-blur">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 font-semibold tracking-tight"
          >
            <div className="bg-background flex h-9 w-9 items-center justify-center rounded-lg border">
              <Layers className="text-primary h-4 w-4" />
            </div>
            <span className="text-lg">SaaS.ui</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="bg-muted/40 hidden items-center gap-2 rounded-full border px-2 py-1 md:flex">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-full px-4 py-1.5 text-sm transition ${
                    isActive
                      ? "bg-background text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <ThemeToggle />

            <Button size="sm" className="hidden md:inline-flex" asChild>
              <Link href="/login">Get Started</Link>
            </Button>

            {/* Mobile menu button */}
            <button
              onClick={() => setOpen(true)}
              className="rounded-lg border p-2 md:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* ===== Mobile Fullscreen Menu ===== */}
      {open && (
        <div className="bg-background fixed inset-0 z-50">
          {/* Top bar */}
          <div className="flex items-center justify-between border-b px-4 py-4">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 font-semibold"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border">
                <Layers className="text-primary h-4 w-4" />
              </div>
              <span>SaaS.ui</span>
            </Link>

            <button
              onClick={() => setOpen(false)}
              className="rounded-lg border p-2"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex flex-col items-center justify-center gap-8 py-20 text-center">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`text-2xl font-semibold transition ${
                    isActive
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <div className="mt-12 w-full px-8">
              <Button size="lg" className="w-full" asChild>
                <Link href="/login" onClick={() => setOpen(false)}>
                  Get Started
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
