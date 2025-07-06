import NoiseOverlay from "@/components/NoiseOverlay";

const AppLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="relative flex flex-col min-h-screen bg-background">
      <NoiseOverlay />
      {children}
    </div>
  );
};

export default AppLayout;