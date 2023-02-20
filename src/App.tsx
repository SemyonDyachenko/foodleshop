import { useState, useEffect } from "react"
import Navbar from "@/scenes/navbar"
import { LangType, SelectedPage } from "@/shared/types"
import Home from "@/scenes/home"
import Products from "./scenes/products"

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  )
  const [isTopOfPage, setIsTopOfPage] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true)
        setSelectedPage(SelectedPage.Home)
      }
      handleScroll
      if (window.scrollY !== 0) setIsTopOfPage(false)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="App">
      <Navbar
        isTopOfPage={isTopOfPage}
        lang={LangType.ENG}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home
        lang={LangType.ENG}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Products
        lang={LangType.ENG}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
    </div>
  )
}

export default App
