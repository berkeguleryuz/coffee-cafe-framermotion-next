import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhereToBuy from "@/components/WhereToBuy";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Services />
      <WhereToBuy />
    </div>
  );
}
