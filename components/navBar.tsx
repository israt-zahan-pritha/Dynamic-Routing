import Link from "next/link";

export default function NavBar() {
  return (
    <>
      <nav>
        <ul className="flex flex-row gap-10 mx-auto mb-10">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/blogs">Blogs</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
