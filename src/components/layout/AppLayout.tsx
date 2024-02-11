import AppHeader from './AppHeader';

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <AppHeader />
      <div className="mt-20">{children}</div>
    </>
  );
}
