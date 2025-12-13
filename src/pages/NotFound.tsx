
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, FileQuestion } from "lucide-react";
import { FloatingCircle, FloatingTriangle } from "@/components/FloatingShapes";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 text-center relative overflow-hidden">
      {/* Background decorations */}
      <FloatingCircle size="300px" className="absolute -top-20 -left-20 opacity-10 animate-float" />
      <FloatingTriangle size="80px" className="absolute bottom-20 right-20 opacity-10 rotate-12 animate-float-slow" />
      <FloatingCircle size="150px" className="absolute bottom-40 left-10 opacity-[0.05] animate-float-reverse" />
      <FloatingTriangle size="40px" className="absolute top-40 right-10 opacity-[0.08] -rotate-12 animate-float" />

      <div className="space-y-8 max-w-md mx-auto animate-in fade-in zoom-in duration-500 relative z-10">
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-destructive/10 blur-2xl rounded-full scale-150"></div>
            <FileQuestion className="w-32 h-32 text-muted-foreground/50 relative z-10 animate-pulse" strokeWidth={1} />
            {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl font-bold text-foreground">
              ?
            </div> */}
          </div>
        </div>

        <div className="space-y-2">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/40">
            404
          </h1>
          <h2 className="text-xl md:text-2xl font-medium tracking-tight text-foreground/80">
            Page Not Found
          </h2>
          <p className="text-muted-foreground">
            The page you are looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="pt-2">
          <Button asChild size="lg" className="rounded-full px-8 shadow-lg hover:shadow-primary/25 transition-all duration-300">
            <Link to="/" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Return Home
            </Link>
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 text-sm text-muted-foreground opacity-50">
        Path: {location.pathname}
      </div>
    </div>
  );
};

export default NotFound;
