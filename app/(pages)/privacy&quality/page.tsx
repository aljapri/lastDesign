import Head from 'next/head';

export default function QualityPolicy() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <Head>
        <title>سياسة الجودة وسلامة الغذاء | شذا الشام</title>
      </Head>
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-3xl text-right">
        <h1 className="text-3xl font-bold text-center text-green-700 mb-6">سياسة الجودة وسلامة الغذاء لشركة شذا الشام</h1>
        <p className="text-gray-700 mb-4 leading-relaxed">
          في شذا الشام، نلتزم بتقديم منتجات غذائية عالية الجودة تلبي أعلى معايير السلامة. إن التزامنا بالتميز يدفعنا لتطبيق إجراءات صارمة لمراقبة الجودة في كل خطوة من خطوات عملية الإنتاج.
        </p>
        <h2 className="text-2xl font-semibold text-green-600 mb-4">التزاماتنا بالجودة</h2>
        <ul className="list-none list-inside mb-4 text-gray-700">
          <li>ضمان أعلى معايير سلامة الغذاء والنظافة.</li>
          <li>التحسين المستمر من خلال عمليات التدقيق والفحص الدورية.</li>
          <li>الامتثال للأنظمة المحلية والدولية المتعلقة بسلامة الغذاء.</li>
          <li>استخدام أجود المكونات في جميع منتجاتنا.</li>
        </ul>
        <h2 className="text-2xl font-semibold text-green-600 mb-4">سياسة سلامة الغذاء</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          نحن نلتزم بممارسات سلامة الغذاء المعترف بها عالميًا لضمان أن كل منتج نقدمه آمن وصحي للاستهلاك. يعمل فريقنا على الحفاظ على ثقافة سلامة الغذاء، من خلال مراقبة كل مرحلة من مراحل الإنتاج بعناية.
        </p>
        <p className="text-gray-700 leading-relaxed">
          من خلال التدريب المنتظم وتحديث عملياتنا، نضمن أن منتجاتنا تظل متوافقة مع المعايير المتطورة في صناعة الغذاء.
        </p>
      </div>
    </div>
  );
}
