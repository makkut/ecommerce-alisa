"use client";

import AccountForm from "./AccountForm";
import { User } from "@/type";
import { useUser } from "@/app/hooks/use-user";

interface AccountFormProps {
  user?: User;
}

const AcoountDetails = ({ user }: AccountFormProps) => {
  const { isLoading, error, data } = useUser(user?._id!);

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <h2 className="text-lg font-medium text-gray-900">Адрес доставки</h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          {/* <div className="text-base font-medium text-gray-900">
            Ortder total
          </div> */}
          <AccountForm user={data} />
          {/* <Currency value={totalPrice} /> */}
        </div>
      </div>
      {/* <Button className="w-full mt-6" onClick={() => {}}>
        Checkout
      </Button> */}
    </div>
  );
};

export default AcoountDetails;
