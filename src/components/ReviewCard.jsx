import RenderStars from "./RenederStars";

const ReviewCard = ({ review }) => {
  const { name, vote, text, created_at } = review;
  return (
    <div className="card mt-4">
      <div className="card-header">
        <RenderStars vote={vote} />
      </div>
      <div className="card-body">
        <figure>
          <blockquote className="blockquote">
            <p>{text}</p>
          </blockquote>
          <figcaption className="blockquote-footer">
            <cite title="Source Title">{name}</cite> il {created_at}
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

export default ReviewCard;
