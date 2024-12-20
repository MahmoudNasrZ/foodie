import { ReactNode } from "react";
import Image from "next/image";
import backGroundImage from "@/public/images/nf-bg.jpg";
import Logo from "@/public/images/netflix_logo.svg";
export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
      <Image
        src={backGroundImage}
        alt="BackGround Image NetFilx "
        className=" hidden sm:flex sm:object-cover -z-10 brightness-50 "
        fill
        priority
      />
      <Image
        src={Logo}
        alt="Netflix"
        width={120}
        height={120}
        className="absolute left-4 top-4 object-contain md:left-10 md:top-6 "
      />
      {children}
    </div>
  );
}
