import { percentOf } from "../utils";

interface IMeterProps {
  min: number;
  max: number;
  value: number;
  className?: string;
}

export function Meter({ min, max, value, className }: IMeterProps) {
  return (
    <div className={`w-full bg-line rounded-full h-1 ${className}`}>
      <div
        className="bg-current h-1 rounded-full transition-all duration-500"
        style={{ width: `${percentOf(value, min, max)}%` }}
      ></div>

      {/* for aria */}
      <meter className={`hidden`} min={min} max={max} value={value}></meter>
    </div>
  );
}
