import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <a
            href="https://wa.me/919490337907"
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="whatsapp.button"
            className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-transform hover:scale-110 active:scale-95"
            style={{ backgroundColor: "#25D366" }}
            aria-label="Chat with us on WhatsApp"
          >
            <MessageCircle className="h-7 w-7 text-white fill-white" />
          </a>
        </TooltipTrigger>
        <TooltipContent side="left" className="font-medium">
          Message Us on WhatsApp
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
