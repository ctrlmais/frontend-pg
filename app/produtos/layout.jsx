import { Breadcrumb } from "antd";
import Link from "next/link";

export const metadata = {
  title: {
    template: "%s | Produtos",
  },
};

export default function Layout({ children }) {
  return (
    <div className="w-full max-w-page-limit mt-8">
      <Breadcrumb
        items={[{ title: <Link href="/">Início</Link> }, { title: "Produtos" }]}
        className="mb-8"
      />
      {children}
    </div>
  );
}
