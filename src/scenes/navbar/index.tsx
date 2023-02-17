import ActionButton from "@/shared/ActionButton"
import { LangType, SelectedPage } from "@/shared/types"
import Link from "./Link"

type Props = {
  lang: LangType
  selectedPage: SelectedPage
  setSelectedPage: (value: SelectedPage) => void
  isTopOfPage?: boolean
}

const Navbar = ({
  isTopOfPage,
  lang,
  selectedPage,
  setSelectedPage,
}: Props) => {
  const flexBetween = "flex items-center justify-between"
  const navbarStyles = isTopOfPage ? "" : "bg-primary-100"
  return (
    <nav>
      <div
        className={`${flexBetween} ${navbarStyles} fixed top-0 z-30 w-full  py-6`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            <h1 className="text-xl font-bold">Foodle</h1>

            <div className={`${flexBetween} w-full`}>
              <div className={`${flexBetween} mx-auto gap-8 text-sm`}>
                <Link
                  page="Home"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Offer"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Service"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Menu"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="About Us"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              </div>
              <div className={`${flexBetween} gap-8`}>
                <p className="text-md text-primary-300">Sign in</p>
                <ActionButton
                  className="text-md text-black transition-all"
                  setSelectedPage={setSelectedPage}
                >
                  Sign Up
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
