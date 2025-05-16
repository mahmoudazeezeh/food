"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FoodCategories } from "@/components/food-categories"
import { FoodGrid } from "@/components/food-grid"
import { foodData } from "@/data/food-data"

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("main-dishes")

  return (
    <div className="min-h-screen flex flex-col bg-green-50">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-green-800">قائمة الأصناف</h1>

        <FoodCategories activeCategory={activeCategory} setActiveCategory={setActiveCategory} />

        <FoodGrid category={activeCategory} items={foodData[activeCategory]} />
      </main>

      <Footer />
    </div>
  )
}
