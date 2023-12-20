import { Menu } from "./menu"

export default function Navbar() {
	return (
		<header className="fixed top-0 z-10 flex w-screen justify-end p-4">
			<Menu />
		</header>
	)
}
