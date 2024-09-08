import Link from 'next/link';

const page = () => {
	console.log('asd');
	return (
		<main>
			<h1>"About us"</h1>
			<p>
				<Link href="blog/post-1">Post 1</Link>
			</p>
			<p>
				<Link href="blog/post-2">Post 2</Link>
			</p>
			<p>
				<Link href="blog/post-3">Post 3</Link>
			</p>
			<p>
				<Link href="blog/asd das">Adda asd</Link>
			</p>
		</main>
	);
};

export default page;
