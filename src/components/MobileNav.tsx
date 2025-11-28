import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";

interface MobileNavProps {
  navItems: Array<{
    id: string;
    label: string;
    isExternal?: boolean;
  }>;
  activeSection: string;
  onNavigate: (id: string) => void;
}

export const MobileNav = ({ navItems, activeSection, onNavigate }: MobileNavProps) => {
  const [open, setOpen] = useState(false);

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button
          className="lg:hidden p-2 hover:bg-muted/20 rounded transition-colors touch-target"
          aria-label="Open menu"
        >
          <Menu className="w-5 h-5" />
        </button>
      </SheetTrigger>
      <SheetContent side="right" className="w-64 sm:w-72">
        <nav className="flex flex-col gap-1 mt-8">
          {navItems.map((item) =>
            item.isExternal ? (
              <Link
                key={item.id}
                to="/resources"
                onClick={() => setOpen(false)}
                className="px-4 py-3 text-sm tracking-wide text-muted-foreground hover:text-foreground hover:bg-muted/20 transition-colors rounded touch-target"
              >
                {item.label}
              </Link>
            ) : (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-3 text-sm tracking-wide text-left transition-colors rounded touch-target ${
                  activeSection === item.id
                    ? "text-foreground font-medium bg-muted/20"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/20"
                }`}
              >
                {item.label}
              </button>
            )
          )}
        </nav>
      </SheetContent>
    </Sheet>
  );
};
