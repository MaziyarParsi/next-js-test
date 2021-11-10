
import Link from "next/link"
const Navbar = () => {
 return (
  <nav>
   <div className="logo">
    <h2>nijas!</h2>
   </div>
   <Link href="/"><a>Home</a></Link>
   <Link href="about"><a>about</a></Link>
   <Link href='ninjas'><a>Ninja List</a></Link>
  </nav>
 )
}

export default Navbar

