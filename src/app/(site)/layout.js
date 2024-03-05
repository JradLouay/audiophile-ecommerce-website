import "../globals.css";
import Navbar from "@/components/Navbar";

export default function RootLayout({ children }) {
  return (
    <>
      <header className="bg-stone-950">
        <Navbar />
      </header>
      <main>{children}</main>
    </>
  );
}
