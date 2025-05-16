import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ImageFallback } from "@/components/image-fallback"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-green-50">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-green-800">عن مذاقات من فلسطين</h1>

          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex flex-col md:flex-row items-center mb-8">
              <div className="md:w-1/3 mb-6 md:mb-0">
                <div className="relative w-48 h-48 mx-auto">
                  <ImageFallback
                    src="/images/logo.png"
                    alt="شعار مذاقات من فلسطين"
                    fill
                    className="object-contain"
                    fallbackSrc="/placeholder.svg?height=192&width=192"
                  />
                </div>
              </div>

              <div className="md:w-2/3 md:pr-8">
                <h2 className="text-2xl font-bold mb-4 text-green-700">قصتنا</h2>
                <p className="text-gray-700 mb-4">
                  مذاقات من فلسطين هو مشروع يهدف إلى الحفاظ على التراث الغذائي الفلسطيني الأصيل ونقله إلى العالم بأسلوب
                  عصري.
                </p>
                <p className="text-gray-700">
                  نقدم مجموعة متنوعة من الأطباق الفلسطينية التقليدية المحضرة بعناية فائقة وباستخدام مكونات طازجة ومحلية،
                  لنقدم لكم تجربة طعام أصيلة تعكس غنى وتنوع المطبخ الفلسطيني.
                </p>
              </div>
            </div>

            <div className="border-t pt-6">
              <h2 className="text-2xl font-bold mb-4 text-green-700">مهمتنا</h2>
              <p className="text-gray-700 mb-4">
                نسعى للحفاظ على الهوية الثقافية الفلسطينية من خلال الطعام، ونشر الوعي بالمطبخ الفلسطيني الغني والمتنوع.
              </p>
              <p className="text-gray-700">
                نؤمن بأن الطعام هو جزء أساسي من الثقافة والهوية، ومن خلال تقديم الأطباق الفلسطينية التقليدية، نساهم في
                الحفاظ على تراثنا ومشاركته مع الآخرين.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-6 text-green-700">ما يميزنا</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <ImageFallback
                    src="/images/quality.png"
                    alt="جودة عالية"
                    width={32}
                    height={32}
                    fallbackSrc="/placeholder.svg?height=32&width=32"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">مكونات طازجة</h3>
                  <p className="text-gray-600">نستخدم فقط أفضل المكونات الطازجة والمحلية في تحضير أطباقنا</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <ImageFallback
                    src="/images/logo.png"
                    alt="وصفات تقليدية"
                    width={32}
                    height={32}
                    fallbackSrc="/placeholder.svg?height=32&width=32"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">وصفات تقليدية</h3>
                  <p className="text-gray-600">نتبع الوصفات التقليدية المتوارثة عبر الأجيال</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <ImageFallback
                    src="/images/customize.png"
                    alt="خيارات متنوعة"
                    width={32}
                    height={32}
                    fallbackSrc="/placeholder.svg?height=32&width=32"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">خيارات متنوعة</h3>
                  <p className="text-gray-600">نقدم مجموعة واسعة من الأطباق لتناسب جميع الأذواق</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <ImageFallback
                    src="/images/delivery.png"
                    alt="توصيل سريع"
                    width={32}
                    height={32}
                    fallbackSrc="/placeholder.svg?height=32&width=32"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">طلب سهل</h3>
                  <p className="text-gray-600">نظام طلب بسيط ومباشر عبر واتساب</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
