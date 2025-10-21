import BotaoRedirect from "@/components/BotaoRedirect";
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
      <BotaoRedirect />
      <div>Teste Slug {params.slug} editado</div>
    </>
  );
}
