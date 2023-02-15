import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "./types"

type Props = {
  setSelectedPage: (value: SelectedPage) => void
  children: React.ReactNode
  className: string
}

const ActionButton = ({ setSelectedPage, className, children }: Props) => {
  return (
    <AnchorLink
      onClick={() => setSelectedPage(SelectedPage.Home)}
      className={`cursor-pointer rounded-3xl border border-primary-300 px-10 py-2 transition-all hover:bg-primary-300 hover:text-white ${className}`}
    >
      {children}
    </AnchorLink>
  )
}

export default ActionButton
