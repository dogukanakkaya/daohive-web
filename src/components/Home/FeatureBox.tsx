interface Props {
  feature: {
    title: string;
    content: string;
    image: string;
    hoverImage?: string;
  };
}

export default function FeatureBox({ feature }: Props) {
  const handleMouseEnter = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    if (!feature.hoverImage) return;
    (e.target as HTMLImageElement).src = feature.hoverImage
  }

  const handleMouseLeave = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    (e.target as HTMLImageElement).src = feature.image
  }

  return (
    <div className="mt-12 md:even:mt-40">
      <img onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} src={feature.image} className="w-full h-[300px] md:h-[500px] object-cover rounded-xl mb-4" alt={feature.title} loading="lazy" />
      <h2 className="text-xl dark:text-white font-semibold">{feature.title}</h2>
      <p>{feature.content}</p>
    </div>
  )
}
