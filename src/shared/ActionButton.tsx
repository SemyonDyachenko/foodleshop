import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "./types"

type Props = {
  setSelectedPage: (value: SelectedPage) => void
  children: React.ReactNode
  className?: string
}

const ActionButton = ({ setSelectedPage, className, children }: Props) => {
  return (
    <AnchorLink
      onClick={() => setSelectedPage(SelectedPage.Home)}
      href={"#"}
      className={`rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white ${className}`}
    >
      {children}
    </AnchorLink>
  )
}

export default ActionButton
