import { PetStage } from "@/components/hero/PetStage";
import { Footer } from "@/components/layout/Footer";
import { Nav } from "@/components/layout/Nav";

export default function HomePage() {
  return (
    <main>
      <Nav />
      <PetStage />
      <Footer />
    </main>
  );
}
