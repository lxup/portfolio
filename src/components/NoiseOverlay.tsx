import { cn } from "@/lib/utils";

const NoiseOverlay = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn("pointer-events-none fixed top-[-100%] left-[-50%] w-[300vw] h-[300vh] z-50 animate-noise", className)}
      style={{
        backgroundImage: "url('/assets/textures/noise-texture.png')",
        backgroundRepeat: 'repeat',
        opacity: 0.03,
        userSelect: 'none',
      }}
      {...props}
    />
  );
};

export default NoiseOverlay;