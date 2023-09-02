import Header from "@/components/Header.tsx";
import { LayoutProps } from "$fresh/server.ts";
import Footer from "@/components/Footer.tsx";

export default function Layout({ Component }: LayoutProps) {
  return (
    <>
      <Header />
      <div class="container mx-auto mt-8">
        <Component />
      </div>
      <Footer />
    </>
  );
}
