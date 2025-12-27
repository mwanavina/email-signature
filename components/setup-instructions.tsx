"use client"

import { Alert, AlertDescription } from "@/components/ui/alert"
import { Info } from "lucide-react"

export function SetupInstructions() {
  return (
    <div className="space-y-6">
      <Alert className="bg-primary/10 border-primary/30">
        <Info className="h-4 w-4 text-primary" />
        <AlertDescription className="text-foreground">
          After copying your signature, follow the instructions below to add it to your Gmail account.
        </AlertDescription>
      </Alert>

      <div className="space-y-4">
        <h3 className="font-semibold text-xl text-foreground">Gmail Setup Instructions</h3>
        <ol className="space-y-4 list-decimal list-inside text-base text-foreground leading-relaxed">
          <li className="pl-2">
            <span className="font-semibold text-primary">Open Gmail Settings:</span>
            <p className="ml-6 mt-1 text-muted-foreground">
              Click the gear icon in the top right corner of Gmail and select <strong>"See all settings"</strong>
            </p>
          </li>
          <li className="pl-2">
            <span className="font-semibold text-primary">Navigate to Signature:</span>
            <p className="ml-6 mt-1 text-muted-foreground">
              Scroll down to the <strong>"Signature"</strong> section in the General tab
            </p>
          </li>
          <li className="pl-2">
            <span className="font-semibold text-primary">Create New Signature:</span>
            <p className="ml-6 mt-1 text-muted-foreground">
              Click <strong>"+ Create new"</strong> and give it a name (e.g., "MUBAS Signature")
            </p>
          </li>
          <li className="pl-2">
            <span className="font-semibold text-primary">Paste Your Signature:</span>
            <p className="ml-6 mt-1 text-muted-foreground">
              Click in the signature text box and press <strong>Ctrl+V</strong> (Windows) or <strong>Cmd+V</strong>{" "}
              (Mac) to paste your copied signature
            </p>
          </li>
          <li className="pl-2">
            <span className="font-semibold text-primary">Set as Default:</span>
            <p className="ml-6 mt-1 text-muted-foreground">
              Under "Signature defaults," select your new signature for both new emails and replies/forwards
            </p>
          </li>
          <li className="pl-2">
            <span className="font-semibold text-primary">Save Changes:</span>
            <p className="ml-6 mt-1 text-muted-foreground">
              Scroll to the bottom of the page and click <strong>"Save Changes"</strong>
            </p>
          </li>
        </ol>

        <div className="bg-accent/30 border-2 border-accent p-5 rounded-lg mt-6">
          <h4 className="font-semibold text-secondary mb-2 text-lg">Pro Tips</h4>
          <ul className="space-y-2 text-sm text-foreground leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold mt-0.5">•</span>
              <span>Send yourself a test email to verify the signature appears correctly</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold mt-0.5">•</span>
              <span>If formatting looks wrong, try copying and pasting again</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold mt-0.5">•</span>
              <span>Your signature will automatically appear in all new emails and replies</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold mt-0.5">•</span>
              <span>You can edit or update your signature anytime by returning to Gmail settings</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
