
import * as React from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const TooltipProvider = TooltipPrimitive.Provider

const Tooltip = ({ children, ...props }: React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Root>) => {
  const [open, setOpen] = React.useState(false);
  const [dismissed, setDismissed] = React.useState(() => {
    // Check if the tooltip has been dismissed before
    if (typeof window !== 'undefined') {
      return localStorage.getItem('tutorial-tooltip-dismissed') === 'true';
    }
    return false;
  });

  // Handle dismissal
  const handleDismiss = React.useCallback(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('tutorial-tooltip-dismissed', 'true');
    }
    setDismissed(true);
    setOpen(false);
  }, []);

  // Only show tooltip if it hasn't been dismissed
  if (dismissed) {
    return <TooltipPrimitive.Root {...props}>{children}</TooltipPrimitive.Root>
  }

  return (
    <TooltipPrimitive.Root 
      open={open} 
      onOpenChange={setOpen}
      {...props}
    >
      {children}
      {open && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={handleDismiss}
        />
      )}
    </TooltipPrimitive.Root>
  )
}

const TooltipTrigger = TooltipPrimitive.Trigger

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content> & { showCloseButton?: boolean; onClose?: () => void }
>(({ className, sideOffset = 4, showCloseButton = false, onClose, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  >
    <div className="relative">
      {props.children}
      {showCloseButton && (
        <Button 
          variant="ghost" 
          size="icon" 
          className="h-5 w-5 absolute top-0 right-0 -mt-1 -mr-1" 
          onClick={onClose}
        >
          <X className="h-3 w-3" />
        </Button>
      )}
    </div>
  </TooltipPrimitive.Content>
))
TooltipContent.displayName = TooltipPrimitive.Content.displayName

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
