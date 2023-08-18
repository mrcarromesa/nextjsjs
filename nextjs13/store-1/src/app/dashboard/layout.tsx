import { ReactNode } from "react";

export default function DashboardLayout({
  children,
  chart,
  count,
}: {
  children: ReactNode;
  chart: ReactNode;
  count: ReactNode;
}) {
  return (
    <section>
      <nav>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
        </ul>
      </nav>
      {children}

      {chart}
      {count}
    </section>
  );
}
