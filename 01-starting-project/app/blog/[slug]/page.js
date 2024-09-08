import React from 'react';

const BlogPost = ({ params }) => {
	console.log(params);
	return (
		<main>
			<h1>BlogPost - {JSON.stringify(params)}</h1>
		</main>
	);
};

export default BlogPost;
