import ActionButton from "@/shared/ActionButton"
import { AuthLinkType, LangType, SelectedPage } from "@/shared/types"
import AuthWidget from "@/widgets/auth"
import Link from "./Link"
import { useState, useEffect, useRef } from "react"

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
  const [onAuth, setOnAuth] = useState(false)
  const [authWidgetMode, setAuthWidgetMdode] = useState(AuthLinkType.SIGNIN)
  const signinBtnRef = useRef<HTMLButtonElement>(null)
  const signupBtnRef = useRef<HTMLButtonElement>(null)
  const authWidgetRef = useRef<HTMLDivElement>(null)

  const ChangeAuthWidgetState = (linkType: AuthLinkType) => {
    setAuthWidgetMdode(linkType)
    setOnAuth(!onAuth)
  }

  useEffect(() => {
    const closeAuthWidget = (e: MouseEvent) => {
      if (
        e.composedPath()[0] !== signinBtnRef.current &&
        e.composedPath()[0] !== signupBtnRef.current
      ) {
        if (!authWidgetRef.current?.contains(e.target as Node)) {
          setOnAuth(false)
        }
      }
    }

    document.body.addEventListener("click", closeAuthWidget)
    return () =>
      document.body.removeEventListener("click", () => closeAuthWidget)
  }, [])

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
                <ActionButton
                  ref={signinBtnRef}
                  onClick={() => ChangeAuthWidgetState(AuthLinkType.SIGNIN)}
                  className="text-md bg-transparent px-4 text-primary-300 transition-all"
                  setSelectedPage={setSelectedPage}
                >
                  Sign In
                </ActionButton>

                <ActionButton
                  ref={signupBtnRef}
                  onClick={() => ChangeAuthWidgetState(AuthLinkType.SIGNUP)}
                  className="text-md text-black transition-all"
                  setSelectedPage={setSelectedPage}
                >
                  Sign Up
                </ActionButton>
              </div>
              <AuthWidget
                opened={onAuth}
                ref={authWidgetRef}
                sourceLinkType={authWidgetMode}
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
