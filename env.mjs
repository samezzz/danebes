import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
	server: {
		RESEND_API_KEY: z.string().min(1),
		NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: z.string().min(1),
	},
	runtimeEnv: {
		RESEND_API_KEY: process.env.RESEND_API_KEY,
		NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
	},
});
