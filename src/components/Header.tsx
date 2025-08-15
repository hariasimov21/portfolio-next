
import Link from "next/link";

export default function Header() {
  return (
    <>
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
        {/* Logo/Brand */}
        <Link href="/">
          <span className="text-xl font-bold text-gray-800 cursor-pointer">Portfolio</span>
        </Link>
        {/* Navigation Links */}
        <div className="flex space-x-4">
          <Link href="/about">
            <span className="text-gray-700 hover:text-gray-900 cursor-pointer">About</span>
          </Link>
          <Link href="/projects">
            <span className="text-gray-700 hover:text-gray-900 cursor-pointer">Projects</span>
          </Link>
          <Link href="/skills">
            <span className="text-gray-700 hover:text-gray-900 cursor-pointer">Skills</span>
          </Link>
          <Link href="/contact">
            <span className="text-gray-700 hover:text-gray-900 cursor-pointer">Contact</span>
          </Link>
        </div>
      </nav>
    </header>
    </>
  );
}