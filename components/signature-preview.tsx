"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Check, Copy, Mail, Phone } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface SignaturePreviewProps {
  formData: {
    fullName: string
    registrationNumber: string
    program: string
    yearOfStudy: string
    phoneNumber1: string
    phoneNumber2: string
    email: string
  }
}

export function SignaturePreview({ formData }: SignaturePreviewProps) {
  const [copied, setCopied] = useState(false)
  const { toast } = useToast()

  const generateSignatureHTML = () => {
    const phoneNumbers = formData.phoneNumber2
      ? `${formData.phoneNumber1} / ${formData.phoneNumber2}`
      : formData.phoneNumber1

    return `
<table cellpadding="0" cellspacing="0" border="0" style="font-family: Arial, sans-serif; font-size: 14px; color: #1e293b; line-height: 1.6; max-width: 600px; background-color: #ffffff;">
  <tr>
    <td style="background-color: #1f82c5; width: 4px; padding: 0;"></td>
    <td style="padding-left: 12px; background-color: #ffffff;">
      <table cellpadding="0" cellspacing="0" border="0" style="background-color: #ffffff;">
        <tr>
          <td style="font-size: 18px; font-weight: bold; color: #252f5d; padding-bottom: 4px;">${formData.fullName || "Your Name"}</td>
        </tr>
        <tr>
          <td style="font-size: 13px; color: #64748b; padding-bottom: 2px;">${formData.registrationNumber || "Registration Number"}</td>
        </tr>
        <tr>
          <td style="font-size: 13px; color: #64748b; padding-bottom: 2px;">${formData.program || "Program/Department"}</td>
        </tr>
        <tr>
          <td style="font-size: 13px; color: #64748b; padding-bottom: 12px;">${formData.yearOfStudy || "Year of Study"}</td>
        </tr>
        ${formData.phoneNumber1 ? `<tr><td style="font-size: 13px; color: #475569; padding-bottom: 3px;">📱 ${phoneNumbers}</td></tr>` : ""}
        ${formData.email ? `<tr><td style="font-size: 13px; color: #475569;">✉️ <a href="mailto:${formData.email}" style="color: #1f82c5; text-decoration: none;">${formData.email}</a></td></tr>` : ""}
      </table>
    </td>
  </tr>
</table>
    `.trim()
  }

  const copyToClipboard = async () => {
    const signatureHTML = generateSignatureHTML()

    try {
      // Create a temporary element to copy HTML
      const tempDiv = document.createElement("div")
      tempDiv.innerHTML = signatureHTML
      document.body.appendChild(tempDiv)

      // Select and copy
      const range = document.createRange()
      range.selectNodeContents(tempDiv)
      const selection = window.getSelection()
      selection?.removeAllRanges()
      selection?.addRange(range)

      document.execCommand("copy")
      document.body.removeChild(tempDiv)

      setCopied(true)
      toast({
        title: "Signature copied!",
        description: "Your email signature has been copied to clipboard.",
      })

      setTimeout(() => setCopied(false), 3000)
    } catch (err) {
      toast({
        title: "Copy failed",
        description: "Please try again or copy manually.",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="space-y-6">
      {/* Live Preview */}
      <div className="border-2 border-border rounded-lg p-6 bg-white">
        <div className="border-l-4 border-[#1f82c5] pl-4 mb-3">
          <div className="text-lg font-bold text-[#252f5d] mb-1">{formData.fullName || "Your Name"}</div>
          <div className="text-sm text-muted-foreground mb-0.5">
            {formData.registrationNumber || "Registration Number"}
          </div>
          <div className="text-sm text-muted-foreground mb-0.5">{formData.program || "Program/Department"}</div>
          <div className="text-sm text-muted-foreground">{formData.yearOfStudy || "Year of Study"}</div>
        </div>

        <div>
          {formData.phoneNumber1 && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
              <Phone className="w-3.5 h-3.5" />
              <span>
                {formData.phoneNumber2 ? `${formData.phoneNumber1} / ${formData.phoneNumber2}` : formData.phoneNumber1}
              </span>
            </div>
          )}
          {formData.email && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Mail className="w-3.5 h-3.5" />
              <a href={`mailto:${formData.email}`} className="text-[#1f82c5] hover:underline">
                {formData.email}
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Copy Button */}
      <Button onClick={copyToClipboard} className="w-full" size="lg" disabled={!formData.fullName || !formData.email}>
        {copied ? (
          <>
            <Check className="w-4 h-4 mr-2" />
            Copied to Clipboard!
          </>
        ) : (
          <>
            <Copy className="w-4 h-4 mr-2" />
            Copy Signature
          </>
        )}
      </Button>

      {(!formData.fullName || !formData.email) && (
        <p className="text-sm text-muted-foreground text-center">Fill in required fields to enable copying</p>
      )}
    </div>
  )
}
