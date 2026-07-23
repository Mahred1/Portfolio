import { client } from "@/app/sanity/client";
import { SanityDocument } from "next-sanity";
import ReviewCard from "./ReviewCard";

const REVIEW_QUERY = `*[_type == "review"]
  { _id, name,description,position,company,source }`;
const options = { next: { revalidate: 30 } };

const ReviewsContainer = async () => {
  const reviews = await client.fetch<SanityDocument[]>(
    REVIEW_QUERY,
    {},
    options,
  );

  return (
    <ul className="mt-8 grid gap-5 grid-cols-[repeat(auto-fit,minmax(310px,1fr))]">
      {reviews.map((review) => {
        return (
          <li key={review._id}>
            <ReviewCard
            name={review.name}
            position={review.position}
            company={review.company}
            source={review.source}
            description={review.description}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ReviewsContainer;
