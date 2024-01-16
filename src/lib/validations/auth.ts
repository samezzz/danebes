import * as z from "zod";

export const contactFormSchema = z.object({
	firstName: z.string({
		required_error: "required",
	}),
	lastName: z.string({
		required_error: "required",
	}),
	email: z.string({
		required_error: "required",
	}),
	message: z.string({
		required_error: "required",
	}),
});
