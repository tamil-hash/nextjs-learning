import Link from 'next/link';

const Meals = () => {
	return (
		<main>
			<h1>Meals page</h1>
			<p>
				<Link href="meals/share">Share</Link>
			</p>
			<p>
				<Link href="meals/1">Meals Post 1</Link>
			</p>
			<p>
				<Link href="meals/2">Meals Post 1</Link>
			</p>
			<p>
				<Link href="meals/3">Meals Post 1</Link>
			</p>
		</main>
	);
};

export default Meals;
