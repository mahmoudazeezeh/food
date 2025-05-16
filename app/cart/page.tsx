"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useCart } from "@/components/cart-provider"
import { Button } from "@/components/ui/button"
import { Trash2, Send } from "lucide-react"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { Card, CardContent } from "@/components/ui/card"
import { ImageFallback } from "@/components/image-fallback"

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart()
  const { toast } = useToast()
  const [notes, setNotes] = useState("")

  const sendToWhatsApp = () => {
    if (cart.length === 0) {
      toast({
        title: "السلة فارغة",
        description: "الرجاء إضافة بعض الأصناف قبل إرسال الطلب",
        variant: "destructive",
      })
      return
    }

    let message = "مرحباً، أود طلب الصنف التالي:\n\n"

    cart.forEach((item) => {
      message += `🔸 الاسم: ${item.name}\n`
      message += `🔹 النوع/الإضافة: ${item.options.join(" + ")}\n`
      message += `📝 الكمية: ${item.quantity}\n\n`
    })

    if (notes) {
      message += `ملاحظات إضافية: ${notes}\n\n`
    }

    message += "هل يمكن معرفة السعر؟ وشكراً 🌿"

    // رقم الواتساب المقدم في الطلب
    const phoneNumber = "970598304743"
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

    window.open(whatsappUrl, "_blank")

    toast({
      title: "تم إرسال الطلب",
      description: "تم فتح واتساب لإرسال طلبك",
    })
  }

  return (
    <div className="min-h-screen flex flex-col bg-green-50">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-green-800">سلة المشتريات</h1>

        {cart.length === 0 ? (
          <div className="text-center py-12">
            <div className="mx-auto w-24 h-24 mb-4 text-gray-400">
              <ImageFallback
                src="/images/empty-cart.png"
                alt="سلة فارغة"
                width={96}
                height={96}
                fallbackSrc="/placeholder.svg?height=96&width=96"
              />
            </div>
            <h2 className="text-xl font-medium text-gray-600 mb-4">السلة فارغة</h2>
            <p className="text-gray-500 mb-8">لم تقم بإضافة أي أصناف إلى السلة بعد</p>
            <Button className="bg-green-600 hover:bg-green-700" onClick={() => (window.location.href = "/menu")}>
              استعرض القائمة
            </Button>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold">الأصناف المختارة</h2>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={clearCart}
                    className="text-red-500 border-red-200 hover:bg-red-50"
                  >
                    <Trash2 className="h-4 w-4 ml-2" />
                    إفراغ السلة
                  </Button>
                </div>

                <div className="divide-y">
                  {cart.map((item, index) => (
                    <div key={index} className="py-4 flex justify-between items-center">
                      <div>
                        <h3 className="font-medium text-lg">{item.name}</h3>
                        <p className="text-gray-600 text-sm">{item.options.join(" + ")}</p>
                        <p className="text-gray-500 text-sm">الكمية: {item.quantity}</p>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeFromCart(index)}
                        className="text-red-500 hover:bg-red-50"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-xl font-bold mb-4">ملخص الطلب</h2>

                  <div className="mb-6">
                    <p className="text-gray-600 mb-2">عدد الأصناف: {cart.length}</p>
                    <p className="text-gray-600 mb-4">
                      إجمالي الكمية: {cart.reduce((total, item) => total + item.quantity, 0)}
                    </p>
                    <p className="text-sm text-gray-500">* الأسعار سيتم تحديدها عبر الواتساب</p>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="notes" className="block text-sm font-medium mb-2">
                      ملاحظات إضافية
                    </label>
                    <Textarea
                      id="notes"
                      placeholder="أي تفاصيل إضافية للطلب..."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="resize-none"
                    />
                  </div>

                  <Button className="w-full bg-green-600 hover:bg-green-700" onClick={sendToWhatsApp}>
                    <Send className="h-4 w-4 ml-2" />
                    إرسال الطلب عبر واتساب
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}
