import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import Link from "next/link";
import AlisaLogo from "../AlisaLogo";
import { LuMenu } from "react-icons/lu";
import { links } from "@/lib/links";

const MobileMenu = () => {
  return (
    <Drawer direction="right">
      <DrawerTrigger>
        <LuMenu size={33} />
      </DrawerTrigger>
      <DrawerContent>
        <div className="flex justify-center mb-11">
          <AlisaLogo size={50} color={true} />
        </div>
        <nav className="flex justify-center">
          <ul className="text-center space-y-3">
            {links.map((link, index) => (
              <li key={index}>
                <Link href={link.link}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileMenu;
