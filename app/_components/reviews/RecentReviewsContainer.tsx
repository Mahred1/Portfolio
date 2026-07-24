import { client } from "@/app/sanity/client";
import { SanityDocument } from "next-sanity";
import RecentReview from "./RecentReview";

const POST_QUERY = `*[_type == "review"]
  { _id, name,description,position,company }`;
const options = { next: { revalidate: 30 } };

const RecentReviewsContainer = async () => {
  const reviews = await client.fetch<SanityDocument[]>(POST_QUERY, {}, options);

  return (
    <ul className="mt-5 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-3">
      {reviews.map((review) => {
        return (
          <li key={review._id}>
            <RecentReview
              description={review.description}
              name={review.name}
              position={review.position}
              company={review.company}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default RecentReviewsContainer;
