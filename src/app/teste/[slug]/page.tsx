import { Metadata } from "next";

type TestProps = {
  params: { slug: number };
};

export const metadata: Metadata = {
  title: "Teste Slug",
};

export default function TesteSlug({ params }: TestProps) {
  return <div>Teste Slug {params.slug}</div>;
}
