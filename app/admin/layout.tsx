import Sidenav from "./sidenav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      <Sidenav />
      <div className="ml-64 p-6 w-full">{children}</div>
    </div>
  );
}
