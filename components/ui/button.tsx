import { ReactNode } from "react"

type Props = {
  children: ReactNode,
  onClick: (e:React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button({ children, onClick }:Props) {
  return (
    <button onClick={onClick} className="text-14 text-white border-2 rounded py-5 px-11">
      {children}
    </button>
  )
}
