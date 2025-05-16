"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { ShoppingCart, Plus, Minus } from "lucide-react"
import { useCart } from "@/components/cart-provider"
import { useToast } from "@/components/ui/use-toast"
import { ImageFallback } from "@/components/image-fallback"

interface FoodItem {
  id: string
  name: string
  image: string
  description: string
  options?: { id: string; name: string }[]
}

interface FoodGridProps {
  category: string
  items: FoodItem[]
}

export function FoodGrid({ category, items }: FoodGridProps) {
  const { addToCart } = useCart()
  const { toast } = useToast()
  const [selectedItem, setSelectedItem] = useState<FoodItem | null>(null)
  const [selectedOptions, setSelectedOptions] = useState<string[]>([])
  const [quantity, setQuantity] = useState(1)

  const handleOpenDialog = (item: FoodItem) => {
    setSelectedItem(item)
    setSelectedOptions([])
    setQuantity(1)
  }

  const handleCloseDialog = () => {
    setSelectedItem(null)
  }

  const handleOptionToggle = (optionId: string) => {
    setSelectedOptions((prev) => {
      if (prev.includes(optionId)) {
        return prev.filter((id) => id !== optionId)
      } else {
        return [...prev, optionId]
      }
    })
  }

  const handleAddToCart = () => {
    if (!selectedItem) return

    const selectedOptionNames = selectedOptions
      .map((optionId) => {
        const option = selectedItem.options?.find((opt) => opt.id === optionId)
        return option?.name || ""
      })
      .filter(Boolean)

    addToCart({
      id: selectedItem.id,
      name: selectedItem.name,
      options: selectedOptionNames.length > 0 ? selectedOptionNames : ["عادي"],
      quantity,
    })

    toast({
      title: "تمت الإضافة إلى السلة",
      description: `تمت إضافة ${selectedItem.name} إلى سلة المشتريات`,
    })

    handleCloseDialog()
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map((item) => (
          <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative h-48">
              <ImageFallback
                src={item.image || "/placeholder.svg"}
                alt={item.name}
                fill
                className="object-cover"
                fallbackSrc="/placeholder.svg?height=192&width=256"
              />
            </div>
            <CardContent className="p-4">
              <h3 className="font-bold text-lg mb-2">{item.name}</h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">{item.description}</p>
              <Button className="w-full bg-green-600 hover:bg-green-700" onClick={() => handleOpenDialog(item)}>
                <ShoppingCart className="h-4 w-4 ml-2" />
                أضف إلى السلة
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* نافذة اختيار الإضافات */}
      <Dialog open={!!selectedItem} onOpenChange={(open) => !open && handleCloseDialog()}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl">{selectedItem?.name}</DialogTitle>
          </DialogHeader>

          {selectedItem?.options && selectedItem.options.length > 0 && (
            <div className="py-4">
              <h4 className="font-medium mb-3">اختر الإضافات:</h4>
              <div className="space-y-3">
                {selectedItem.options.map((option) => (
                  <div key={option.id} className="flex items-center space-x-2 space-x-reverse">
                    <Checkbox
                      id={option.id}
                      checked={selectedOptions.includes(option.id)}
                      onCheckedChange={() => handleOptionToggle(option.id)}
                    />
                    <Label htmlFor={option.id} className="cursor-pointer">
                      {option.name}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="py-2">
            <h4 className="font-medium mb-3">الكمية:</h4>
            <div className="flex items-center">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                disabled={quantity <= 1}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <Input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, Number.parseInt(e.target.value) || 1))}
                className="w-16 mx-2 text-center"
              />
              <Button variant="outline" size="icon" onClick={() => setQuantity((q) => q + 1)}>
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <DialogFooter className="sm:justify-start">
            <Button className="bg-green-600 hover:bg-green-700" onClick={handleAddToCart}>
              <ShoppingCart className="h-4 w-4 ml-2" />
              أضف إلى السلة
            </Button>
            <Button variant="outline" onClick={handleCloseDialog}>
              إلغاء
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
