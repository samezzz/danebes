import { contactFormData } from "@/types";
// import { Tailwind } from "@react-email/tailwind";
import {
	Body,
	Container,
	Head,
	Heading,
	Html,
	Preview,
	Section,
	Tailwind,
	Text,
} from "@react-email/components";

export default function EmailTemplate({
	firstName,
	lastname,
	email,
	message,
}: contactFormData) {
	return (
		<Html>
			<Head />
			<Preview>Login to Daily Counsel</Preview>
			<Tailwind>
				<Body className="mx-auto my-auto bg-white font-sans">
					<Container className="mx-auto my-10 max-w-[500px] rounded border border-solid border-gray-200 px-10 py-5">
						<Heading className="mx-0 my-7 p-0 text-center text-xl font-semibold text-black">
							From <span className="italic">{email}</span>
						</Heading>
						<Text className="text-sm leading-6 text-black">{message}</Text>
						<Text className="text-sm font-light leading-6 text-gray-400">
							{firstName} {lastname}
						</Text>
					</Container>
				</Body>
			</Tailwind>
		</Html>
	);
}
