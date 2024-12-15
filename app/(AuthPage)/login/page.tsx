import Input from "@/component/auth/form-component";
import { Button } from "@/component/auth/form-component";
import Link from "next/link";
import Image from "next/image";
import GoogleIcon from "@/public/images/google.svg";
import GitHubIcon from "@/public/images/github.svg";
import Next from "@/public/images/fb.svg";

export default function LoginPage() {
  return (
    <div className="mt-24 rounded bg-black/80 px-6 py-10 md:mt-0 md:max-w-sm md:px-14">
      <form action="">
        <h1 className="text-3xl font-semibold text-white"> Log In</h1>
        <div className="space-y-4 mt-5">
          <Input
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            className="placeholder:text-xs  placeholder:text-gray-400 w-full inline-block focus:ring  focus:ring-[white] focus:outline-none "
          />
          <Input
            id="password"
            type="password"
            name="password"
            placeholder="password"
            className="placeholder:text-xs  placeholder:text-gray-400 w-full inline-block focus:ring  focus:ring-[white] focus:outline-none "
          />
          <Button
            type="submit"
            className="w-full bg-[#e50914] active:bg-violet-700 hover:bg-[#ad1820] h-13"
          >
            Log In
          </Button>
        </div>
      </form>
      \
      <div className=" text-gray-300 text-sm mt-2">
        <span> Don&apos;t Have an account ? </span>

        <Link
          className="text-white hover:underline cursor-pointer"
          href={"/sign-up"}
        >
          Register Now
        </Link>
        <div className="flex w-full items-center justify-center gap-x-3 mt-6">
          <Button
            type="button"
            className="hover:bg-[#131314] hover:text-black border-2 bg-zinc-950 border-neutral-800 rounded-lg"
          >
            <Image src={GoogleIcon} alt="google icon" className="w-7 h-7 " />
          </Button>
          <Button
            type="button"
            className="hover:bg-[#131314] hover:text-black border-2 bg-zinc-950 border-neutral-800 rounded-lg"
          >
            <Image src={GitHubIcon} alt="google icon" className="w-7 h-7 " />
          </Button>
          <Button
            type="button"
            className="hover:bg-[#131314] hover:text-black border-2 bg-zinc-950 border-neutral-800 rounded-lg"
          >
            <Image src={Next} alt="google icon" className="w-7 h-7 " />
          </Button>
        </div>
      </div>
    </div>
  );
}
