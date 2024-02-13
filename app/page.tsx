import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Slider from "@/components/Slider/Slider";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-auto ">
        <Slider />
      </main>
      <Footer />
    </>
  );
}
