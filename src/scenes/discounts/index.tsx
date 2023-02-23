import { LangType, SelectedPage } from "@/shared/types"
import HumburgerImage from "@/assets/Humburger.jpg"

type Props = {
  lang: LangType
  selectedPage: SelectedPage
  setSelectedPage: (value: SelectedPage) => void
}

const Discounts = ({ lang, selectedPage, setSelectedPage }: Props) => {
  return (
    <section id="discounts w-full gap-16 bg-back-0 py-10 md:h-full md:pb-0">
      <div className="mx-auto flex w-5/6  justify-between">
        <div className="w-3/5">
          <div className="w-90 flex h-[450x] opacity-90">
            <img
              src={HumburgerImage}
              className="absolute h-[450px] w-[700px] rounded-3xl "
            />
            <div className="relative p-8 text-3xl font-bold text-white">
              <div> 25%</div>
              <div className="py-2">Discount</div>
            </div>
          </div>
        </div>
        <div className=" flex w-2/5 flex-wrap">
          <div className="h-[215px] w-full rounded-3xl bg-primary-500"></div>
          <div className="my-5 h-[215px] w-full rounded-3xl bg-primary-500"></div>
        </div>
      </div>
    </section>
  )
}

export default Discounts
