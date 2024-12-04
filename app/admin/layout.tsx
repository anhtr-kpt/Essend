import Sidenav from "./sidenav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-screen">
      <div className="w-full flex-none">
        <Sidenav />
      </div>
      <div className="flex-grow p-6">{children}</div>
    </div>
  );
}
