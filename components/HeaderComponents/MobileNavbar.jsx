"use client";

import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

import navLinks from "@/constants/navbarData";

import { images } from "@/utils/assets";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className="flex items-center justify-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="mt-32 mb-40 text-2xl text-center">
          <Link href={"/"} className="flex items-center justify-center gap-2">
            <Image
              src={images.logo}
              alt="Ahmed Elzyat"
              width={40}
              height={40}
              className="mr-2"
            />
            <h1 className="text-4xl font-semibold">
              Ahmed Elzyat<span className="text-accent">0</span>
            </h1>
          </Link>
        </div>

        <nav className="flex flex-col items-center justify-center gap-8 -mt-20">
          {navLinks.map((link, index) => {
            const isActive =
              link.path === pathname || pathname.startsWith(`${link.path}/`);

            return (
              <Link
                href={link.path}
                key={index}
                onClick={handleLinkClick}
                className={`${
                  isActive ? "text-accent border-b-2 border-accent" : ""
                } capitalize font-medium hover:text-accent transition-all`}
              >
                {link.name}
              </Link>
            );
          })}
          <Link href={"/contact"} onClick={handleLinkClick}>
            <Button>Hire me</Button>
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavbar;
