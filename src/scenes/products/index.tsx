import HText from "@/shared/HText"
import { LangType, SelectedPage } from "@/shared/types"
import HumburgerImage from "@/assets/HumburgerAds.png"
import PizzaImage from "@/assets/PizzaAds.png"
import ActionButton from "@/shared/ActionButton"
import ProductCard from "./ProductCard"

type Props = {
  lang: LangType
  selectedPage: SelectedPage
  setSelectedPage: (value: SelectedPage) => void
}

const Products = ({ lang, selectedPage, setSelectedPage }: Props) => {
  return (
    <section
      id="menu"
      className="w-full gap-16 bg-back-0 py-10 md:h-full md:pb-0"
    >
      <div className="mx-auto my-10 flex w-5/6 items-center justify-between pt-10">
        <div>
          <div>
            <HText className="text-5xl text-gray-600">
              <p className="flex gap-4 text-primary-500">
                <p className="text-gray-600">Best </p> Delivered
              </p>
              Categories
            </HText>
          </div>
        </div>
        <div className="w-2/5 px-20 text-justify">
          <div className="gap-8 text-sm text-gray-400">
            Here Are Some Of Out Best Distributed Categories. If You Want You
            Can Order From Here.
          </div>
        </div>
      </div>

      <div className="w-full gap-8">
        <div className="flex items-center justify-between">
          <div className="w-1/3">
            <div className="p-18">
              <img alt="humburger" src={HumburgerImage} />
            </div>
            <div className="flex justify-center text-2xl font-bold text-gray-600">
              Chicken Burgrer
            </div>
            <div className="flex justify-center py-2 text-sm text-primary-500">
              Order now {">"}{" "}
            </div>
          </div>
          <div className="w-1/3">
            <div className="p-18">
              <img alt="humburger" src={PizzaImage} />
            </div>
            <div className="flex justify-center text-2xl font-bold text-gray-600">
              Chicken Burgrer
            </div>
            <div className="flex justify-center py-2 text-sm text-primary-500">
              Order now {">"}{" "}
            </div>
          </div>
          <div className="w-1/3">
            <div className="p-18">
              <img alt="humburger" src={HumburgerImage} />
            </div>
            <div className="flex justify-center text-2xl font-bold text-gray-600">
              Chicken Burgrer
            </div>
            <div className="flex justify-center py-2 text-sm text-primary-500">
              Order now {">"}
            </div>
          </div>
        </div>
      </div>

      <div
        id="menuitems"
        className="mx-auto my-10 flex w-5/6 items-center justify-between pt-10"
      >
        <div>
          <div>
            <HText className="text-5xl text-gray-600">
              <p className="flex gap-4">
                Our
                <p className="flex gap-4 text-primary-500">Regular</p>
                Menu
              </p>
            </HText>
          </div>
          <div className="py-6 text-sm text-gray-400">
            These Are Our Regular Menus. You Can
            <br />
            Order Anything You Like.
          </div>
        </div>
        <div className="flex w-2/5 justify-end pr-20 text-justify">
          <div className="gap-8 text-sm text-gray-400">
            <ActionButton
              className="text-md rounded-full bg-primary-400 py-3 font-bold text-white"
              setSelectedPage={setSelectedPage}
            >
              See All
            </ActionButton>
          </div>
        </div>
      </div>

      <div className=" mx-auto flex w-5/6 flex-wrap justify-between gap-0 pt-20 pb-5">
        <ProductCard setSelectedPage={setSelectedPage} />
        <ProductCard setSelectedPage={setSelectedPage} />
        <ProductCard setSelectedPage={setSelectedPage} />
        <ProductCard setSelectedPage={setSelectedPage} />
        <ProductCard setSelectedPage={setSelectedPage} />
        <ProductCard setSelectedPage={setSelectedPage} />
      </div>
    </section>
  )
}

export default Products
