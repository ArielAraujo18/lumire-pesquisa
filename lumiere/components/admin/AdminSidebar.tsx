import Link from "next/link";

export function AdminSidebar() {
  return (
    <aside>
      <h2>Lumière Admin</h2>

      <nav>
        <Link href="/admin">Início</Link>
        <Link href="/admin/projetos">Projetos</Link>
        <Link href="/admin/noticias">Notícias</Link>
        <Link href="/admin/publicacoes">Publicações</Link>
        <Link href="/admin/equipe">Equipe</Link>
        <Link href="/admin/galeria">Galeria</Link>
      </nav>
    </aside>
  );
}