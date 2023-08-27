import Header from "@/components/Header.tsx";
import { LayoutProps } from "$fresh/server.ts";

export default function Layout({ Component }: LayoutProps) {
  return (
    <div class="container mx-auto">
      <Header />
      <Component />
    </div>
  );
}
