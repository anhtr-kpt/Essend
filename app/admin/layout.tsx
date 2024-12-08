import Header from "./header";
import Sidenav from "./sidenav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <Header />
      <Sidenav />
      <div className="ml-60 mt-16 p-6 w-full">{children}</div>
    </div>
  );
}
