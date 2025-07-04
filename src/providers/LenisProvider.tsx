"use client";
import { ReactLenis } from "@studio-freight/react-lenis";

interface LenisScrollProviderProps {
  children: React.ReactNode;
}
const LenisScrollProvider = ({ children } : LenisScrollProviderProps) => {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>{children}</ReactLenis>
  );
};

export default LenisScrollProvider;