import Image from "next/image";
import Link from "next/link";
import MobileMenu from "@/components/navigation/mobileMenu";
import ThemeSwitcher from "../theme/themeSwitcher";

export default function Header() {
  return (
    <header className="flex items-center justify-between py-4 px-6">
      <Link href="/" className="flex items-center gap-2">
        <Image src="/logo.png" alt="Logo" width="50" height="50" />
        <strong className="text-xl">Seyyed</strong>
        <ThemeSwitcher />
      </Link>

      <MobileMenu />
    </header>
  );
}
