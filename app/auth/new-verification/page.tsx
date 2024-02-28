import { Suspense } from "react";

import NewVerification from "./components/NewVerification";
import CardWrapper from "@/components/CardWrapper";

const NewVerificationPage = () => {
  return (
    <Suspense>
      <CardWrapper>
        <NewVerification />
      </CardWrapper>
    </Suspense>
  );
};

export default NewVerificationPage;
