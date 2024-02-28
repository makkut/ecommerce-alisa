"use client";

import AlisaLogo from "./AlisaLogo";

const CardWrapper = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex h-[100vh] flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md px-5">
        <div className="flex justify-center">
          <AlisaLogo size={150} />
        </div>
        {children}
      </div>
    </div>
  );
};

export default CardWrapper;
