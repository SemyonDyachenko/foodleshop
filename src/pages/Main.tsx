import Navbar from "@/scenes/navbar"
import { LangType, SelectedPage } from "@/shared/types"

import Home from "@/scenes/home"
import Products from "@/scenes/products"
import Discounts from "@/scenes/discounts"
import Footer from "@/scenes/footer"

type Props = {
  lang: LangType
  selectedPage: SelectedPage
  setSelectedPage: (value: SelectedPage) => void
  isTopOfPage: boolean
}

const Main = ({ lang, isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  return (
    <div>
      <Home
        lang={lang}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Products
        lang={lang}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Discounts
        lang={lang}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Footer
        lang={lang}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
    </div>
  )
}

export default Main
