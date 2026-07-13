import Link from "next/link";
import { siteNavigation } from "@/lib/navigation";

export function Header() {
  return (
    <header>
      <nav>
        <Link href="/">Grupo Lumière</Link>

        <div>
          {siteNavigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}