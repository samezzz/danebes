import { contactFormData } from "@/types";
import {
	Body,
	Container,
	Head,
	Heading,
	Html,
	Preview,
	Tailwind,
	Text,
} from "@react-email/components";

export default function EmailTemplate({
	firstName,
	lastName,
	email,
	message,
}: contactFormData) {
	
	return (
		<Html>
			<Head />
			<Preview>{firstName} { lastName} just sent you an Email.</Preview>
			<Tailwind>
				<Body className="mx-auto my-auto bg-white font-sans">
					<Container className="mx-auto my-10 max-w-[500px] rounded border border-solid border-gray-200 px-10 py-5">
						<Heading className="mx-0 my-7 p-0 text-xl font-semibold text-black">
							From <span className=""> {firstName}</span>
							<span className=""> {lastName}</span>
						</Heading>
						<Text className="text-sm leading-6 text-black">{message}</Text>
						<Text className="text-sm font-light leading-6 text-gray-400">{email}</Text>
					</Container>
				</Body>
			</Tailwind>
		</Html>
	);
}
