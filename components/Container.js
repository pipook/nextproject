import React from 'react'
import Head from 'next/head';
import Navigation from './Navigation';

const Container = (props) => {
	return (
		<div>
			<Head>
				<title>Next.js Project</title>
				<link 
					rel="stylesheet" 
					href="https://bootswatch.com/5/flatly/bootstrap.min.css"
				></link>
			</Head>
			<Navigation />
			<div className="container pt-4">
				{ props.children }
			</div>
		</div>
	)
}

export default Container