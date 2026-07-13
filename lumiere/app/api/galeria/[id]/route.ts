export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  return Response.json({
    message: "Imagem removida da galeria",
    id,
  });
}