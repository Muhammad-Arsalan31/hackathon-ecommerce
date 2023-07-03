import Image from "next/image"
import Link from "next/link"
import { ShoppingCart } from "lucide-react"

import Logo from "../assets/Logo.png"
import { Input } from "./ui/input"

const links = [
  { link: "/female", label: "Female" },
  { link: "/male", label: "male" },
  { link: "/kids", label: "Kids" },
  { link: "/all-products", label: "All products" },
]
export function Navbar() {
  return (
    <header className="container flex items-center justify-between mb-8">
      <Link href="/">
        <Image src={Logo} alt="logo" />
      </Link>
      <ul className="flex justify-between ">
        {links.map((link) => (
          <li className="text-md p-4" key={link.link}>
            <Link href={link.link}>{link.label}</Link>
          </li>
        ))}
      </ul>
      <Input placeholder="What are you looking for?" className="h-8 w-60" />
      <button
        type="button"
        className="relative inline-flex items-center rounded-full bg-gray-200 p-2 text-center text-sm font-medium text-white hover:bg-gray-400 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
      >
        <ShoppingCart color="black" size={20} />
        <div className="absolute -right-2 -top-2 inline-flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-red-500 text-xs font-bold text-white dark:border-gray-900">
          8
        </div>
      </button>
    </header>
  )
}
