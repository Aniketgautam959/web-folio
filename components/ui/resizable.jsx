"use client"

import * as React from "react"
import { Resizable as ResizablePrimitive } from "re-resizable"

import { cn } from "@/lib/utils"

const ResizablePanelGroupContext = React.createContext(null)

const ResizablePanelGroup = ({ className, children, ...props }) => {
  const [is, setIs] = React.useState(false)

  return (
    <ResizablePanelGroupContext.Provider value={{ is, setIs }}>
      <div className={cn("flex h-full w-full data-[panel-group-direction=vertical]:flex-col", className)} {...props}>
        {children}
      </div>
    </ResizablePanelGroupContext.Provider>
  )
}

const ResizablePanelContext = React.createContext(null)

const ResizablePanel = ({ className, children, ...props }) => {
  const { is, setIs } = React.useContext(ResizablePanelGroupContext)

  return (
    <ResizablePanelContext.Provider value={{ is, setIs }}>
      <ResizablePrimitive
        className={cn("relative", className)}
        onResizeStart={() => setIs(true)}
        onResizeEnd={() => setIs(false)}
        {...props}
      >
        {children}
      </ResizablePrimitive>
    </ResizablePanelContext.Provider>
  )
}

const ResizableHandle = React.forwardRef(({ withHandle, className, ...props }, ref) => {
  const { is, setIs } = React.useContext(ResizablePanelContext)
  return (
    <div
      ref={ref}
      className={cn(
        "relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-0 after:w-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-auto data-[panel-group-direction=vertical]:after:top-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full",
        is &&
          "after:bg-primary after:absolute after:inset-y-0 after:left-0 after:w-1 data-[panel-group-direction=vertical]:after:left-auto data-[panel-group-direction=vertical]:after:top-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full",
        className,
      )}
      {...props}
    >
      {withHandle && (
        <div className="z-10 flex h-4 w-4 items-center justify-center rounded-full border bg-background">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-2.5 w-2.5"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </div>
      )}
    </div>
  )
})
ResizableHandle.displayName = "ResizableHandle"

export { ResizablePanelGroup, ResizablePanel, ResizableHandle }
