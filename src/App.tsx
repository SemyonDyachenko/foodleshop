import { useState } from "react"
import Navbar from "@/scenes/navbar"
import { LangType, SelectedPage } from "@/shared/types"
import Home from "@/scenes/home"

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  )

  return (
    <div className="App">
      <Navbar
        lang={LangType.ENG}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
    </div>
  )
}

export default App
