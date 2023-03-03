import { useState, useEffect } from "react"
import { LangType, SelectedPage } from "@/shared/types"
import { HashRouter as Router, Link } from "react-router-dom"
import Main from "@/pages/Main"
import Profile from "@/pages/Profile"
import { Routes, Route } from "react-router-dom"
import Navbar from "./scenes/navbar"

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  )
  const [isTopOfPage, setIsTopOfPage] = useState(true)

  useEffect(() => {
    console.log("update")
  }, [])

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
      <Routes>
        <Route
          path="/"
          element={
            <Navbar
              lang={LangType.RUS}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              isTopOfPage={isTopOfPage}
            />
          }
        >
          <Route
            index
            element={
              <Main
                isTopOfPage={isTopOfPage}
                lang={LangType.RUS}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            }
          />
          <Route
            path="profile"
            element={
              <Profile
                isTopOfPage={isTopOfPage}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                lang={LangType.RUS}
              />
            }
          />
        </Route>
      </Routes>
    </div>
  )
}

export default App
