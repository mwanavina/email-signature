"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface SignatureFormProps {
  formData: {
    fullName: string
    registrationNumber: string
    program: string
    yearOfStudy: string
    phoneNumber1: string
    phoneNumber2: string
    email: string
  }
  setFormData: (data: any) => void
}

export function SignatureForm({ formData, setFormData }: SignatureFormProps) {
  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value })
  }

  return (
    <div className="space-y-5">
      <div className="space-y-2">
        <Label htmlFor="fullName" className="text-sm font-medium">
          Full Name <span className="text-destructive">*</span>
        </Label>
        <Input
          id="fullName"
          placeholder="e.g., Christopher Jim"
          value={formData.fullName}
          onChange={(e) => handleChange("fullName", e.target.value)}
          className="w-full"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="registrationNumber" className="text-sm font-medium">
          Registration Number <span className="text-destructive">*</span>
        </Label>
        <Input
          id="registrationNumber"
          placeholder="e.g., BAE/20/SS/003 - BAE 5"
          value={formData.registrationNumber}
          onChange={(e) => handleChange("registrationNumber", e.target.value)}
          className="w-full"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="program" className="text-sm font-medium">
          Program/Department <span className="text-destructive">*</span>
        </Label>
        <Input
          id="program"
          placeholder="e.g., Bachelor of Agricultural Engineering"
          value={formData.program}
          onChange={(e) => handleChange("program", e.target.value)}
          className="w-full"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="yearOfStudy" className="text-sm font-medium">
          Year of Study/Level <span className="text-destructive">*</span>
        </Label>
        <Input
          id="yearOfStudy"
          placeholder="e.g., BIT4, BAE3, etc."
          value={formData.yearOfStudy}
          onChange={(e) => handleChange("yearOfStudy", e.target.value)}
          className="w-full"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phoneNumber1" className="text-sm font-medium">
          Phone Number 1 <span className="text-destructive">*</span>
        </Label>
        <Input
          id="phoneNumber1"
          placeholder="e.g., 0992243028"
          value={formData.phoneNumber1}
          onChange={(e) => handleChange("phoneNumber1", e.target.value)}
          className="w-full"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phoneNumber2" className="text-sm font-medium">
          Phone Number 2 <span className="text-muted-foreground text-xs">(Optional)</span>
        </Label>
        <Input
          id="phoneNumber2"
          placeholder="e.g., 0883905425"
          value={formData.phoneNumber2}
          onChange={(e) => handleChange("phoneNumber2", e.target.value)}
          className="w-full"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-sm font-medium">
          MUBAS Email <span className="text-destructive">*</span>
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="e.g., bae20-cjim@mubas.ac.mw"
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
          className="w-full"
        />
      </div>
    </div>
  )
}
