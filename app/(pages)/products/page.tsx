// pages/index.js
import Image from 'next/image';

const productsData = {
  jams: [
    { id: 1, src: '/jams/jam1.png', name: 'Strawberry Jam' },
    { id: 2, src: '/jams/jam2.png', name: 'Blueberry Jam' },
    { id: 2, src: '/jams/jam3.png', name: 'Blueberry Jam' },
    { id: 2, src: '/jams/jam4.png', name: 'Blueberry Jam' },
    { id: 2, src: '/jams/jam5.png', name: 'Blueberry Jam' },
    { id: 2, src: '/jams/jam6.png', name: 'Blueberry Jam' },
    { id: 2, src: '/jams/jam7.png', name: 'Blueberry Jam' },

    // Add more items as needed
  ],
  olive: [
    { id: 1, src: '/olive/olive1.png', name: 'Green Olives' },
    { id: 2, src: '/olive/olive2.png', name: 'Black Olives' },
    { id: 2, src: '/olive/olive3.png', name: 'Black Olives' },
    { id: 2, src: '/olive/olive4.png', name: 'Black Olives' },
    { id: 2, src: '/olive/olive5.png', name: 'Black Olives' },

    // Add more items as needed
  ],
  peanuts: [
    { id: 1, src: '/peans/peans1.png', name: 'Salted Peanuts' },
    { id: 2, src: '/peans/peans2.png', name: 'Roasted Peanuts' },
    { id: 2, src: '/peans/peans3.png', name: 'Roasted Peanuts' },
    { id: 2, src: '/peans/peans4.png', name: 'Roasted Peanuts' },
    { id: 2, src: '/peans/peans5.png', name: 'Roasted Peanuts' },
    { id: 2, src: '/peans/peans6.png', name: 'Roasted Peanuts' },

    // Add more items as needed
  ],
  pinks: [
    { id: 1, src: '/pink/pink1.png', name: 'Pink Item 1' },
    { id: 2, src: '/pink/pink2.png', name: 'Pink Item 2' },
    { id: 2, src: '/pink/pink3.png', name: 'Pink Item 2' },
    { id: 2, src: '/pink/pink4.png', name: 'Pink Item 2' },

    // Add more items as needed
  ],
};

export default function Home() {
  const renderSection = (title:string, products:any,id:string) => (
    <div className="mb-40 gap-10 mt-10 " id={id} >
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      <div className="flex flex-row flex-wrap gap-6 justify-center xl:justify-normal  ">
        {products.map((product:any) => (
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
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="container mx-auto p-6">
      {renderSection('مربيات', productsData.jams,"jams")}
      {renderSection('زيتون', productsData.olive,"olives")}
      {renderSection('معلبات', productsData.peanuts,"peans")}
      {renderSection('مخلالات', productsData.pinks,"pinks")}
    </div>
  );
}
