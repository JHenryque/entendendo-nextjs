import Link from "next/link";

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

  return (
    <div>
      <h1>PostsPages</h1>
      <ul>
        {postsIds.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>Post {post.id}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
