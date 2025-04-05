import Link from "next/link";

export default function NavBar() {
  return (
    <>
      <nav>
        <ul className="max-w-7xl font-medium flex flex-row justify-center gap-20 mx-auto py-8">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/blogs">Blogs</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
