"use client";
import TypeWriterEffect from "typewriter-effect";

import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export function Main() {
  const stringsTypeWriter = [
    "Henrique Martins",
    "Santista",
    "Desenvolvedor Front-End",
    "Contribuidor Open-Source",
  ];

  return (
    <main className="w-full h-screen text-center">
      <div className="max-w-[1024px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            Moldando o Futuro através de linhas de código
          </p>

          <h1 className="py-4 text-gray-700">
            Olá, eu sou
            <span className="text-[#0070f3]">
              <TypeWriterEffect
                options={{
                  strings: stringsTypeWriter,
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 25,
                  cursor: "_",
                }}
              />
            </span>
          </h1>

          <p className="py-5 text-gray-600 max-w-[70%] m-auto">
            Técnico em Desenvolvimento de Sistemas e graduando em Ciência da
            Computação, sou desenvolvedor front-end focado em entregar as
            melhores experiências para o usuário.
          </p>

          <section className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a
              target="_blank"
              rel="noreferrer nofollow"
              title="Linkedin"
              aria-label="Linkedin"
              href="https://www.linkedin.com/in/hmartins-dev/"
              className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300"
            >
              <FaLinkedin />
            </a>
            <a
              target="_blank"
              rel="noreferrer nofollow"
              title="Github"
              aria-label="Github"
              href="https://github.com/hmartiins"
              className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300"
            >
              <FaGithub />
            </a>
            <a
              target="_blank"
              rel="noreferrer nofollow"
              title="Twitter"
              aria-label="Twitter"
              href="https://twitter.com/henriquemdev"
              className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300"
            >
              <FaTwitter />
            </a>
            <a
              target="_blank"
              rel="noreferrer nofollow"
              title="E-mail"
              aria-label="E-mail"
              href="mailto:hmartins.dev@gmail.com"
              className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300"
            >
              <AiOutlineMail />
            </a>
          </section>
        </div>
      </div>
    </main>
  );
}
