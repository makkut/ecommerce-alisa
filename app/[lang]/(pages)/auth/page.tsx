import { AiFillGithub } from "react-icons/ai";
import LocaleSwitcher from "../../components/LocaleSwitcher";
import AlisaLogo from "../../components/AlisaLogo";
import { AuthForm } from "../../components/AuthForm";

const Auth = () => {
  return (
    <div className="flex h-[100vh] flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <AlisaLogo />
        </div>
        <AuthForm />
      </div>
    </div>
  );
};

export default Auth;
