import Link from "next/link"
import { ReactNode } from "react"

type Props = {
  children: ReactNode,
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void,
  link?: string
  className?: string
  type?: 'outside'|'inside'
}

export default function Button({ children, onClick, link, className, type }: Props) {
  
  if (link) {
    if (type === 'inside') {
      return <Link href={link}>
        <div className={"text-16 tablet:text-20 text-primary-gray rounded py-8 tablet:py-12 text-center font-bold border-primary-gray border-2 tablet:max-w-[300px] m-auto" + " " + className}>
          {children}
        </div>

    </Link>
    }
    return <Link href={link}>
      <div className={"text-16 tablet:text-20 bg-primary-invert text-white rounded py-8 tablet:py-12 text-center font-bold" + " " + className}>
        {children}
      </div>

    </Link>
  }
  return (
    <button onClick={onClick} className={"text-14 text-white border-2 rounded py-5 px-11" + " " + className}>
      {children}
    </button>
  )
}
