import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Reflection",
  description: "Journal for reflecting",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col flex-1 w-screen h-screen">
          <header className="flex flex-1 items-center px-6 border-b border-black border-solid">
            <h1>Reflection</h1>
          </header>
          <section className="flex flex-5">
            <aside className="flex flex-1 border-r border-black border-solid">
              <nav>
                <ul>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/statistics">Statistics</Link>
                  </li>
                  <li>Contact</li>
                </ul>
              </nav>
            </aside>
            <section className="flex flex-3">{children}</section>
          </section>
        </div>
      </body>
    </html>
  );
}
