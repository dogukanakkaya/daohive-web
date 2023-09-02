import { ComponentChildren } from "preact";

interface Props {
  children: ComponentChildren;
  title: string;
  icon: string;
}

export default function TraitBox({ children, title, icon }: Props) {
  return (
    <div class="px-6 py-8 text-center lg:text-left lg:not-last:border-r dark:border-gray-700">
      <span>
        <i class={`bi bi-${icon} text-6xl text-gradient-primary`}></i>
      </span>
      <h2 class="text-2xl font-semibold dark:text-white mt-4 mb-6">{title}</h2>
      {children}
    </div>
  );
}
