import { ReactNode } from "react";
import "./globals.css";

export const metadata = {
  title: "Henrique Martins | FrontEnd Developer",
  description:
    "Me chamo Henrique Martins, meu foco principal é React focado em entregar as melhores experiências para o usuário.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
