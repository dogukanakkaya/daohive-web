import { ComponentChildren, ComponentProps } from "preact";
import { tw } from "twind";

export enum Variant {
  Primary = "bg-primary text-white",
  Secondary = "bg-gray-800 text-white", // @todo
}

interface Props {
  children: ComponentChildren;
  variant?: Variant;
}

export default function Button({ children, variant = Variant.Primary, ...rest }: & Props & ComponentProps<"button">) {
  const { class: className, ...restAttributes } = rest;
  const _class = tw("button", variant, className as string);

  return <button class={_class} {...restAttributes}>{children}</button>;
}
