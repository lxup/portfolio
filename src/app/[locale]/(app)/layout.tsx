const AppLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {children}
    </div>
  );
};

export default AppLayout;