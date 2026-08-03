import { PetStage } from "@/components/hero/PetStage";
import { Footer } from "@/components/layout/Footer";
import { Nav } from "@/components/layout/Nav";
import { PetsSection } from "@/components/pets/PetsSection";

export default function HomePage() {
  return (
    <main>
      <Nav />
      <PetStage />
      <PetsSection />
      <Footer />
    </main>
  );
}
