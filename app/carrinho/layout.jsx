import { Breadcrumb } from "antd";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div>
      <Breadcrumb
        items={[
          { title: <Link href="/">Início</Link> },
          { title: "Meu Carrinho" },
        ]}
        className="mb-8"
      />
      {children}
    </div>
  );
}
