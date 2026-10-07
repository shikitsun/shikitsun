import { CodeWork } from "../widgets/codework";
import Footer from "../widgets/footer";
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
      <Footer />
    </main>
  );
}
