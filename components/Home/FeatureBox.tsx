import { asset } from "$fresh/runtime.ts";

interface Props {
  feature: {
    title: string;
    content: string;
    image: string;
  };
}

export default function FeatureBox({ feature }: Props) {
  return (
    <div class="mt-12 md:even:mt-40">
      <img src={asset(feature.image)} class="w-full h-[300px] md:h-[500px] object-cover rounded-xl mb-4" alt="" />
      <h2 class="text-xl dark:text-white font-semibold">{feature.title}</h2>
      <p>{feature.content}</p>
    </div>
  );
}
