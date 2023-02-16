import HText from "@/shared/HText"
import { SelectedPage } from "@/shared/types"

type Props = {
  selectedPage: SelectedPage
  setSelectedPage: (value: SelectedPage) => void
}

const Home = ({ selectedPage, setSelectedPage }: Props) => {
  return (
    <section
      id="home"
      className="gap-16 bg-primary-600 py-10 md:h-full md:pb-0"
    >
      <div className="z-10 mx-auto mt-32 w-5/6">
        <div>
          <div className="w-2/5">
            <div>
              <HText>All Fast Food is</HText>
              <HText> Available at Foodle</HText>
            </div>
          </div>
        </div>

        <div></div>
      </div>
    </section>
  )
}

export default Home
