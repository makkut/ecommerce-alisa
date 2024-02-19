import Banner from "./components/Banner";
import Blocks from "./components/Blocks";
import InterfaceBanner from "./components/InterfaceBanner";
import ClearSound from "./components/СlearSound";

const DuoMaxPage = () => {
  return (
    <div className="overflow-hidden">
      <Banner />
      <InterfaceBanner />
      <Blocks />
      <ClearSound />
    </div>
  );
};

export default DuoMaxPage;
