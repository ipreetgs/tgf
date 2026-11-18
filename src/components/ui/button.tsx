import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
    // Pill buttons in the brand green, like premium product pages.
    "inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-full text-[15px] font-medium tracking-[-0.01em] transition-colors duration-200 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:shrink-0",
    {
        variants: {
            variant: {
                default: "bg-primary text-primary-foreground hover:bg-primary-hover",
                outline:
                    "border border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground",
                light: "bg-white text-[#1D1D1F] hover:bg-white/85",
                ghostLight: "border border-white/70 bg-transparent text-white hover:bg-white hover:text-[#1D1D1F]",
                destructive:
                    "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                secondary:
                    "bg-secondary text-secondary-foreground hover:bg-accent",
                ghost: "hover:bg-accent hover:text-accent-foreground",
                link: "h-auto px-0 text-primary hover:underline",
            },
            size: {
                default: "h-11 px-6",
                sm: "h-8 px-4 text-[13px]",
                lg: "h-12 px-7 text-[17px]",
                icon: "h-11 w-11",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button"
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button, buttonVariants }
