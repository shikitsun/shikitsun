import { CodeWork } from "../widgets/codework";
import { Header } from "../widgets/header/Header";
import { Hero } from "../widgets/hero/Hero";
import Stack from "../widgets/Stack";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Stack />
      <CodeWork />
    </main>
  );
}
