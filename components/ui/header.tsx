import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  return (
    <header className="w-full bg-tierra-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-16 items-center justify-between gap-3">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>
        </div>
      </div>
    </header>
  );
}
