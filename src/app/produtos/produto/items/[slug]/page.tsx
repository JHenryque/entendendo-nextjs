type itemsProdutoPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function itemsProdutoPage({
  params,
}: itemsProdutoPageProps) {
  const { slug } = await params;
  return (
    <div>
      <h1>itemsProduto {slug}</h1>
    </div>
  );
}
