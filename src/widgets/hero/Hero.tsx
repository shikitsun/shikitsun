import dynamic from "next/dynamic";
import { ShortAbout } from "./ShortAbout";
import { Suspense } from "react";

const Metrics = dynamic(() => import("@/src/widgets/hero/ExampleWithMetrics"));

export function Hero() {
  return (
    <div className="bg-bg-surface mx-0 max-w-full">
      <section className="py-container max-w-(--container-width) mx-auto">
        <div className="flex items-center lg:flex-row flex-col md:gap-y-7 gap-y-5 gap-x-15">
          <ShortAbout />
          <Suspense
            fallback={<div className="skeleton w-screen max-w-lg h-96"></div>}
          >
            <Metrics />
          </Suspense>
        </div>
      </section>
    </div>
  );
}
