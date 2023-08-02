import React from 'react'

const Nav = () => {
	return (
		<>
			<div className='navbar h-20 p-5 text-neutral-content rounded-box'>
				<div className='flex-1 px-2 mx-2'>
					<span className='text-3xl font-bold  text-cyan-500'>dewebs</span>
				</div>
				<div className='flex-none hidden px-2 mx-2 lg:flex'>
					<div className='flex items-stretch'>
						<a className='btn btn-ghost btn-sm rounded-btn'>Sobre mí</a>
						<a className='btn btn-ghost btn-sm rounded-btn'>Proyectos</a>
						<a className='btn btn-ghost btn-sm rounded-btn'>Contacto</a>
					</div>
				</div>
			</div>
		</>
	)
}

export default Nav
