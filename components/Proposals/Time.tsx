import { timeToHumanReadable } from "@/utils/string.ts";
import { tw } from "twind";
import { ComponentProps } from "preact";

export default function Time({ startAt, endAt, class: _class }: { startAt: number; endAt: number } & ComponentProps<"span">) {
  const className = tw(_class as string, "flex items-center justify-center bg-gray-200 dark:bg-gray-900 hover:bg-opacity-50 rounded-xl");

  if (Date.now() > endAt) {
    return (
      <span class={className}>
        {timeToHumanReadable(endAt)} ago <i class="bi bi-clock-history ml-2"></i>
      </span>
    );
  }

  if (Date.now() > startAt && Date.now() < endAt) {
    return (
      <span class={className}>
        {timeToHumanReadable(endAt)} left <i class="bi bi-hourglass-split ml-2"></i>
      </span>
    );
  }

  return (
    <span class={className}>
      in {timeToHumanReadable(startAt)} <i class="bi bi-alarm ml-2"></i>
    </span>
  );
}
