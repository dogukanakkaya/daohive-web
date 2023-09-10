import Header from "@/components/Header.tsx";
import { LayoutProps } from "$fresh/server.ts";
import Footer from "@/components/Footer.tsx";
import { Head } from "$fresh/runtime.ts";
import { CSS } from "$gfm";

export default function Layout({ Component }: LayoutProps) {
  return (
    <>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: CSS }} />
      </Head>
      <Header />
      <div class="container mx-auto mt-8">
        <Component />
      </div>
      <Footer />
    </>
  );
}
