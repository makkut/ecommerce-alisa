import { links } from "@/lib/links";
import Link from "next/link";

const DesktopMenu = () => {
  return (
    <nav>
      <ul className="flex justify-center items-center  space-x-10">
        {links.map((link, index) => (
          <li key={index}>
            <Link
              href={link.link}
              className="hover:text-primary ease-out duration-300"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default DesktopMenu;
