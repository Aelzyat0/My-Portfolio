import Link from "next/link";
import Image from "next/image";

import { Button } from "../ui/button";

import Navbar from "../HeaderComponents/Navbar";
import MobileNavbar from "../HeaderComponents/MobileNavbar";

import { images } from "@/utils/assets";

const Header = () => {
  return (
    <header className="py-8 text-white xl:py-12">
      <div className="container flex items-center justify-between mx-auto">
        <Link href={"/"} className="flex items-center">
          <Image
            src={images.logo}
            alt="Ahmed Elzyat"
            width={40}
            height={40}
            className="mr-2"
          />
          <h1 className="text-4xl font-semibold">
            AElzyat<span className="text-accent">0</span>
          </h1>
        </Link>

        <div className="items-center hidden gap-8 xl:flex">
          <Navbar />
          <Link href={"/contact"}>
            <Button>Hire me</Button>
          </Link>
        </div>

        <div className="xl:hidden">
          <MobileNavbar />
        </div>
      </div>
    </header>
  );
};

export default Header;
