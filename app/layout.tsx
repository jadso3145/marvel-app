import Nav from "@/app/components/Nav";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
   title: "marvel-app-KV",
   description: "esto es una prueba para la base de datos de KV de vercel",
};

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html lang="es">
         <body className={inter.className}>
            <Nav />
            {children}
         </body>
      </html>
   );
}
