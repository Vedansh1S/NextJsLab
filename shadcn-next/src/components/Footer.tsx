import { Layers, Github, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { label: "Features", href: "/features" },
      { label: "Pricing", href: "/pricing" },
      { label: "About", href: "/about" },
    ],
    social: [
      { label: "Github", href: "https://github.com", icon: Github },
      { label: "Twitter", href: "https://twitter.com", icon: Twitter },
      { label: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
    ],
  };

  return (
    <footer className="bg-muted/30 border-t py-12">
      <div className="container mx-auto px-8 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-lg font-semibold">
              <Layers className="h-5 w-5" />
              <span>SaaS.ui</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Build beautiful SaaS applications with modern UI components.
            </p>
          </div>

          {/* Product Links */}
          <div className="space-y-4 sm:px-8">
            <h3 className="text-sm font-semibold">Product</h3>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4 sm:px-8">
            <h3 className="text-sm font-semibold">Follow Us</h3>
            <div className="flex space-x-4">
              {footerLinks.social.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center justify-between space-y-4 border-t pt-8 md:flex-row md:space-y-0">
          <p className="text-muted-foreground text-sm">
            © {currentYear} SaaS.ui Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
