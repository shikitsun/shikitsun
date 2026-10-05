"use client";
import { getShortAbout } from "@/src/entities/about/api";
import { getAuthor } from "@/src/entities/author/api";
import { PropsWithChildren } from "react";

interface IStatProps extends PropsWithChildren {
  value: string;
  highlight?: boolean;
}

function Stat({ value, children, highlight }: IStatProps) {
  return (
    <div className="flex flex-col gap-y-1 py-1 flex-1">
      <dt
        className="lg:text-[1.625rem] sm:text-2xl text-xl leading-tight font-bold text-text-primary data-highlight:text-accent-teal"
        data-highlight={highlight || void 0}
      >
        {value}
      </dt>
      <dd className="note-text">{children}</dd>
    </div>
  );
}

interface IShortAboutProps {
  author: Awaited<ReturnType<typeof getAuthor>>;
  data: Awaited<ReturnType<typeof getShortAbout>>;
}

export function ShortAbout({ author, data }: IShortAboutProps) {
  return (
    <div className="flex flex-col lg:gap-y-5.5 md:gap-y-7 gap-y-5 fade-in delay-250">
      {author.available_for && (
        <p className="status-pill w-fit fade-in delay-500">
          <span className="dot variant--size-md text-accent-green"></span>
          Available for {author.available_for} roles
        </p>
      )}

      <h2
        className="lg:text-[3.5rem] md:text-[2.875rem] text-3xl font-bold"
        dangerouslySetInnerHTML={{ __html: data.title }}
      ></h2>

      <h3
        className="lg:text-md text-sm text-text-secondary fade-in delay-300"
        dangerouslySetInnerHTML={{ __html: data.description }}
      ></h3>

      {!!data.stats.length && (
        <>
          <hr className="separator" />
          <dl className="grid grid-cols-4 items-center gap-x-2.5 max-sm:grid-cols-2 fade-in delay-500">
            {data.stats.map((stat, idx, arr) => (
              <div key={idx} className="flex items-center gap-x-2.5">
                <Stat value={stat.value} highlight={stat.highlight}>
                  {stat.title}
                </Stat>
                {/* while not is last element */}
                {arr.length - 1 !== idx && (
                  <hr className="separator variant-vertical max-sm:hidden py-5" />
                )}
              </div>
            ))}
          </dl>
        </>
      )}
    </div>
  );
}
