import { Suspense } from "react";
import Shop from "./components/Shop";

const ShopPage = () => {
  return (
    <Suspense>
      <Shop />
    </Suspense>
  );
};

export default ShopPage;
