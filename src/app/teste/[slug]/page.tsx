import { Metadata } from "next";
import Link from "next/link";

type TestProps = {
  params: { slug: number };
};

export const metadata: Metadata = {
  title: "Teste Slug",
};

export default function TesteSlug({ params }: TestProps) {
  return (
    <>
      <Link href="/">Voltar</Link>
      <div>Teste Slug {params.slug} editado</div>
    </>
  );
}
