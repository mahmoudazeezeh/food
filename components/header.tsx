"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ShoppingCart, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/components/cart-provider"
import { cn } from "@/lib/utils"
import { ImageFallback } from "@/components/image-fallback"

export function Header() {
  const pathname = usePathname()
  const { cart } = useCart()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0)

  const navItems = [
    { name: "الرئيسية", href: "/" },
    { name: "قائمة الطعام", href: "/menu" },
    { name: "تحديد الموقع", href: "/map" },
    { name: "من نحن", href: "/about" },
  ]

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="relative w-10 h-10 mr-2">
                <ImageFallback
                  src="/images/logo.png"
                  alt="شعار مذاقات من فلسطين"
                  fill
                  className="object-contain"
                  fallbackSrc="/placeholder.svg?height=40&width=40"
                />
              </div>
              <span className="font-bold text-lg text-green-800 hidden sm:inline-block">مذاقات من فلسطين</span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-1 space-x-reverse">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium",
                  pathname === item.href
                    ? "bg-green-100 text-green-800"
                    : "text-gray-700 hover:bg-green-50 hover:text-green-700",
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center">
            <Link href="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Button>
            </Link>

            <div className="md:hidden ml-2">
              <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* القائمة المتحركة للموبايل */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "block px-3 py-2 rounded-md text-base font-medium",
                  pathname === item.href
                    ? "bg-green-100 text-green-800"
                    : "text-gray-700 hover:bg-green-50 hover:text-green-700",
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* شريط ألوان العلم الفلسطيني */}
      <div className="h-1 flex">
        <div className="flex-1 bg-black"></div>
        <div className="flex-1 bg-white"></div>
        <div className="flex-1 bg-green-600"></div>
        <div className="flex-1 bg-red-600"></div>
      </div>
    </header>
  )
}
