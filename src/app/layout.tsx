import { ReactNode } from "react";
import "./globals.css";

export const metadata = {
  title: "",
  description: "",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
