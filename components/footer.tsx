import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"
import { ImageFallback } from "@/components/image-fallback"

export function Footer() {
  return (
    <footer className="bg-white border-t">
      {/* شريط ألوان العلم الفلسطيني */}
      <div className="h-1 flex">
        <div className="flex-1 bg-black"></div>
        <div className="flex-1 bg-white"></div>
        <div className="flex-1 bg-green-600"></div>
        <div className="flex-1 bg-red-600"></div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center mb-4">
              <div className="relative w-12 h-12 mr-2">
                <ImageFallback
                  src="/images/logo.png"
                  alt="شعار مذاقات من فلسطين"
                  fill
                  className="object-contain"
                  fallbackSrc="/placeholder.svg?height=48&width=48"
                />
              </div>
              <span className="font-bold text-lg text-green-800">مذاقات من فلسطين</span>
            </Link>
            <p className="text-gray-600 text-sm">
              نقدم أشهى الأكلات الشعبية الفلسطينية بطريقة عصرية تحافظ على الأصالة والتراث.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-green-800">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-green-700">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-gray-600 hover:text-green-700">
                  قائمة الطعام
                </Link>
              </li>
              <li>
                <Link href="/cart" className="text-gray-600 hover:text-green-700">
                  سلة المشتريات
                </Link>
              </li>
              <li>
                <Link href="/map" className="text-gray-600 hover:text-green-700">
                  تحديد الموقع
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-green-700">
                  من نحن
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-green-800">فئات الطعام</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/menu" className="text-gray-600 hover:text-green-700">
                  الأكلات الرئيسية
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-gray-600 hover:text-green-700">
                  المنتجات البلدية
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-gray-600 hover:text-green-700">
                  المخبوزات والمعجنات
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-gray-600 hover:text-green-700">
                  الطراف
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-gray-600 hover:text-green-700">
                  الحلويات
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-green-800">تواصل معنا</h3>
            <p className="text-gray-600 mb-4 text-sm">
              يمكنك التواصل معنا مباشرة عبر واتساب أو من خلال وسائل التواصل الاجتماعي.
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <a href="#" className="text-gray-600 hover:text-green-700">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-green-700">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-green-700">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-6 text-center">
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} مذاقات من فلسطين. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  )
}
