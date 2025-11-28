import { cn } from "@/lib/utils";

interface FloatingCircleProps {
  size?: string;
  className?: string;
}

export const FloatingCircle = ({ size = "200px", className }: FloatingCircleProps) => {
  return (
    <div
      className={cn("absolute pointer-events-none geometric-circle", className)}
      style={{
        width: size,
        height: size,
      }}
    />
  );
};

interface FloatingTriangleProps {
  size?: string;
  className?: string;
}

export const FloatingTriangle = ({ size = "60px", className }: FloatingTriangleProps) => {
  return (
    <div
      className={cn("absolute pointer-events-none geometric-triangle", className)}
      style={{
        // @ts-ignore
        "--size": size,
      }}
    />
  );
};
