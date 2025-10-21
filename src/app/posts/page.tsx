"use client";

import Link from "next/link";
import { redirect } from "next/navigation";

export default function PostsPage() {
  const postsIds = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
  ];

  const sair = false;

  function sairDoSistema() {
    if (!sair) {
      redirect("/");
    }
  }

  return (
    <div>
      <h1>PostsPages</h1>
      <ul>
        {postsIds.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>Post {post.id}</Link>
          </li>
        ))}
        <button onClick={sairDoSistema}>Sair</button>
      </ul>
    </div>
  );
}
