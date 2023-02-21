import HText from "@/shared/HText"
import { LangType, SelectedPage } from "@/shared/types"
import { SocialIcon } from "react-social-icons"

type Props = {
  lang: LangType
  selectedPage: SelectedPage
  setSelectedPage: (value: SelectedPage) => void
}

const icons = ["twitter", "instagram", "facebook", "linkedin"]
const menuButtons = ["Home", "Offers", "Service", "About Us"]
const informationButtons = [
  "Menu",
  "Quality",
  "Make a Choice",
  "Salad With Vegetable",
  "Fast Delivery",
  "Subscribe",
]
const contanctButtons = [
  "+123 456 789",
  "Explore",
  "info@Foodish.Com",
  "1245, New York, USA",
]

const Footer = ({ lang, selectedPage, setSelectedPage }: Props) => {
  return (
    <section id="footer" className="mt-20 bg-primary-600">
      <div className="pb-2- mx-auto flex w-5/6 items-start justify-between pt-20">
        <div>
          <div>
            <HText className="text-4xl">Fooodish</HText>
            <div className="text-md my-5 text-gray-400">
              Continue Foodish 2023 all rights Reserved
            </div>
          </div>
          <div className="py-6">
            <HText className="text-4xl">Follow Us On</HText>
            <div className="text-md my-8 flex gap-4 text-gray-400">
              {icons.map((element) => (
                <SocialIcon className="p-26 text-gray-400" network={element} />
              ))}
            </div>
          </div>
        </div>

        <div>
          <div>
            <HText className="text-4xl">Menu</HText>
          </div>
          <div className="py-6">
            {menuButtons.map((element) => (
              <div className="pb-4 text-lg text-gray-400">{element}</div>
            ))}
          </div>
        </div>
        <div>
          <div>
            <HText className="text-4xl">Information</HText>
          </div>
          <div className="py-6">
            {informationButtons.map((element) => (
              <div className="pb-4 text-lg text-gray-400">{element}</div>
            ))}
          </div>
        </div>
        <div>
          <div>
            <HText className="text-4xl">Contact</HText>
          </div>
          <div className="py-6">
            {contanctButtons.map((element) => (
              <div className="pb-4 text-lg text-gray-400">{element}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
