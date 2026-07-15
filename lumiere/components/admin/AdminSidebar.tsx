import Link from "next/link";
import { adminNavigation } from "@/lib/navigation";

export default function AdminSidebar() {
  return (
    <aside className="w-64 bg-gray-100 p-4">  
      <h2>Lumière Admin</h2>
      <nav>
        {adminNavigation.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}