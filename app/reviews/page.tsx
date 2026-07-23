import { Suspense } from "react";
import ReviewsContainer from "../_components/reviews/ReviewsContainer";
import Loading from "../loading";

const Page = () => {
  return (
    <div className="mt-6 pb-16 px-5">
      {/* Header Section */}

      <div className="border-forgrounde flex flex-col gap-0 border-b-2 pb-3">
        <p className="font-mono text-xs text-gray-600">01</p>
        <div className="flex flex-col gap-0">
          <h1 className="font-inter text-2xl font-semibold">Client reviews</h1>
          <span className="text-sm text-gray-600">
            6 testimonials · 4.8 average rating
          </span>
        </div>
      </div>

      <header className="bg-surface divide-foreground mt-6 flex items-center border-2 font-mono">
        <div className="xs:px-4 xs:py-4 flex h-full flex-1 flex-col items-start gap-2 border-r-2 px-3 py-2">
          <p className="text-xs text-gray-600 uppercase">average</p>
          <div className="flex items-baseline gap-1">
            <p className="xs:text-3xl text-xl font-black sm:text-5xl">5.0</p>
            <p className="xs:text-sm text-xs text-gray-600">/5.0</p>
          </div>
        </div>
        <div className="xs:px-4 xs:py-4 flex h-full flex-1 flex-col items-start gap-2 border-r-2 px-3 py-2">
          <p className="text-xs text-gray-600 uppercase">projects</p>
          <div className="flex items-baseline gap-1">
            <p className="xs:text-3xl text-xl font-black sm:text-5xl">47</p>
            <p className="xs:text-sm text-xs text-gray-600">shipped</p>
          </div>
        </div>
        <div className="xs:px-4 xs:py-4 flex h-full flex-1 flex-col items-start gap-2 border-0 px-3 py-2">
          <p className="text-xs text-gray-600 uppercase">repeat</p>
          <div className="flex items-baseline gap-1">
            <p className="xs:text-3xl text-xl font-black sm:text-5xl">89%</p>
            <p className="xs:text-sm text-xs text-gray-600">clients</p>
          </div>
        </div>
      </header>

      {/* Reviews */}

      <Suspense fallback={<Loading className="h-full mt-40" />}>
        <ReviewsContainer />
      </Suspense>
     
    </div>
  );
};

export default Page;
