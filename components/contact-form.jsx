"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { SendIcon, Loader2 } from "lucide-react"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"

// Define the form schema with validation rules
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
})

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Initialize the form with react-hook-form and zod validation
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  // Handle form submission
  function onSubmit(data) {
    // Simulate form submission with a delay
    setTimeout(() => {
      console.log("Form submitted:", data)
      setIsSubmitted(true)
    }, 1000)
  }

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center p-6">
        <div className="w-16 h-16 mb-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
          <SendIcon className="w-6 h-6 text-white" />
        </div>
        <h4 className="text-lg font-medium mb-2 text-black dark:text-white">Message Sent!</h4>
        <p className="text-sm text-center text-zinc-600 dark:text-zinc-400 mb-4">
          Thanks for reaching out. I'll get back to you as soon as possible.
        </p>
        <Button
          variant="outline"
          onClick={() => setIsSubmitted(false)}
          className="text-zinc-700 dark:text-zinc-300 border-zinc-400 dark:border-zinc-700 bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700"
        >
          Send Another Message
        </Button>
      </div>
    )
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-zinc-600 dark:text-zinc-400">Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Your name"
                    className="bg-zinc-200/50 dark:bg-zinc-800/50 border-zinc-300 dark:border-zinc-700 focus:border-blue-500 dark:focus:border-blue-500 text-black dark:text-white"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-xs text-red-500" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-zinc-600 dark:text-zinc-400">Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="your.email@example.com"
                    className="bg-zinc-200/50 dark:bg-zinc-800/50 border-zinc-300 dark:border-zinc-700 focus:border-blue-500 dark:focus:border-blue-500 text-black dark:text-white"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-xs text-red-500" />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-zinc-600 dark:text-zinc-400">Subject</FormLabel>
              <FormControl>
                <Input
                  placeholder="What is this regarding?"
                  className="bg-zinc-200/50 dark:bg-zinc-800/50 border-zinc-300 dark:border-zinc-700 focus:border-purple-500 dark:focus:border-purple-500 text-black dark:text-white"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-xs text-red-500" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-zinc-600 dark:text-zinc-400">Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Your message"
                  className="bg-zinc-200/50 dark:bg-zinc-800/50 border-zinc-300 dark:border-zinc-700 focus:border-purple-500 dark:focus:border-purple-500 min-h-[120px] text-black dark:text-white"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-xs text-red-500" />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <SendIcon className="w-4 h-4 mr-2" />
              Send Message
            </>
          )}
        </Button>
      </form>
    </Form>
  )
}
