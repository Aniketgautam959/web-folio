"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { Controller, FormProvider, useFormContext } from "react-hook-form"

import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"

const Form = FormProvider

const FormField = ({ ...props }) => {
  return (
    <Controller
      {...props}
      render={({ field, fieldState, formState }) => {
        return (
          <FormFieldPrimitive name={props.name} render={({ children }) => children({ field, fieldState, formState })} />
        )
      }}
    />
  )
}

const FormFieldPrimitive = React.createContext({})

const FormItemContext = React.createContext({})

const FormItem = React.forwardRef(({ className, ...props }, ref) => {
  const id = React.useId()

  return (
    <FormItemContext.Provider value={{ id }}>
      <div ref={ref} className={cn("space-y-2", className)} {...props} />
    </FormItemContext.Provider>
  )
})
FormItem.displayName = "FormItem"

const FormLabel = React.forwardRef(({ className, ...props }, ref) => {
  const { error, formItemId } = React.useContext(FormItemContext)

  return <Label ref={ref} className={cn(error && "text-destructive", className)} htmlFor={formItemId} {...props} />
})
FormLabel.displayName = "FormLabel"

const FormControl = React.forwardRef(({ ...props }, ref) => {
  const { formItemId, formDescriptionId, formMessageId } = React.useContext(FormItemContext)
  const {
    field,
    fieldState: { error },
  } = useFormContext()

  return (
    <Slot
      ref={ref}
      id={formItemId}
      aria-describedby={!error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`}
      aria-invalid={!!error}
      {...field}
      {...props}
    />
  )
})
FormControl.displayName = "FormControl"

const FormDescription = React.forwardRef(({ className, ...props }, ref) => {
  const { formDescriptionId } = React.useContext(FormItemContext)

  return (
    <p ref={ref} id={formDescriptionId} className={cn("text-[0.8rem] text-muted-foreground", className)} {...props} />
  )
})
FormDescription.displayName = "FormDescription"

const FormMessage = React.forwardRef(({ className, children, ...props }, ref) => {
  const { error, formMessageId } = React.useContext(FormItemContext)
  const body = error ? String(error?.message) : children

  if (!body) {
    return null
  }

  return (
    <p ref={ref} id={formMessageId} className={cn("text-[0.8rem] font-medium text-destructive", className)} {...props}>
      {body}
    </p>
  )
})
FormMessage.displayName = "FormMessage"

export { useFormContext, Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage }
