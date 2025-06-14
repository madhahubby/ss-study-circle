
"use server";

import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export type ContactFormState = {
  message: string;
  status: "success" | "error" | "idle";
  errors?: {
    name?: string[];
    email?: string[];
    subject?: string[];
    message?: string[];
  };
};

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      message: "Validation failed. Please check your inputs.",
      status: "error",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // Simulate API call or email sending
  console.log("Contact Form Data:", validatedFields.data);
  // No actual server-side email sending or database saving in this example yet.
  // The redirection to WhatsApp will be handled on the client-side.

  await new Promise(resolve => setTimeout(resolve, 500)); // Simulate brief processing

  return {
    message: "Your details have been submitted. You will be directed to WhatsApp shortly.",
    status: "success",
  };

  // Example: error during submission
  // return {
  //   message: "An error occurred while processing your message. Please try again later.",
  //   status: "error",
  // };
}
