interface Props {
  feature: {
    title: string;
    content: string;
    image: string;
  };
}

export default function FeatureBox({ feature }: Props) {
  return (
    <div className="mt-12 md:even:mt-40">
      <img src={feature.image} className="w-full h-[300px] md:h-[500px] object-cover rounded-xl mb-4" alt="" />
      <h2 className="text-xl dark:text-white font-semibold">{feature.title}</h2>
      <p>{feature.content}</p>
    </div>
  )
}
