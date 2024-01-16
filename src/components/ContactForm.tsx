"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { cn } from "@/lib/utils";
import { contactFormSchema } from "@/lib/validations/auth";
import { Input } from "@/components/ui/input";
import { buttonVariants } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Icons } from "./Icons";
import { Textarea } from "@/components/ui/textarea";
import { sendEmail } from "@/app/actions";

type FormData = z.infer<typeof contactFormSchema>;

export function ContactForm() {
	const form = useForm<z.infer<typeof contactFormSchema>>({
		resolver: zodResolver(contactFormSchema),
		defaultValues: {
			firstName: "",
			lastName: "",
			email: "",
			message: "",
		},
	});

	const { toast } = useToast();
	const [isLoading, setIsLoading] = React.useState<boolean>(false);

	async function handleFormSubmit(data: FormData) {
		setIsLoading(true);
		try {
			const response = await sendEmail(data);
			setIsLoading(false);
			if (!response) {
				return toast({
					title: "Something went wrong.",
					description: "Couldn't send message. Please try again.",
					variant: "destructive",
				});
			} else {
				form.reset();
				return toast({
					title: "Thank you for reaching out to us!",
					description: "We'll get back to you as soon as possible",
				});
			}
		} catch (error) {
			console.error("Error:", error);
			return toast({
				title: "Request Error",
				description: "Please ensure you're connected to the internet",
				variant: "destructive",
			});
		}
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(handleFormSubmit)} className="">
				<div className="grid gap-2">
					<div className="flex gap-2">
						<FormField
							control={form.control}
							name="firstName"
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<Input placeholder="First name" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="lastName"
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<Input placeholder="Last name" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<div className="flex flex-col gap-2 ">
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<Input placeholder="email" type="email" {...field} />
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
									<FormControl>
										<Textarea placeholder="Type your message hrere" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<button type="submit" className={cn(buttonVariants())} disabled={isLoading}>
						{isLoading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
						Submit
					</button>
				</div>
			</form>
		</Form>
	);
}
