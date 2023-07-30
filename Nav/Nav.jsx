import React from 'react'

const Nav = () => {
	return (
		<>
			<div className='navbar h-20 p-5 shadow-lg bg-neutral text-neutral-content rounded-box'>
				<div className='flex-1 px-2 mx-2'>
					<span className='text-lg font-bold'>Dewebs</span>
				</div>
				<div className='flex-none hidden px-2 mx-2 lg:flex'>
					<div className='flex items-stretch'>
						<a className='btn btn-ghost btn-sm rounded-btn'>Home</a>
						<a className='btn btn-ghost btn-sm rounded-btn'>About</a>
						<a className='btn btn-ghost btn-sm rounded-btn'>Projects</a>
						<a className='btn btn-ghost btn-sm rounded-btn'>Contact</a>
					</div>
				</div>
			</div>
		</>
	)
}

export default Nav
