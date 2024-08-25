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
        
        <Head>
        <title>اتصل بنا | شذا الشام</title>
      </Head>
      <div className="container mx-auto px-4">
        <div className="text-center mx-auto mb-10 max-w-lg">
          <h1 className="text-4xl font-bold mb-3 text-gray-800 dark:text-white">اتصل بنا</h1>
          <p className="text-gray-600 dark:text-white ">إذا كان لديك أي استفسارات أو تحتاج إلى دعم، لا تتردد في الاتصال بنا. نحن هنا لمساعدتك وتلبية جميع احتياجاتك.</p>
        </div>
        <div className="flex flex-col md:flex-row gap-5 justify-center">
          <div className="bg-primary dark:bg-[#0D1B2A] text-white flex flex-col justify-center p-6 rounded-lg shadow-lg w-full md:w-1/3">
            <h5 className="text-xl font-semibold mb-2 dark:text-white">اتصل بنا</h5>
            <p className="mb-4">            <FaPhoneAlt className="inline-block mr-3" />
            +012 345 67890</p>
            <h5 className="text-xl font-semibold mb-2 dark:text-white">أرسل لنا بريدًا إلكترونيًا</h5>
            <p className="mb-4">            <FaEnvelope className="inline-block mr-3" />
            info@example.com</p>
            <h5 className="text-xl font-semibold mb-2 dark:text-white">عنوان المكتب</h5>
            <p className="mb-4">            <FaMapMarkerAlt className="inline-block mr-3" />
            23 شارع، نيويورك، الولايات المتحدة</p>
            <h5 className="text-xl font-semibold mb-2 dark:text-white">تابعنا</h5>
            <div className="flex space-x-2 mt-2">
              <SocilaMedia/>
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <p className="mb-4 text-gray-700 dark:text-white">نموذج الاتصال غير مفعل حاليًا. احصل على نموذج اتصال فعال وقابل للعمل باستخدام Ajax و PHP في بضع دقائق فقط. ما عليك سوى نسخ ولصق الملفات، وإضافة بعض الشيفرات، وانتهى الأمر. <a className="text-blue-600 underline" href="https://htmlcodex.com/contact-form">قم بالتنزيل الآن</a>.</p>
            <form>
              <div className="grid grid-cols-1 gap-4">
                <div className="flex flex-col">
                  <label htmlFor="name" className="text-gray-700 dark:text-white">اسمك</label>
                  <input type="text" id="name" className="border border-gray-300 p-3 rounded-md" placeholder="اسمك" />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="email" className="text-gray-700 dark:text-white">بريدك الإلكتروني</label>
                  <input type="email" id="email" className="border border-gray-300 p-3 rounded-md" placeholder="بريدك الإلكتروني" />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="subject" className="text-gray-700 dark:text-white" >الموضوع</label>
                  <input type="text" id="subject" className="border border-gray-300 p-3 rounded-md" placeholder="الموضوع" />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="message" className="text-gray-700 dark:text-white">الرسالة</label>
                  <textarea id="message" className="border border-gray-300 p-3 rounded-md" placeholder="اترك رسالتك هنا" rows={8}></textarea>
                </div>
                <button type="submit" className="bg-primary dark:bg-[#0D1B2A] text-white py-3 px-5 rounded-md hover:bg-green-700">أرسل الرسالة</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
