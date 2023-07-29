"use client";

import { useEffect } from "react";
import { increment } from "app/actions";

export default function ViewCounter({
  slug,
  allViews,
  trackView,
}: {
  slug: string;
  allViews: any;
  trackView?: boolean;
}) {
  // const viewsForSlug = allViews && allViews.find((view) => view.slug === slug);
  // const number = new Number(viewsForSlug?.count || 0);
  const number = allViews;

  useEffect(() => {
    // if (trackView) {
    //   increment(slug);
    // }
  }, []);

  return (
    <p className='text-neutral-600 dark:text-neutral-400'>
      {`${number.toLocaleString()} views`}
    </p>
  );
}
