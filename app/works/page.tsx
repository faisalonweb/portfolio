"use client";

import React from "react";
import { useRouter } from "next/navigation";
import WorksComponent from "./WorksCardComponent";
import { card } from "../constants/item";

export default function page() {
  const router = useRouter();

  return (
    <div>
      <div className="flex gap-3 justify-center py-12 flex-wrap cursor-default">
        {card.map((item) => (
          <WorksComponent
            image={item.image}
            ImgTitle={item.ImgTitle}
            name={item.name}
            description={item.description}
            onClick={() => router.push(item.onClick)}
          />
        ))}
      </div>
    </div>
  );
}
