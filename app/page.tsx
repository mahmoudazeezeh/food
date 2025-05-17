"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { ImageFallback } from "@/components/image-fallback"

export default function Home() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  const foodItems = [
    { name: "مقلوبة", image: "/images/maqluba.png", position: { top: "10%", right: "15%" } },
    { name: "مسخن", image: "/images/musakhan.png", position: { top: "20%", right: "75%" } },
  
    { name: "خبيزة", image: "/images/pickles.png", position: { top: "60%", right: "70%" } },
    { name: "زيت زيتون", image: "/images/olive-oil.png", position: { top: "80%", right: "40%" } },
    { name: "مفتول", image: "/images/maftoul.png", position: { top: "10%", right: "50%" } },
  ]

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-green-50 to-white">
      {/* تطريز فلسطيني في الخلفية */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <ImageFallback
          src="/images/tatreez-pattern.png"
          alt="تطريز فلسطيني"
          fill
          className="object-cover"
          fallbackSrc="/placeholder.svg?height=800&width=800"
        />
      </div>

      {/* صور الأكلات المتحركة */}
      {foodItems.map((item, index) => (
        <motion.div
          key={index}
          className="absolute w-24 h-24 md:w-32 md:h-32"
          style={{
            top: item.position.top,
            right: item.position.right,
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={loaded ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <div className="relative w-full h-full">
            <ImageFallback
              src={item.image || "/placeholder.svg"}
              alt={item.name}
              fill
              className="object-contain"
              fallbackSrc="/placeholder.svg?height=128&width=128"
            />
          </div>
        </motion.div>
      ))}

      {/* شعار الموقع والعنوان */}
      <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={loaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative w-40 h-40 mb-6"
        >
          <ImageFallback
            src="/images/logo.png"
            alt="شعار مذاقات من فلسطين"
            fill
            className="object-contain"
            fallbackSrc="/placeholder.svg?height=160&width=160"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={loaded ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-4xl md:text-6xl font-bold mb-6 text-green-800"
          style={{ fontFamily: "var(--font-tajawal)" }}
        >
          مذاقات من فلسطين
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={loaded ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.7 }}
          className="text-xl md:text-2xl mb-12 text-green-700"
        >
          أصالة النكهة الفلسطينية
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={loaded ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <Link href="/menu">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-xl rounded-full">
              انتقل إلى صفحة الأصناف
              <ArrowLeft className="mr-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* شريط ألوان العلم الفلسطيني */}
      <div className="fixed bottom-0 left-0 right-0 h-3 flex">
        <div className="flex-1 bg-black"></div>
        <div className="flex-1 bg-white"></div>
        <div className="flex-1 bg-green-600"></div>
        <div className="flex-1 bg-red-600"></div>
      </div>
    </main>
  )
}
