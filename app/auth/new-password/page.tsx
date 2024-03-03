import CardWrapper from "@/components/CardWrapper";
import NewPasswordForm from "./components/NewPasswordForm";
import { Suspense } from "react";

const NewPasswordPage = () => {
  return (
    <Suspense>
      <CardWrapper>
        <NewPasswordForm />;
      </CardWrapper>
    </Suspense>
  );
};

export default NewPasswordPage;
