import React from 'react'

const Nav = () => {
	return (
		<>
			<div className='navbar h-20 p-5 text-neutral-content rounded-box lg:displey-flex flex-column'>
				<div className='flex-1 px-2 mx-2'>
					<span className='text-3xl font-bold  text-white'>dewebs</span>
				</div>
				<div className='flex-none hidden px-2 mx-2 lg:flex'>
					<div className='flex items-stretch text-3xl '>
						<div className='devicon-github-original mx-2' />
						<div className='devicon-linkedin-plain mx-2' />
						<div className='btn btn-ghost btn-sm rounded-btn'>Sobre mí</div>
						<div className='btn btn-ghost btn-sm rounded-btn'>Proyectos</div>
						<div className='btn btn-ghost btn-sm rounded-btn'>Contacto</div>
					</div>
				</div>
				<div className='navbar-end lg:hidden '>
					<div className='dropdown dropdown-end '>
						<label
							tabIndex={0}
							className='btn btn-ghost btn-circle '
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-8 w-8'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M4 6h16M4 12h16M4 18h7'
								/>
							</svg>
						</label>
						<ul
							tabIndex={0}
							className='menu menu-sm dropdown-content mt-3 z-[1] p-2  shadow bg-gray-700 rounded-box w-52 text-center'
						>
							<li className='flex flex-row justify-center'>
								<div className='devicon-github-original mx-2 text-3xl ' />
								<div className='devicon-linkedin-plain mx-2 text-3xl' />
							</li>
							<li></li>
							<li>
								<div className='btn btn-ghost btn-sm rounded-btn'>Sobre mí</div>
							</li>
							<li>
								<div className='btn btn-ghost btn-sm rounded-btn'>Proyectos</div>
							</li>
							<li>
								<div className='btn btn-ghost btn-sm rounded-btn'>Contacto</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	)
}

export default Nav
