"use client";

import { getCodeAbout } from "@/src/entities/about/api";
import { Meter } from "@/src/shared/lib/ui/Meter";
import {
  lazy,
  PropsWithChildren,
  ReactNode,
  Suspense,
  useEffect,
  useState,
} from "react";
import { onCLS, onINP, onLCP, Metric as IMetric } from "web-vitals";

const CodeBlock = lazy(() => import("@/src/shared/lib/ui/CodeBlock"));

interface IMetricProps extends PropsWithChildren {
  min: number;
  max: number;
  className?: string;
  unit?: ReactNode;
  metricCallback: (cb: (metric: IMetric) => void) => void;
  containerClassName?: string;
}

function MetricValue({
  min,
  max,
  metricCallback,
  children,
  unit,
  className,
  containerClassName,
}: IMetricProps) {
  const [value, setValue] = useState(0);
  const val = max - value;

  useEffect(() => {
    metricCallback((metric) => setValue(metric.value));
  }, [metricCallback]);

  return (
    <li
      className={`flex flex-col card fade-in delay-350 gap-y-6 py-4 px-4 ${containerClassName ?? ""}`}
    >
      <h6 className="text-[0.625rem] text-text-muted font-semibold tracking-widest">
        {children}
      </h6>
      <p className={`text-2xl font-bold ${className ?? ""}`}>
        {value}
        {unit}
      </p>
      <Meter value={val} max={max} min={min} className={className} />
    </li>
  );
}

interface IExampleWithMetricsProps {
  data: Awaited<ReturnType<typeof getCodeAbout>>;
}

export default function ExampleWithMetrics({ data }: IExampleWithMetricsProps) {
  return (
    <div className="flex flex-col gap-y-5">
      <Suspense
        fallback={<div className="skeleton w-screen max-w-lg h-96"></div>}
      >
        <CodeBlock className="fade-in delay-450">{data.codeExample}</CodeBlock>
      </Suspense>

      <ul className="grid grid-cols-3 items-center gap-x-4">
        <MetricValue
          min={0}
          max={5}
          metricCallback={onLCP}
          unit="s"
          className="text-accent-teal"
        >
          LCP
        </MetricValue>
        <MetricValue
          min={0}
          max={0.5}
          metricCallback={onCLS}
          className="text-accent-violet"
          containerClassName="delay-500"
        >
          CLS
        </MetricValue>
        <MetricValue
          min={0}
          max={500}
          metricCallback={onINP}
          unit="ms"
          className="text-accent-green"
          containerClassName="delay-600"
        >
          INP
        </MetricValue>
      </ul>
    </div>
  );
}
