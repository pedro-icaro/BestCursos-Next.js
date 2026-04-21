import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/header/page";
import Navbar from "./components/navbar/page";

export const metadata: Metadata = {
  title: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body>
        <div className="grid md:grid-cols-[100px_1fr] h-screen w-screen overflow-hidden">
          <aside className=" md:bg-olive-200 flex md:flex-col fixed bottom-0 bg-olive-200
           h-15 w-full md:h-auto justify-center md:justify-start md:w-auto md:relative md:bottom-auto md:left-auto">
            <Navbar />
          </aside>
          <main className="flex flex-col h-full overflow-hidden">
            <header>
              <Header />
            </header>
            <div className="flex-1 overflow-y-auto flex-nowrap p-5 overflow-x-auto">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
