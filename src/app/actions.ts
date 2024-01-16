'use server'

import EmailTemplate from "@/components/EmailTemplate";
import { contactFormData } from "@/types";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: contactFormData) {
	try {
		const data = await resend.emails.send({
			from: `${formData.email} <Login@samess.tech>`,
			to: ["psalmuelselfie@gmail.com", "daniel.essilfie@gmail.com"],
			subject: `Message from Danebes Website`,
			react: EmailTemplate(formData ),
		});
		return { success: true, data };
	} catch (error) {
		throw new Error("Failed to send the verification Email");
	}
}
