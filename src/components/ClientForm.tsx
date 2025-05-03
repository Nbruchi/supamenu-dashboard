import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import CustomInput from "@/components/shared/CustomInput.tsx";
import CustomSelect from "@/components/shared/CustomSelect.tsx";

// Define the form schema with zod
const formSchema = z.object({
  name: z.string().min(1, {
    message: "Restaurant name is required.",
  }),
  category: z.enum(["Resto", "Hotel", "Pub", "Cafe"], {
    required_error: "Please select a category.",
  }),
  representative: z.string().min(1,{message:"Restaurant representative is required."}),
  creationDate: z.string().min(1,{message:"Creation date is required."}),
  address: z.string().min(1,{message:"Address is required."}),
  email: z.string().email(),
  phone: z.string().regex(/^(?:\+250|0)7[238]\d{7}$/),
  bankAccount: z.string()
});

// Define the form values type
type FormValues = z.infer<typeof formSchema>;

interface AddClientDialogProps {
  trigger: React.ReactNode;
}

export function ClientForm({ trigger }: AddClientDialogProps) {
  const [open, setOpen] = React.useState(false);

  // Initialize the form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      category: "Resto",
      representative: "",
      address: "",
      email: "",
      phone:"",
      bankAccount: "",
      creationDate: ""
    },
  });

  // Handle form submission
  function onSubmit(values: FormValues) {
    console.log(values);
    // Here you would typically save the new client to your database
    // For now, we'll just close the dialog
    setOpen(false);
    form.reset();
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="min-w-1/2">
        <DialogHeader>
          <DialogTitle className="text-center text-gray-500 text-xl">Client</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10 w-full">
            <div className="grid grid-cols-2 gap-x-8">
              <div className="flex flex-col items-start justify-between gap-y-4">
                <CustomInput title="Client name" name="name" />
                <CustomSelect title="Category" name="category" options={["Resto", "Hotel", "Pub", "Cafe"]} />
                <CustomInput title="Representative" name="representative" />
                <CustomInput title="Date of creation" name="creationDate" />
              </div>
              <div className="flex flex-col items-start justify-between gap-y-4">
                <CustomInput title="Address" name="address" />
                <CustomInput title="Email" name="email" />
                <CustomInput title="Phone" name="phone" />
                <CustomInput title="Bank Account(IBAN)" name="bankAccount" />
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Button type="submit" className="flex-center p-6 bg-orange-400 hover:bg-orange-500 transition-all duration-300 w-1/2 cursor-pointer">Add Client</Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}