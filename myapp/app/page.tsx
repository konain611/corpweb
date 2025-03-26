import AboutUs from "./components/aboutus";
import BannerCarousel from "./components/carousel";
import Approach from "./components/ourApproach";

export default async function Page() {

  await new Promise((resolve) => setTimeout(resolve, 800));

  return (
    <div>
      <BannerCarousel/>
      <AboutUs/>
      <Approach/>
    </div>
  )
}