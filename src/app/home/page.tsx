import { Suspense } from 'react';
import HomeTrending from './_components/HomeTrending';
import SkeletonCarouselList from '@/components/skeleton/skeleton-carousel-list';
import HomePopularTv from './_components/HomePopularTv';

export default async function HomePage() {
  return (
    <section className="container">
      <div className="flex flex-col gap-10">
        <Suspense fallback={<SkeletonCarouselList />}>
          <HomeTrending />
        </Suspense>
        <Suspense fallback={<SkeletonCarouselList />}>
          <HomePopularTv />
        </Suspense>
      </div>
    </section>
  );
}
