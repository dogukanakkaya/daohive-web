import { timeToHumanReadable } from '@/utils/string.ts'
import clsx from 'clsx'

export default function Time({ startAt, endAt, className }: { startAt: number; endAt: number } & React.ComponentProps<'span'>) {
  const _className = clsx(className, 'flex items-center justify-center bg-gray-200 dark:bg-gray-900 hover:bg-opacity-50 rounded-xl')

  if (Date.now() > endAt) {
    return (
      <span className={_className}>
        {timeToHumanReadable(endAt)} ago <i className="bi bi-clock-history ml-2"></i>
      </span>
    )
  }

  if (Date.now() > startAt && Date.now() < endAt) {
    return (
      <span className={_className}>
        {timeToHumanReadable(endAt)} left <i className="bi bi-hourglass-split ml-2"></i>
      </span>
    )
  }

  return (
    <span className={_className}>
      in {timeToHumanReadable(startAt)} <i className="bi bi-alarm ml-2"></i>
    </span>
  )
}
