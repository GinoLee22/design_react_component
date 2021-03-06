import Foot from "../src/components/Footer/Footer";
import Header from "../src/components/Header/Header";
import Menu from "../src/components/Menu/Menu";
import Speakers from "../src/components/Speakers/Speakers";
import SpeakerSearchBar from "../src/components/SpeakerSearchBar/SpeakerSearchBar";

function Page() {
  return (
    <div>
      <Header />
      <Menu />
      <SpeakerSearchBar />
      <Speakers />
      <Foot />
    </div>
  )
}

export default Page;