"use client"

import { cn } from "@/lib/utils"

interface FoodCategoriesProps {
  activeCategory: string
  setActiveCategory: (category: string) => void
}

export function FoodCategories({ activeCategory, setActiveCategory }: FoodCategoriesProps) {
  const categories = [
    { id: "main-dishes", name: "الأكلات الرئيسية" },
    { id: "local-products", name: "المنتجات البلدية" },
    { id: "pastries", name: "المخبوزات والمعجنات" },
    { id: "offal", name: "الطراف" },
    { id: "desserts", name: "الحلويات" },
  ]

  return (
    <div className="mb-8 overflow-x-auto">
      <div className="flex space-x-2 space-x-reverse min-w-max pb-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-colors",
              activeCategory === category.id ? "bg-green-600 text-white" : "bg-white text-gray-700 hover:bg-green-50",
            )}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  )
}
