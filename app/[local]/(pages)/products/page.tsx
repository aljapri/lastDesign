"use client"
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import enMessages from '@/messages/en.json';
import arMessages from '@/messages/ar.json';

export default function Home() {
  const pathName = usePathname();
  const currentLanguage = pathName.split("/")[1] === "ar" ? "ar" : "en"; // Detect current language
  const messages = currentLanguage === "ar" ? arMessages : enMessages; // Select the appropriate messages

  const renderSection = (title: string, products: any[], id: string) => (
    <div className="mb-40 gap-10 mt-10 dark:bg-darkBackground dark:text-white" id={id}>
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      <div className="flex flex-row flex-wrap gap-6 justify-center xl:justify-normal">
        {products.map((product: any) => (
          <div key={product.id} className="group relative w-[250px]">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <Image
                src={product.src}
                alt={product.name}
                width={300}
                height={300}
                className="w-full h-[250px] transition-transform duration-300 transform group-hover:scale-110"
              />
            </div>
            {/* <p className="text-center mt-2">{product.name}</p> */}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="container mx-auto p-6">
      {renderSection(messages.products.jams, messages.productCategories.jams, "jams")}
      {renderSection(messages.products.olive, messages.productCategories.olive, "olives")}
      {renderSection(messages.products.peanuts, messages.productCategories.peanuts, "peans")}
      {renderSection(messages.products.pinks, messages.productCategories.pinks, "pinks")}
    </div>
  );
}
