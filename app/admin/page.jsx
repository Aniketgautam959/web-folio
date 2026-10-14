import { AdminPanel } from "@/components/admin-panel";

export const metadata = {
  title: "Admin",
  robots: { index: false, follow: false },
};

export default function AdminPage() {
  return <AdminPanel />;
}
