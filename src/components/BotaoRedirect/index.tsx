"use client";

import { useRouter } from "next/navigation";

export default function BotaoRedirect() {
  const router = useRouter();
  return (
    <div>
      <button onClick={() => router.push("/")}>Voltar</button>
    </div>
  );
}
