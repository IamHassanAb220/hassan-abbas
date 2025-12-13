import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Construction, Rocket, ArrowLeft } from "lucide-react";
import { FloatingCircle, FloatingTriangle } from "@/components/FloatingShapes";

const Upcoming = () => {
    return (
        <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 text-center relative overflow-hidden">
            <FloatingCircle size="150px" className="absolute -top-10 right-10 opacity-[0.05] animate-float" />
            <FloatingTriangle size="50px" className="absolute top-5 left-20 opacity-10 animate-float-slow" />
            {/* Background decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-20">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>

            <div className="space-y-6 max-w-md mx-auto animate-in fade-in zoom-in duration-500">
                <div className="flex justify-center mb-6">
                    <div className="relative flex items-center justify-center">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-primary/10 blur-xl rounded-full translate-y-2"></div>
                        <Construction className="w-24 h-24 text-primary relative z-10 animate-bounce-slow" strokeWidth={1.5} />
                        {/* <Rocket className="w-16 h-16 text-secondary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -mt-12 ml-10 relative z-20 animate-fly" strokeWidth={1.5} /> */}
                    </div>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                    Work in Progress
                </h1>

                <p className="text-muted-foreground text-lg">
                    We're crafting something amazing here.
                </p>

                <div className="pt-6">
                    <Button asChild size="lg" className="rounded-full px-8 shadow-lg hover:shadow-primary/25 transition-all duration-300">
                        <Link to="/" className="flex items-center gap-2">
                            <ArrowLeft className="w-4 h-4" />
                            Return Home
                        </Link>
                    </Button>
                </div>
            </div>

            <div className="absolute bottom-8 text-sm text-muted-foreground opacity-50">
                &copy; {new Date().getFullYear()} Hassan Abbas. All rights reserved.
            </div>
        </div>
    );
};

export default Upcoming;
