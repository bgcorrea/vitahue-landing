import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex" aria-label="VITAHUE">
      <span className="text-2xl font-bold tracking-wider text-tierra-700">
        VITAHUE
      </span>
    </Link>
  );
}
