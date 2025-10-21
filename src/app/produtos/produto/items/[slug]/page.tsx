type itemsProdutoPageProps = {
  params: {
    slug: string;
  };
};

export default function itemsProdutoPage({ params }: itemsProdutoPageProps) {
  return (
    <div>
      <h1>itemsProduto {params.slug}</h1>
    </div>
  );
}
