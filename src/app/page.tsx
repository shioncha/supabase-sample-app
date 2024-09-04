import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Next.js + Supabase</h1>
      <h2>Auth</h2>
      <ul>
        <li><Link href="/login">Login</Link></li>
        <li><Link href="/private">Private</Link></li>
      </ul>
      <h2>Storage</h2>
      <ul>
        <li><Link href="/insert">Insert</Link></li>
        <li><Link href="/select">Select</Link></li>
        <li><Link href="/update">Update</Link></li>
      </ul>
    </main>
  );
}
