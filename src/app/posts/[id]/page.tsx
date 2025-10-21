interface PostProps {
  params: { id: number };
}

export default function PostPage({ params }: PostProps) {
  console.log(params.id);
  return (
    <div>
      <h1>PostPage id: {params.id}</h1>
    </div>
  );
}
