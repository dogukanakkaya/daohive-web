interface Props {
  trait: {
    title: string;
    content: string;
    icon: string;
  };
}

export default function TraitBox({ trait }: Props) {
  return (
    <div className="px-6 py-8 text-center lg:text-left lg:not-last:border-r dark:border-gray-700">
      <span>
        <i className={`bi bi-${trait.icon} text-6xl text-gradient-primary inline-block`} />
      </span>
      <h2 className="text-2xl font-semibold dark:text-white mt-4 mb-6">{trait.title}</h2>
      <p>{trait.content}</p>
    </div>
  )
}
