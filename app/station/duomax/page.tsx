import Banner from "./components/Banner";
import Blocks from "./components/Blocks";
import InterfaceBanner from "./components/InterfaceBanner";
import TV from "./components/TV";
import ClearSound from "./components/СlearSound";

const DuoMaxPage = () => {
  return (
    <div className="overflow-hidden">
      <Banner />
      <InterfaceBanner />
      <Blocks />
      <ClearSound />
      <TV />
    </div>
  );
};

export default DuoMaxPage;
