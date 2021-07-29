import Link from "next/link";

export default function Header() {
  return (
    <h2 className="text-2xl mt-20 mb-1 md:mb-12 md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight">
      <Link href="/">
        <a className="hover:underline">Back to Blog</a>
      </Link>
      .
    </h2>
  );
}
