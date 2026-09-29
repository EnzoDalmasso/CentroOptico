import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { Hero } from "@/components/sections/Hero";
import { Collection } from "@/components/sections/Collection";
import { Catalog } from "@/components/sections/Catalog";
import { Services } from "@/components/sections/Services";
import { Editorial } from "@/components/sections/Editorial";
import { Benefits } from "@/components/sections/Benefits";
import { InstagramFeed } from "@/components/sections/InstagramFeed";
import { Contact } from "@/components/sections/Contact";
import { StructuredData } from "@/components/seo/StructuredData";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="contenido">
        <Hero />
        <Collection />
        <Catalog />
        <Services />
        <Editorial />
        <Benefits />
        <InstagramFeed />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
      <StructuredData />
    </>
  );
}
