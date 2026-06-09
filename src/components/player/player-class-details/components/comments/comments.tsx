import Comment, { PropsComment } from "./coment";

interface PropsComments {
  comments: PropsComment[];
}
export default function Comments({ comments }: PropsComments) {
  return (
    <div className="flex gap-2 flex-col">
      {comments.map((comment) => (
        <Comment
        key={comment.publishDate}
          {...comment}
        />
      ))}
    </div>
  );
}
