import styles from "@/styles";
import { ContactForm } from "./ContactForm";

const CTA = () => {
	return (
		<section
			className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row border border-border flex-col bg-secondary rounded-[20px] box-shadow mb-10 py-6 px-2 gap-x-2`}
		>
			<div className="flex-1 flex flex-col">
				<h2 className={styles.heading2}>Try our service now!</h2>
				<p
					className={`${styles.paragraph} text-neutral-600 dark:text-neutral-300 max-w-[470px] mt-5 mb-4`}
				>
					Let us take care of your Biomedical Engineering needs while you focus on what matters.
				</p>
			</div>
			<ContactForm />
		</section>
	);
};

export default CTA;
