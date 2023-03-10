import HText from "@/shared/HText"
import { LangType, SelectedPage } from "@/shared/types"
import HomePageImage from "@/assets/HomePageImage.png"
import HomePageArrow from "@/assets/Arrow.png"
import { PlayIcon } from "@heroicons/react/24/solid"
import {
  ShoppingBagIcon,
  PaperAirplaneIcon,
  ArrowPathIcon,
  CreditCardIcon,
} from "@heroicons/react/24/outline"
import FeatureCard from "./FeatureCard"
import AnchorLink from "react-anchor-link-smooth-scroll"

const features = [
  {
    icon: <PaperAirplaneIcon />,
    title: "Fast Delivery",
    description:
      "The Food Will Be Delivered To You Home Within 1-2 hours Of Your Ordering",
  },
  {
    icon: <ArrowPathIcon />,
    title: "Fresh Food",
    description:
      "You Food Will Be Delivered 100% Fresh To Your Home. We Do Not Deliver Stale Food",
  },
  {
    icon: <CreditCardIcon />,
    title: "Free Delivery",
    description:
      "Your Food Delivery Is Absolutely Free. No Cost Just Order And Enjoy",
  },
]

type Props = {
  lang: LangType
  selectedPage: SelectedPage
  setSelectedPage: (value: SelectedPage) => void
}

const Home = ({ lang, selectedPage, setSelectedPage }: Props) => {
  return (
    <div>
      <section
        id="home"
        className="gap-16 rounded-b-3xl bg-primary-600 py-10 pb-20 md:h-full"
      >
        <div className="z-10 mx-auto mt-32 flex w-5/6 justify-between">
          <div>
            <div className="w-4/5">
              <div>
                <HText className="text-5xl">All Fast Food is</HText>
                <HText className="text-5xl"> Available at Foodle</HText>
              </div>
              <div className="flex items-center gap-8 py-10">
                <div className="h-[55px] w-[70px] rounded-full bg-gray-50"></div>
                <p className="text-gray-400">
                  We Are Just A Click Away When You Crave for Delicious Fast
                  Food{" "}
                </p>
              </div>
              <div className="itmes-center flex gap-4 py-4">
                <AnchorLink href="#menuitems">
                  <div className="flex h-[55px] w-[180px] items-center rounded-full  bg-primary-400 transition-all hover:bg-primary-500">
                    <div className="item-center mx-1.5 flex h-[45px] w-[45px] justify-center rounded-full bg-secondary-400">
                      <ShoppingBagIcon className="p-3 text-sm text-gray-600" />
                    </div>
                    <div className="text-md px-2 font-bold text-white">
                      Buy Now
                    </div>
                  </div>
                </AnchorLink>

                <div className="flex items-center gap-3">
                  <div className=" mx-1.5 flex h-[55px] w-[55px] -rotate-45 items-center justify-center rounded-full  border-4 border-primary-500 border-b-transparent border-r-transparent bg-white">
                    <PlayIcon className="rotate-45 p-3 text-secondary-500 " />
                  </div>
                  <div className="font-bold text-gray-700">How to Order</div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[450px] w-[450px]">
            <div className="absolute -top-[-100px] -left-[-650px] z-[1]">
              <img alt="arrow" src={HomePageArrow} />
            </div>
            <img alt="photo" src={HomePageImage} />
          </div>
        </div>
      </section>
      <div id="service" className="">
        <div className="mx-auto mt-[-120px] h-[200px] w-4/5 rounded-3xl bg-white p-8 drop-shadow-md">
          <div className="flex h-full items-center gap-8">
            {features.map((card) => (
              <FeatureCard
                key={card.title}
                icon={card.icon}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
