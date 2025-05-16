"use client"

import { useState } from "react"
import Image, { type ImageProps } from "next/image"

interface ImageFallbackProps extends ImageProps {
  fallbackSrc?: string
}

export function ImageFallback({
  src,
  alt,
  fallbackSrc = "/images/placeholder-food.png",
  ...props
}: ImageFallbackProps) {
  const [error, setError] = useState(false)

  return <Image {...props} src={error ? fallbackSrc : src} alt={alt} onError={() => setError(true)} />
}
