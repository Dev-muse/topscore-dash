import Link from "next/link";

export default function Logo() {
  return (
    <Link 
      href="/" 
      className="inline-flex items-center gap-1 text-inherit hover:opacity-80 transition-opacity text-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm p-1 -m-1"
      aria-label="TopScore Home"
    >
      <span className="font-bold">Top</span>
      <span className="font-semibold">Score</span>
    </Link>
  );
}
