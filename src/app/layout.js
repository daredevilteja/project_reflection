import "./globals.css";
import { Glory } from "next/font/google";
import NavBar from "@/components/NavBar";

const glory = Glory({ subsets: ["latin"] });

export const metadata = {
  title: "Reflection",
  description: "Journal for reflecting",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={glory.className}>
        <div className="flex flex-col flex-1 w-screen h-screen bg-gray-200">
          <header className="flex flex-1 items-center px-6 border-b border-black border-solid max-h-[10vh] text-4xl text-blue-700">
            <h1>Reflection</h1>
          </header>
          <section className="flex flex-5">
            <aside className="flex flex-1 border-r border-black border-solid">
              <NavBar />
            </aside>
            <section className="flex flex-3">{children}</section>
          </section>
        </div>
      </body>
    </html>
  );
}
