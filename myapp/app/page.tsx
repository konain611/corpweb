import AboutUs from "./components/aboutus";
import BannerCarousel from "./components/carousel";
import CustomerRecognition from "./components/customerRecognition";
import Media from "./components/media";
import Approach from "./components/ourApproach";
import Solution from "./components/solution";

export default async function Page() {

  await new Promise((resolve) => setTimeout(resolve, 800));

  return (
    <div>
      <BannerCarousel/>
      <AboutUs/>
      <Approach/>
      <Solution/>
      <CustomerRecognition/>
      <Media/>
    </div>
  )
}