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
    <footer className="border-t bg-muted/30 py-12">
      <div className="container mx-auto px-8 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 font-semibold text-lg">
              <Layers className="h-5 w-5" />
              <span>SaaS.ui</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Build beautiful SaaS applications with modern UI components.
            </p>
          </div>

          {/* Product Links */}
          <div className="space-y-4 sm:px-8">
            <h3 className="font-semibold text-sm">Product</h3>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>


          {/* Social Links */}
          <div className="space-y-4 sm:px-8">
            <h3 className="font-semibold text-sm">Follow Us</h3>
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
        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © {currentYear} SaaS.ui Inc. All rights reserved.
          </p>
          
        </div>
      </div>
    </footer>
  );
}
