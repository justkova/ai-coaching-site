import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} David [LastName]. All rights reserved.
          </div>

          <div className="flex gap-6">
            <Link
              href="/faq"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              FAQ
            </Link>
            <Link
              href="/terms"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms
            </Link>
            <Link
              href="/privacy"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy
            </Link>
          </div>

          <div className="text-sm text-muted-foreground">
            <a
              href="mailto:contact@example.com"
              className="hover:text-foreground transition-colors"
            >
              contact@example.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
