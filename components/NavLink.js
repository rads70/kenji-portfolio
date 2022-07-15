import Link from "next/link";

function NavLink({ label, href, classes = "", onClick }) {
   return (
      <Link href={href}>
         <a
            className={`mr-4 hover:text-zinc-300 uppercase focus:text-zinc-200 transition-all ${classes}`}
            onClick={onClick}
         >
            {label}
         </a>
      </Link>
   );
}

export default NavLink;
