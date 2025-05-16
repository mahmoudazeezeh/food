"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

interface CartItem {
  id: string
  name: string
  options: string[]
  quantity: number
}

interface CartContextType {
  cart: CartItem[]
  addToCart: (item: CartItem) => void
  removeFromCart: (index: number) => void
  updateQuantity: (index: number, quantity: number) => void
  clearCart: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([])

  // استرجاع السلة من التخزين المحلي عند تحميل الصفحة
  useEffect(() => {
    const savedCart = localStorage.getItem("cart")
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart))
      } catch (error) {
        console.error("Error parsing cart from localStorage:", error)
      }
    }
  }, [])

  // حفظ السلة في التخزين المحلي عند تغييرها
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  const addToCart = (newItem: CartItem) => {
    setCart((prevCart) => {
      // البحث عن نفس العنصر بنفس الخيارات
      const existingItemIndex = prevCart.findIndex(
        (item) =>
          item.id === newItem.id && JSON.stringify(item.options.sort()) === JSON.stringify(newItem.options.sort()),
      )

      if (existingItemIndex !== -1) {
        // تحديث الكمية إذا كان العنصر موجود بالفعل
        const updatedCart = [...prevCart]
        updatedCart[existingItemIndex].quantity += newItem.quantity
        return updatedCart
      } else {
        // إضافة عنصر جديد
        return [...prevCart, newItem]
      }
    })
  }

  const removeFromCart = (index: number) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index))
  }

  const updateQuantity = (index: number, quantity: number) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart]
      updatedCart[index].quantity = quantity
      return updatedCart
    })
  }

  const clearCart = () => {
    setCart([])
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
