"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="h-16 bg-slate-900 flex items-center gap-4 justify-center">
      <Link className={`link ${pathname === "/" ? "active" : ""}`} href="/">
        Home
      </Link>
      <Link
        className={`link ${pathname === "/sobre" ? "active" : ""}`}
        href="/sobre"
      >
        Sobre
      </Link>
      <Link
        className={`link ${pathname === "/teste/post" ? "active" : ""}`}
        href="/teste/post"
      >
        Teste
      </Link>
      <Link href="/posts">Posts</Link>
      {/* <Link href="/exemplo?parametro=abc">Exemplo</Link> */}
      <Link href="/exemplo?slug=lugar-diferente">Exemplo</Link>
      <Link href="/produtos/produto/items/uma-caixa-de-cafe">Produtos</Link>
    </header>
  );
}
