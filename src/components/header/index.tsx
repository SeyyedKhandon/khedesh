import Image from "next/image";
import Link from "next/link";
import MobileMenu from "@/components/navigation/mobileMenu";
import ThemeSwitcher from "@/components/theme/themeSwitcher";

export default function Header() {
  return (
    <header className="fixed top-0 z-10 flex w-full items-center justify-between bg-white py-4 px-6 dark:bg-gray-900">
      <Link href="/" className="flex items-center gap-2">
        <Image src="/logo.png" alt="Logo" width="50" height="50" />
        <strong className="text-xl">Seyyed</strong>
        <ThemeSwitcher />
      </Link>

      <MobileMenu />
    </header>
  );
}
