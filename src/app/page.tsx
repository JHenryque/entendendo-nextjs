import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1>Hello World</h1>
        <Link href="/sobre">Sobre</Link>
        <Link href="/teste/post">Teste</Link>
        <Link href="/posts">Posts</Link>
        {/* <Link href="/exemplo?parametro=abc">Exemplo</Link> */}
        <Link href="/exemplo?slug=lugar-diferente">Exemplo</Link>
        <Link href="/produtos/produto/items/uma-caixa-de-cafe">Produtos</Link>
      </main>
    </div>
  );
}
