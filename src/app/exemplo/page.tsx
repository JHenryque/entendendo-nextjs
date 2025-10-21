"use client";

import { useSearchParams } from "next/navigation";

export default function Exemplo() {
  const searchParams = useSearchParams();
  const parametro = searchParams.get("slug");
  const presencaParam = searchParams.has("slug");
  return (
    <div>
      <h1>Exemplo</h1>
      <p>Parametro: {parametro}</p>
      {presencaParam ? <p>Parametro presente</p> : <p>Parametro ausente</p>}
    </div>
  );
}
