type EditNewsPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditNewsPage({
  params,
}: EditNewsPageProps) {
  const { id } = await params;

  return (
    <main>
      <h1>Editar notícia</h1>
      <p>ID: {id}</p>
    </main>
  );
}