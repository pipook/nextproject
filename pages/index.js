import React from 'react';
import Head from 'next/head'
import Container from '../components/Container';
import Users from '../components/Users';
import axios from 'axios';

const Index = ({ users }) => {
	return (
		<Container>
			<Head>
				<title>Next.js Project - Home</title>
			</Head>
			<h1>Next</h1>
			<Users users={users} />
		</Container>
	);
}

Index.getInitialProps = async (ctx) => {
	const res = await axios.get('https://reqres.in/api/users?page=2');
	//const json = await res.data;
	return { users: res.data.data }
}

export default Index