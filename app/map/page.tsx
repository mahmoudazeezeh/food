"use client"

import { useState, useEffect, useRef } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Navigation, MapPin } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import Image from "next/image"

export default function MapPage() {
  const { toast } = useToast()
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null)
  const mapRef = useRef<HTMLDivElement>(null)
  const [locationText, setLocationText] = useState<string>("")

  useEffect(() => {
    // محاولة الحصول على موقع المستخدم
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          })
          setLocationText(
            `خط العرض: ${position.coords.latitude.toFixed(6)}, خط الطول: ${position.coords.longitude.toFixed(6)}`,
          )

          toast({
            title: "تم تحديد موقعك",
            description: "تم تحديد موقعك بنجاح",
          })
        },
        () => {
          toast({
            title: "تعذر الوصول للموقع",
            description: "يرجى السماح بالوصول إلى موقعك لتحديد موقعك على الخريطة",
            variant: "destructive",
          })
          // استخدام موقع افتراضي (القدس)
          setUserLocation({ lat: 31.7683, lng: 35.2137 })
          setLocationText("خط العرض: 31.7683, خط الطول: 35.2137 (موقع افتراضي)")
        },
      )
    }
  }, [toast])

  // تحديث موقع المستخدم
  const updateUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const newLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          }
          setUserLocation(newLocation)
          setLocationText(
            `خط العرض: ${position.coords.latitude.toFixed(6)}, خط الطول: ${position.coords.longitude.toFixed(6)}`,
          )

          toast({
            title: "تم تحديث الموقع",
            description: "تم تحديث موقعك بنجاح",
          })
        },
        () => {
          toast({
            title: "تعذر الوصول للموقع",
            description: "يرجى السماح بالوصول إلى موقعك لتحديد موقعك على الخريطة",
            variant: "destructive",
          })
        },
      )
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-green-50">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-green-800">تحديد الموقع</h1>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-bold mb-4">حدد موقعك على الخريطة</h2>

            <p className="text-gray-600 mb-6">
              يمكنك تحديد موقعك لتسهيل عملية التوصيل. سيتم استخدام هذا الموقع عند إرسال طلبك عبر واتساب.
            </p>

            <div className="relative">
              <div className="h-[400px] bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                {userLocation ? (
                  <>
                    <div className="relative w-full h-full">
                      <Image
                        src={`https://maps.googleapis.com/maps/api/staticmap?center=${userLocation.lat},${userLocation.lng}&zoom=15&size=600x400&maptype=roadmap&markers=color:red%7C${userLocation.lat},${userLocation.lng}&key=AIzaSyBnSrCl0UvzIIBTQN5kkv-M0MhNqFhwZxU`}
                        alt="خريطة الموقع"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-red-600">
                      <MapPin className="h-10 w-10" />
                    </div>
                  </>
                ) : (
                  <div className="text-center">
                    <MapPin className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                    <p className="text-gray-600 mb-4">جاري تحميل الخريطة...</p>
                  </div>
                )}
              </div>

              <div className="absolute bottom-4 right-4">
                <Button className="bg-green-600 hover:bg-green-700" onClick={updateUserLocation}>
                  <Navigation className="h-4 w-4 ml-2" />
                  تحديث الموقع
                </Button>
              </div>
            </div>

            {userLocation && (
              <div className="mt-4 p-3 bg-green-50 rounded-md">
                <p className="text-sm text-gray-700">
                  <span className="font-medium">الإحداثيات الحالية:</span>
                  <br />
                  {locationText}
                </p>
              </div>
            )}

            <div className="mt-6">
              <p className="text-sm text-gray-500">* سيتم إرفاق موقعك مع تفاصيل الطلب عند الإرسال عبر واتساب</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
