import Head from 'next/head';
import Image from 'next/image';

// بيانات فريق الإدارة
const managementTeam = [
  {
    name: 'محمد أحمد',
    position: 'المدير العام',
    image: '/manager1.png',
    description: 'محمد أحمد هو المدير العام لشركة شذا الشام ويتمتع بخبرة واسعة في إدارة الشركات الغذائية.',
  },
  {
    name: 'سارة علي',
    position: 'المدير المالي',
    image: '/manager1.png',
    description: 'سارة علي تتولى إدارة الأمور المالية والتخطيط المالي لضمان استقرار وتطوير الشركة.',
  },
  {
    name: 'خالد يوسف',
    position: 'مدير الإنتاج',
    image: '/manager1.png',
    description: 'خالد يوسف يشرف على عملية الإنتاج بأعلى معايير الجودة لضمان منتجات آمنة وممتازة.',
  },
  // أضف هنا بيانات المزيد من الأعضاء حسب الحاجة
];

export default function Management() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 dark:bg-darkBackground dark:!text-white">
      <Head>
        <title>إدارة الشركة | شذا الشام</title>
      </Head>
      <div className="container mx-auto px-4 dark:text-white">
        <h1 className="text-4xl font-bold text-center dark:text-white text-green-700 mb-10">إدارة شركة شذا الشام</h1>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {managementTeam.map((member, index) => (
            <div key={index} className="bg-white dark:bg-darkBlue dark:text-white shadow-lg rounded-lg p-6 text-center">
              <Image
                src={member.image}
                alt={member.name}
                className="w-32 h-32 mx-auto rounded-full mb-4"
                width={100}
                height={100}
              />
              <h2 className="text-2xl font-semibold dark:text-white text-gray-800 mb-2">{member.name}</h2>
              <p className="text-green-600 mb-2 dark:text-white">{member.position}</p>
              <p className="text-gray-600 dark:text-white" >{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
