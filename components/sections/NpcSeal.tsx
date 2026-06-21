"use client"

import * as Dialog from "@radix-ui/react-dialog"
import Image from "next/image"
import { X } from "lucide-react"

// NPC DPO/DPS seal that opens the full Certificate of Registration in a dialog.
export function NpcSeal() {
  return (
    <Dialog.Root>
      <Dialog.Trigger
        aria-label="View NPC Certificate of Registration"
        className="rounded-md transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <Image
          src="/npc-dpo-dps-seal.png"
          alt="NPC DPO/DPS Registered Seal"
          width={379}
          height={701}
          className="h-24 w-auto"
        />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm data-[state=open]:animate-in data-[state=open]:fade-in" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-[90vw] max-w-3xl -translate-x-1/2 -translate-y-1/2 rounded-lg bg-background p-4 shadow-lg focus:outline-none">
          <Dialog.Title className="sr-only">NPC Certificate of Registration</Dialog.Title>
          <Dialog.Close
            aria-label="Close"
            className="absolute right-3 top-3 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <X className="h-5 w-5" />
          </Dialog.Close>
          <Image
            src="/npc-certificate.png"
            alt="NPC Certificate of Registration"
            width={1122}
            height={792}
            className="h-auto w-full rounded"
          />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
