'use client'
import Link from "next/link";
import logo from "@/public/logo-cc.svg";
import Image from "next/image";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();
  const links = [
    { title: "Enviar Feedback", path: "/" },
    { title: "Gerar Code", path: "/code-generator" },
    { title: "Login", path: "/login" },
  ];

  const linkItems = links.map(
    link => <Link href={link.path} key={link.path} className={`text-base flex-1 font-semibold text-center hover:text-[#643EE4] duration-300 ease-in-out ${pathname === link.path ? "text-[#643EE4]" : "text-gray-600"}`}>{link.title}</Link>
  )

  return (
    <header className="w-full flex flex-col items-center p-4">
      <Image src={logo} alt="logo" />
      <nav className="w-full max-w-[700px] mt-4 bg-gray-100 p-4 rounded-lg">
        <div className="flex max-w-[500px] m-auto justify-between gap-10" >
          {linkItems}
        </div>
      </nav>
    </header>
  )
}