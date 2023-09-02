import Button, { Variant } from "@/components/Button.tsx";

export default function Journey() {
  return (
    <section class="mt-20 py-10">
      <div class="flex flex-col items-center justify-center space-y-4 text-center md:text-left px-6">
        <h3 class="text-2xl md:text-4xl font-semibold dark:text-white">
          Begin your <span className="text-gradient-primary">DAO</span>{" "}
          journey today
        </h3>
        <p class="md:text-xl dark:text-white">
          Embrace the new era of decentralized governance and active community
          participation.
        </p>
      </div>
      <div class="flex justify-center gap-4 mt-8">
        <Button class="w-max">Use Platform</Button>
        <Button variant={Variant.Secondary} class="w-max">
          Documentation
        </Button>
      </div>
    </section>
  );
}
