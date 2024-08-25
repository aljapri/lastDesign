import Head from 'next/head';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 dark:bg-darkBackground dark:!text-white">
      <Head>
        <title className='dark:!text-white'>عن شركة شذا الشام</title>
      </Head>
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center dark:!text-white text-green-700 mb-10">عن شركة شذا الشام</h1>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold dark:!text-white text-green-600 mb-4">من نحن</h2>
          <p className="text-gray-700 dark:!text-white leading-relaxed">
            شركة شذا الشام هي شركة رائدة في مجال المنتجات الغذائية، متخصصة في تقديم أجود أنواع المواد الغذائية المحلية والطبيعية. نلتزم في شذا الشام بتوفير منتجات عالية الجودة تلبي احتياجات المستهلك وتحقق رضا العملاء.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl dark:!text-white font-semibold text-green-600 mb-4">رؤيتنا</h2>
          <p className="text dark:!text-white-gray-700 leading-relaxed">
            أن نكون في طليعة الشركات الغذائية في المنطقة، ونعمل باستمرار على تطوير منتجاتنا والالتزام بأعلى معايير الجودة والسلامة لتحقيق أفضل قيمة لعملائنا.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl dark:!text-white font-semibold text-green-600 mb-4">رسالتنا</h2>
          <p className="text-gray-700 dark:!text-white leading-relaxed">
            تقديم منتجات غذائية صحية وطبيعية بجودة استثنائية، مع الالتزام بالقيم الأخلاقية والمهنية في جميع جوانب عملنا.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl dark:!text-white font-semibold text-green-600 mb-4">قيمنا</h2>
          <ul className="list-disc dark:!text-white list-inside text-gray-700 leading-relaxed">
            <li>الجودة: نحرص على تقديم أفضل المنتجات بأعلى معايير الجودة.</li>
            <li>النزاهة: نلتزم بالشفافية والمصداقية في جميع تعاملاتنا.</li>
            <li>الابتكار: نبحث باستمرار عن أساليب جديدة لتحسين منتجاتنا وخدماتنا.</li>
            <li>الاستدامة: نلتزم بممارسات تحافظ على البيئة وتدعم المجتمع.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl dark:!text-white font-semibold text-green-600 mb-4">تاريخنا</h2>
          <p className="text-gray-700 dark:!text-white leading-relaxed">
            تأسست شركة شذا الشام في عام [سنة التأسيس]، ومنذ ذلك الحين ونحن نسعى لتحقيق التميز في قطاع الأغذية. بفضل تفانينا والتزامنا بالجودة، نجحنا في بناء سمعة قوية وثقة عملائنا.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl dark:!text-white font-semibold text-green-600 mb-4">خدماتنا</h2>
          <p className="text-gray-700 dark:!text-white leading-relaxed">
            نقدم مجموعة واسعة من المنتجات الغذائية التي تشمل الزيوت، المعلبات، البهارات، وغيرها الكثير. نحن نعمل على تطوير منتجات مبتكرة تلبي احتياجات المستهلك وتواكب أحدث التوجهات في صناعة الأغذية.
          </p>
        </section>
      </div>
    </div>
  );
}
