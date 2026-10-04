import { ShortAbout } from "./ShortAbout";

export function Hero() {
  return (
    <section className="bg-bg-surface py-container">
      <div className="flex items-center lg:flex-row flex-col md:gap-y-7 gap-y-5 gap-x-15">
        <ShortAbout />
      </div>
    </section>
  );
}
