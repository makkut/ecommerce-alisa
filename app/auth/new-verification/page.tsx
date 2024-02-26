import { Suspense } from "react";
import NewVerification from "./components/NewVerification";

const NewVerificationPage = () => {
  return (
    <Suspense>
      <NewVerification />
    </Suspense>
  );
};

export default NewVerificationPage;
