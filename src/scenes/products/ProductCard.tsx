import ActionButton from "@/shared/ActionButton"
import { SelectedPage } from "@/shared/types"
import { StarIcon } from "@heroicons/react/24/solid"
import HumburgerImage from "@/assets/Humburger.jpg"

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

const ProductCard = ({ setSelectedPage }: Props) => {
  return (
    <div className="mr-5 mb-20 w-1/4">
      <div className="relative  rounded-3xl bg-primary-700 px-5">
        <div className="relative">
          <div className="absolute -top-20 -right-20">
            <img
              alt="photo"
              className=" h-[280px] w-[280px] rounded-full border-[12px] border-red-500"
              src={HumburgerImage}
            />
          </div>
        </div>
        <div className="relative h-[200px]"></div>
        <div className="relative my-6">
          <div className="text-2xl font-bold text-gray-700">Chicken Burger</div>
          <div className="flex items-center gap-2 py-2">
            <div className="flex gap-1">
              {new Array(0, 1, 2, 3, 4).map((element) => (
                <StarIcon key={element} className="w-5 text-secondary-500" />
              ))}
            </div>
            <div className="text-gray-400">{"(160)"}</div>
          </div>
          <div className="flex items-center justify-between py-8">
            <div className="text-4xl font-bold text-gray-700">$3.50</div>
            <div className="">
              <ActionButton
                className="rounded-full bg-primary-400 px-6 py-4 text-white"
                setSelectedPage={setSelectedPage}
              >
                Buy Now
              </ActionButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
