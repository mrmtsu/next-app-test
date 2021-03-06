import Link from "next/link";
import { useComments } from "src/hooks/useComments";

export const CommentsComponent = () => {
  const { data, error, isLoading, isEmpty } = useComments();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  if (isEmpty) {
    return <p>No Comments found.</p>;
  }

  return (
    <ol>
      {data.map((comment) => {
        return (
          <li key={comment.id}>
            <Link href={`/comments/${comment.id}`}>
              <a>{`${comment.name}
                (${comment.email})`}</a>
            </Link>
          </li>
        );
      })}
    </ol>
  );
};
