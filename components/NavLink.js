import Link from "next/link";

function NavLink({ label, href, classes = "" }) {
   return (
      <Link href={href}>
         <a
            className={`mr-4 hover:text-zinc-300 uppercase focus:text-zinc-200 transition-all ${classes}`}
         >
            {label}
         </a>
      </Link>
   );
}

export default NavLink;
