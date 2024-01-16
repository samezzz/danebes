import type { Metadata } from "next";
import "../styles/globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { GeistSans } from "geist/font/sans";
import { Analytics } from "@/components/Analytics";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
	title: "Danebes",
	description:
		"Danebes specializes in offering top-notch services related to products such as Microscopes, Chemistry Reagents and analyzers and all products in the Biomedical Engineering space.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<link rel="icon" href="/favicon.ico" sizes="any" />
				<link
					rel="icon"
					href="/icon?<generated>"
					type="image/<generated>"
					sizes="<generated>"
				/>
				<link
					rel="apple-touch-icon"
					href="/apple-icon?<generated>"
					type="image/<generated>"
					sizes="<generated>"
				/>
			</head>
			<body className={GeistSans.className}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					{children}
					<Toaster />
					<Analytics />
				</ThemeProvider>
			</body>
		</html>
	);
}
