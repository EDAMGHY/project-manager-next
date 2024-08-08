import { Footer, Navbar } from "@/layout";
import { ModeToggle } from "@/theme";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="">
        App
        <ModeToggle />
      </main>
      <Footer />
    </>
  );
}
