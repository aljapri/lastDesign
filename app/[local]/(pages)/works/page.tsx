import ContactUs from '@/components/ContactUs';
import SocilaMedia from '@/components/shared/SocilaMedia';
import Head from 'next/head';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

export default function Careers() {
  // قائمة الوظائف المتاحة
  const jobs = [
    {
      title: 'مسؤول مبيعات',
      location: 'الرياض، السعودية',
      description: 'نبحث عن مسؤول مبيعات يتمتع بخبرة في مجال البيع والتواصل مع العملاء.',
      requirements: [
        'خبرة لا تقل عن 3 سنوات في مجال المبيعات.',
        'مهارات تواصل قوية.',
        'القدرة على العمل تحت الضغط.'
      ],
    },
    {
      title: 'محاسب مالي',
      location: 'جدة، السعودية',
      description: 'نحتاج إلى محاسب مالي لديه خبرة في إعداد التقارير المالية وتحليل البيانات.',
      requirements: [
        'درجة البكالوريوس في المحاسبة أو المالية.',
        'خبرة لا تقل عن 5 سنوات.',
        'إلمام تام بالبرامج المالية مثل Excel و SAP.'
      ],
    },
    {
      title: 'مدير تسويق',
      location: 'الدمام، السعودية',
      description: 'نبحث عن مدير تسويق لديه خبرة في تطوير الاستراتيجيات التسويقية وزيادة المبيعات.',
      requirements: [
        'درجة البكالوريوس في التسويق أو مجال ذي صلة.',
        'خبرة لا تقل عن 7 سنوات في التسويق.',
        'إبداع وقدرة على إدارة الفرق التسويقية.'
      ],
    },
    {
        title: 'عامل في المصنع',
        location: 'المدينة الصناعية، السعودية',
        description: 'نبحث عن عامل مصنع للعمل في خطوط الإنتاج، على أن يكون قادرًا على التعامل مع المعدات والآلات.',
        requirements: [
          'القدرة على العمل في بيئة تصنيع.',
          'الالتزام بالمواعيد والانضباط في العمل.',
          'القدرة على العمل الجماعي.',
          'لا يشترط وجود خبرة سابقة (التدريب متاح).'
        ],
      },
  ];

  return (
    <div>
            <div className="min-h-screen bg-gray-100 py-10 dark:bg-darkBackground dark:!text-white">
      <Head>
        <title >فرص العمل | شذا الشام</title>
      </Head>
      <div className="container mx-auto px-4 dark:text-white">
        <h1 className="text-4xl font-bold text-center text-green-700 mb-10 dark:text-white">فرص العمل في شذا الشام</h1>
        <p className="text-center text-gray-600 mb-12 dark:text-white">انضم إلى فريقنا وساهم في تقديم منتجات غذائية عالية الجودة.</p>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3  ">
          {jobs.map((job, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 dark:bg-darkBlue">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2 dark:text-white">{job.title}</h2>
              <p className="text-green-600 mb-2 dark:text-white">{job.location}</p>
              <p className="text-gray-700 mb-4 dark:text-white">{job.description}</p>
              <h3 className="text-lg font-semibold dark:text-white text-gray-800 mb-2">المتطلبات:</h3>
              <ul className="list-disc list-inside dark:text-white text-gray-700 mb-4">
                {job.requirements.map((requirement, reqIndex) => (
                  <li key={reqIndex}>{requirement}</li>
                ))}
              </ul>

            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="  py-12 flex flex-col md:px-28 dark:text-white  " 
    
    >
    </div>
    </div>
  );
}
