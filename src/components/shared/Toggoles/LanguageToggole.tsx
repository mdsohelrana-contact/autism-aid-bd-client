"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/Providers/LanguageProvider"
import { Globe } from "lucide-react"

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setLanguage(language === "en" ? "bn" : "en")}
      className="flex items-center gap-2 text-sm font-medium hover:bg-blue-50 hover:text-blue-600 transition-colors"
    >
      <Globe className="h-4 w-4" />
      {language === "en" ? "বাংলা" : "English"}
    </Button>
  )
}
