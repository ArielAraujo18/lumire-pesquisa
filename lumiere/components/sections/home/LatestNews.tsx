import Image from "next/image";
import Link from "next/link";

const news = [
  {
    title: "Lumière apresenta projeto no Fórum de Inovação RN",
    summary:
      "Membros do grupo apresentaram resultados do projeto de Dados Urbanos durante o Fórum de Inovação e Tecnologia.",
    category: "Eventos",
    date: "14/11/2024",
    image: "/images/noticias/forum-inovacao.jpg",
    slug: "lumiere-apresenta-projeto-forum-inovacao-rn",
  },
  {
    title: "Visita técnica à Prefeitura de Angicos firma parceria",
    summary:
      "Equipe do Lumière visitou a secretaria municipal de planejamento para discutir novas soluções tecnológicas.",
    category: "Visitas técnicas",
    date: "02/10/2024",
    image: "/images/noticias/visita-tecnica.jpg",
    slug: "visita-tecnica-prefeitura-angicos",
  },
  {
    title: "Novo bolsista IC inicia pesquisa em mobilidade urbana",
    summary:
      "O grupo recebe novo integrante para desenvolver pesquisa sobre soluções tecnológicas para mobilidade urbana.",
    category: "Extensão",
    date: "19/09/2024",
    image: "/images/noticias/novo-bolsista.jpg",
    slug: "novo-bolsista-pesquisa-mobilidade-urbana",
  },
];

export function LatestNews() {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <header className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#27877d]">
              Novidades
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#071a2b] sm:text-4xl">
              Últimas notícias
            </h2>
          </div>

          <Link
            href="/noticias"
            className="hidden items-center gap-2 text-sm font-semibold text-[#27877d] hover:underline sm:inline-flex"
          >
            Ver todas
            <span aria-hidden="true">→</span>
          </Link>
        </header>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {news.map((item) => (
            <article
              key={item.slug}
              className="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.10)] transition hover:-translate-y-1 hover:shadow-lg"
            >
              <Link href={`/noticias/${item.slug}`}>
                <div className="relative aspect-[16/9] overflow-hidden bg-[#e6efeb]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition duration-300 hover:scale-105"
                  />
                </div>

                <div className="p-5">
                  <div className="flex flex-wrap items-center gap-3 text-xs">
                    <span className="rounded-full bg-[#e8f2f0] px-3 py-1 font-medium text-[#27877d]">
                      {item.category}
                    </span>

                    <time className="text-[#72ad99]">{item.date}</time>
                  </div>

                  <h3 className="mt-4 text-base font-bold leading-6 text-[#071a2b]">
                    {item.title}
                  </h3>

                  <p className="mt-2 line-clamp-2 text-sm leading-6 text-[#526866]">
                    {item.summary}
                  </p>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <Link
          href="/noticias"
          className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#27877d] hover:underline sm:hidden"
        >
          Ver todas
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}