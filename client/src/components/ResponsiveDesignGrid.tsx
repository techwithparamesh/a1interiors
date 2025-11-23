import React from "react";

interface DesignCardProps {
  imageSrc: string;
  title: string;
}

interface ResponsiveDesignGridProps {
  designs: DesignCardProps[];
}

export default function ResponsiveDesignGrid({ designs }: ResponsiveDesignGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {designs.map((design, idx) => (
        <div
          key={idx}
          className="bg-white rounded-t-xl shadow-md overflow-hidden flex flex-col"
        >
          <div className="w-full h-[220px] rounded-t-xl overflow-hidden bg-gray-100">
            <img
              src={design.imageSrc}
              alt={design.title}
              className="w-full h-full object-cover object-center"
              style={{ display: "block" }}
            />
          </div>
          <div className="p-4 flex-1 flex items-center justify-center">
            <h3 className="font-semibold text-base text-center text-gray-900 line-clamp-2">
              {design.title}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
}
