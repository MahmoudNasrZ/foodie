import Input from "@/component/auth/form-component";
import { Button } from "@/component/auth/form-component";
import Link from "next/link";
import Image from "next/image";
import GoogleIcon from "@/public/images/google.svg";
import GitHubIcon from "@/public/images/github.svg";
import Next from "@/public/images/fb.svg";

export default function SignUpPage() {
  return (
    <div className="mt-24 rounded bg-black/80 px-6 py-10 md:mt-0  md:px-14 w-5/12 mx-auto">
      <form action="">
        <h1 className="text-3xl font-semibold text-white">Sign Up</h1>
        <div className="space-y-4 mt-5 ">
          <div className="flex gap-6">
            <Input
              id="fname"
              type="text"
              name="name"
              placeholder="First Name"
              className="placeholder:text-xs  placeholder:text-gray-400 inline-block focus:ring  focus:ring-[white] focus:outline-none md:max-w-sm w-1/2 "
            />

            <Input
              id="lname"
              type="text"
              name="lname"
              placeholder="Last Name"
              className="placeholder:text-xs  placeholder:text-gray-400  inline-block focus:ring  focus:ring-[white] focus:outline-none  md:max-w-sm w-1/2"
            />
          </div>

          <div className="flex gap-6">
            <Input
              id="password"
              type="password"
              name="password"
              placeholder="password"
              className="placeholder:text-xs  placeholder:text-gray-400  inline-block focus:ring  focus:ring-[white] focus:outline-none  md:max-w-sm w-1/2"
            />

            <Input
              type="date"
              id="date"
              name="date"
              placeholder=""
              className="placeholder:text-xs  placeholder:text-gray-400  inline-block focus:ring  focus:ring-[white] focus:outline-none  sm:w-full md:w-1/2"
            />
          </div>

          <div className="flex ">
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              className="placeholder:text-xs  placeholder:text-gray-400  inline-block focus:ring  focus:ring-[white] focus:outline-none  md:w-full sm:w-30"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-[#e50914] active:bg-violet-700 hover:bg-[#ad1820] h-13"
          >
            Sign up
          </Button>
        </div>
      </form>
      \
      <div className=" text-gray-300 text-sm mt-2">
        <span> Already Have an account? </span>
        <Link
          className="text-white hover:underline cursor-pointer"
          href={"/login"}
        >
          Log in now
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
