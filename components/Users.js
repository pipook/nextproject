import React from 'react'
import Link from 'next/link'

const Users = ({ users }) => {
	return (
		<div>
			<ul className="list-group">
				{
					users.map((user) => (
						<Link href={`/users/${user.id}`}>
						<li 
							className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" 
							key={user.id}
						>
							<div>
								<h5>{`${user.first_name} ${user.last_name}`}</h5>
								<p>Email: {user.email}</p>
							</div>
							<img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} style={{borderRadius: '50%'}} />
						</li>
						</Link>
					))
				}
			</ul>
		</div>
	)
}

export default Users