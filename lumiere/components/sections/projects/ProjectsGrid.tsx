"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const categories = [
  "Todos",
  "IoT",
  "Sustentabilidade",
  "Dados",
  "Extensão",
  "Pesquisa",
];

const projects = [
  {
    title: "Monitoramento Inteligente de Ambientes Urbanos",
    description:
      "Rede de sensores de baixo custo para monitorar qualidade do ar, ruído, temperatura e umidade em tempo real.",
    category: "IoT",
    status: "Em andamento",
    image: "/images/projetos/monitoramento.jpg",
    slug: "monitoramento-inteligente-ambientes-urbanos",
  },
  {
    title: "Soluções IoT para Cidades Inteligentes",
    description:
      "Plataforma aberta de integração para dispositivos IoT heterogêneos em contextos urbanos.",
    category: "IoT",
    status: "Concluído",
    image: "/images/projetos/cidades-inteligentes.jpg",
    slug: "solucoes-iot-cidades-inteligentes",
  },
  {
    title: "Sustentabilidade e Tecnologia Aplicada",
    description:
      "Pesquisa sobre eficiência energética e tecnologias verdes para ambientes públicos e institucionais.",
    category: "Sustentabilidade",
    status: "Em andamento",
    image: "/images/projetos/sustentabilidade.jpg",
    slug: "sustentabilidade-tecnologia-aplicada",
  },
  {
    title: "Dados Urbanos para Tomada de Decisão",
    description:
      "Painel de indicadores urbanos para apoio à gestão pública em municípios do semiárido potiguar.",
    category: "Dados",
    status: "Em andamento",
    image: "/images/projetos/dados-urbanos.jpg",
    slug: "dados-urbanos-tomada-de-decisao",
  },
  {
    title: "Infraestrutura Inteligente para Ambientes Públicos",
    description:
      "Implantação de infraestrutura digital em praças e espaços públicos de Angicos.",
    category: "Extensão",
    status: "Planejado",
    image: "/images/projetos/infraestrutura.jpg",
    slug: "infraestrutura-inteligente-ambientes-publicos",
  },
];

export function ProjectsGrid() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const filteredProjects =
    selectedCategory === "Todos"
      ? projects
      : projects.filter(
          (project) => project.category === selectedCategory,
        );

  return (
    <section className="bg-[#f8faf8] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => {
            const active = category === selectedCategory;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full border px-5 py-2 text-sm font-medium transition ${
                  active
                    ? "border-[#27877d] bg-[#27877d] text-white shadow-md"
                    : "border-black/10 bg-white text-[#526866] hover:border-[#27877d] hover:text-[#27877d]"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project) => (
            <article
              key={project.slug}
              className="flex overflow-hidden rounded-2xl border border-black/5 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.10)] transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex w-full flex-col">
                <div className="relative aspect-[16/7] overflow-hidden bg-[#e8f2f0]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition duration-300 hover:scale-105"
                  />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex flex-wrap gap-2 text-xs">
                    <span className="rounded-full bg-[#e8f2f0] px-3 py-1 font-medium text-[#27877d]">
                      {project.category}
                    </span>

                    <span className="rounded-full bg-[#edf6ec] px-3 py-1 font-medium text-[#287a42]">
                      ● {project.status}
                    </span>
                  </div>

                  <h2 className="mt-4 text-lg font-bold leading-6 text-[#071a2b]">
                    {project.title}
                  </h2>

                  <p className="mt-3 flex-1 text-sm leading-6 text-[#526866]">
                    {project.description}
                  </p>

                  <Link
                    href={`/projetos/${project.slug}`}
                    className="mt-8 inline-flex w-fit items-center gap-3 text-sm font-semibold text-[#27877d] hover:underline"
                  >
                    Ver detalhes
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}