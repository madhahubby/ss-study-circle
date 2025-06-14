
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useEffect, useActionState } from "react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { submitContactForm, type ContactFormState } from "@/app/actions";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const initialState: ContactFormState = {
  message: "",
  status: "idle",
  errors: undefined,
};

export function ContactForm() {
  const [state, formAction, isActionPending] = useActionState(submitContactForm, initialState);
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  useEffect(() => {
    if (state.status === "success") {
      toast({
        title: "Message Processed!",
        description: state.message,
      });
      
      // Open WhatsApp links
      window.open('https://wa.link/j4gztt', '_blank');
      window.open('https://wa.link/5mjm1h', '_blank');
      
      form.reset();
    } else if (state.status === "error") {
      toast({
        title: "Error",
        description: state.message,
        variant: "destructive",
      });
      if (state.errors) {
        (Object.keys(state.errors) as Array<keyof ContactFormValues>).forEach((key) => {
          const errorMessages = state.errors![key];
          if (errorMessages && errorMessages.length > 0) {
            form.setError(key, { type: "server", message: errorMessages.join(', ') });
          }
        });
      }
    }
  }, [state, toast, form]);
  

  return (
    <Form {...form}>
      <form action={formAction} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-body">Full Name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} className="font-body"/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-body">Email Address</FormLabel>
              <FormControl>
                <Input type="email" placeholder="john.doe@example.com" {...field} className="font-body"/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-body">Subject</FormLabel>
              <FormControl>
                <Input placeholder="Inquiry about courses" {...field} className="font-body"/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-body">Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Your message..."
                  className="resize-none font-body"
                  rows={5}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" variant="yellow" size="lg" className="w-full font-body font-bold" disabled={isActionPending}>
          {isActionPending ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </Form>
  );
}
