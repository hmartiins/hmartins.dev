import { ReactNode } from "react";
import "./globals.css";

import { ApplicationThemeContextProvider } from "@src/contexts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Henrique Martins | FrontEnd Developer",
  applicationName: "Henrique Martins | FrontEnd Developer",
  description:
    "Me chamo Henrique Martins, meu foco principal é React focado em entregar as melhores experiências para o usuário.",
  creator: "Henrique Martins",
  publisher: "Henrique Martins",
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: "https://hmartins.dev/" }],
  classification: "Website",
  keywords: [
    "Desenvolvedor de Software",
    "hmartins.dev",
    "Henrique Martins",
    "FrontEnd Developer",
    "React",
    "NextJS",
    "Santos",
    "Santo - SP",
    "São Paulo",
    "hmartins",
    "dev",
    "Programador",
    "Desenvolvedor FrontEnd",
    "Desenvolvedor de Aplicativo",
    "Desenvolvedor Santos",
    "Desenvolvedor Baixada Santista",
    "FullStack",
    "FullStack Developer",
    "FullStack Santos",
  ],
  openGraph: {
    images:
      "https://firebasestorage.googleapis.com/v0/b/hmartins-dev.appspot.com/o/eu-levva.jpeg?alt=media&token=4974b4bb-b5e1-4d09-a5ab-268d28aec1b2",
    type: "website",
    locale: "pt_BR",
  },
  other: {
    country: "Brazil",
    distribution: "Global",
    Language: "Portuguese",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <body>
        <ApplicationThemeContextProvider>
          {children}
        </ApplicationThemeContextProvider>
      </body>
    </html>
  );
}
