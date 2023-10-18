import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="flex max-w-md w-full p-5 bg-slate-800 rounded-lg">
      <ul className="flex flex-row justify-around w-full">
        <li>
          <Link href="/feed" className=""> Feed</Link>
        </li>
        <li>
          <Link href="/profile" className=""> Profil </Link>
        </li>
        <li>
          <Link href="/following" className=""> Following </Link>
        </li>
        <li>
          <Link href="/follower" className=""> Follower </Link>
        </li>
      </ul>
    </nav>
  )
}
