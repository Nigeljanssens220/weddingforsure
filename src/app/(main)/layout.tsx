import Navbar from "../_components/navbar/navbar"

export default function PageLayout({
	children,
}: { children: React.ReactNode }) {
	return (
		<>
			<Navbar />
			{children}
		</>
	)
}
