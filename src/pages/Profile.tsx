import Navbar from "@/scenes/navbar"
import ProfileSection from "@/scenes/profile"
import { LangType, SelectedPage } from "@/shared/types"

type Props = {
  lang: LangType
  selectedPage: SelectedPage
  setSelectedPage: (value: SelectedPage) => void
  isTopOfPage: boolean
}

const Profile = ({
  lang,
  selectedPage,
  setSelectedPage,
  isTopOfPage,
}: Props) => {
  return <ProfileSection />
}

export default Profile
