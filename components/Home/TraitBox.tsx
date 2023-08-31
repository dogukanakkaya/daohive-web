import { ComponentChildren } from "preact";

interface Props {
  children: ComponentChildren;
  title: string;
  icon: string;
}

export default function TraitBox({ children, title, icon }: Props) {
  return (
    <div class="p-8">
      <span>
        <i class={`bi bi-${icon} text-6xl text-gradient-primary`}></i>
      </span>
      <h2
        class="text-2xl font-semibold text-white mt-4 mb-6"
        style={{
          textShadow: "0 0 2px #fff, 0 0 18px #4f46e5",
        }}
      >
        {title}
      </h2>
      {children}
    </div>
  );
}
