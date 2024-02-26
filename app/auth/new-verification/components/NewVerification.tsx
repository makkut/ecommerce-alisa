"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { BeatLoader } from "react-spinners";

import { newVerification } from "@/actions/new-verification";
import { FormSuccess } from "@/components/FormSuccess/FromSuccess";
import { FormError } from "@/components/FormErorr/FormErorr";
import { Button } from "@/components/ui/button";

const NewVerification = () => {
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();
  const [loader, setLoader] = useState<boolean>(false);

  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const onSubmit = () => {
    setLoader(true);

    if (success || error) {
      setLoader(false);
      return;
    }

    if (!token) {
      setError("Missing token!");
      setLoader(false);
      return;
    }

    newVerification(token)
      .then((data) => {
        setSuccess(data.success);
        setError(data.error);
        setLoader(false);
      })
      .catch(() => {
        setError("Something went wrong!");
        setLoader(false);
      });
  };

  return (
    <>
      <div className="flex items-center w-full justify-center">
        {loader ? (
          <BeatLoader />
        ) : success || error ? (
          <>
            <FormSuccess message={success} />
            <FormError message={error} />
          </>
        ) : (
          <Button onClick={() => onSubmit()}>Confirm</Button>
        )}
      </div>
    </>
  );
};

export default NewVerification;
