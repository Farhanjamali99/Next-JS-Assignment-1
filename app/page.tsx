import Link from "next/link"

export default function Home() {
  return (
  <div>
   <>Home</>
   <li><Link href="./About">About Us</Link></li>
   <li><Link href="./Contact">Contact Us</Link></li>
   <li><Link href="./Services/webdevelopment">Services</Link></li>
  </div>
  );
}
