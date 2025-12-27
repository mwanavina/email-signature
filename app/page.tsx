"use client"

import { useState } from "react"
import { SignatureForm } from "@/components/signature-form"
import { SignaturePreview } from "@/components/signature-preview"
import { SetupInstructions } from "@/components/setup-instructions"
import { Card } from "@/components/ui/card"

export default function Home() {
  const [formData, setFormData] = useState({
    fullName: "",
    registrationNumber: "",
    program: "",
    yearOfStudy: "",
    phoneNumber1: "",
    phoneNumber2: "",
    email: "",
  })

  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
            <span className="text-sm font-semibold text-primary tracking-wide uppercase">Official MUBAS Tool</span>
          </div>
          <h1 className="text-5xl font-bold text-foreground mb-4 text-balance tracking-tight">
            Email Signature Generator
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Create a professional email signature for Malawi University of Business and Applied Sciences students
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Form Section */}
          <Card className="p-8 shadow-lg border-2">
            <h2 className="text-2xl font-bold mb-6 text-foreground">Your Details</h2>
            <SignatureForm formData={formData} setFormData={setFormData} />
          </Card>

          {/* Preview Section */}
          <Card className="p-8 shadow-lg border-2">
            <h2 className="text-2xl font-bold mb-6 text-foreground">Preview & Copy</h2>
            <SignaturePreview formData={formData} />
          </Card>
        </div>

        {/* Instructions Section */}
        <Card className="p-8 shadow-lg border-2">
          <h2 className="text-2xl font-bold mb-6 text-foreground">Setup Instructions</h2>
          <SetupInstructions />
        </Card>
      </div>
    </main>
  )
}
