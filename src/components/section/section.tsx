import { ComponentProps } from "react";
import Card from "../card/card";

interface PropsSection {
  items: ComponentProps<typeof Card>[];
}

export default function Section({ items }: PropsSection) {
  return (
    <section>
      <div className="flex gap-3 relative overflow-hidden overflow-x-auto -mr-4">
        {items.map((item, index) => (
          <div key={index}>
            <Card
              image={item.image}
              description={item.description}
              title={item.title}
              href={item.href}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
