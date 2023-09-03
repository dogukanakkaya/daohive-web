import { timeToHumanReadable } from "@/utils/string.ts";

export default function Time({ startAt, endAt }: { startAt: number, endAt: number }) {
  if (Date.now() > endAt) {
    return (
      <span class="flex items-center justify-center w-1/3 h-16 bg-gray-900 hover:bg-opacity-50 rounded-xl cursor-pointer">
        {timeToHumanReadable(endAt)} ago <i class="bi bi-clock-history ml-2"></i>
      </span>
    )
  }

  if (Date.now() > startAt && Date.now() < endAt) {
    return (
      <span class="flex items-center justify-center w-1/3 h-16 bg-gray-900 hover:bg-opacity-50 rounded-xl cursor-pointer">
        {timeToHumanReadable(endAt)} left <i class="bi bi-hourglass-split ml-2"></i>
      </span>
    )
  }

  return (
    <span class="flex items-center justify-center w-1/3 h-16 bg-gray-900 hover:bg-opacity-50 rounded-xl cursor-pointer">
      in {timeToHumanReadable(startAt)} <i class="bi bi-alarm ml-2"></i>
    </span>
  )
}
