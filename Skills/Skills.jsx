import React from 'react'

const Skills = () => {
	return (
		<>
			<div>
				<div className='text-center  text-4xl lg:text-5xl pt-10 lg:pt-40 mb-20 text-emerald-500 '>
					Tecnologías
				</div>
				<div className='grid grid-rows-3 gap-2 lg:grid-rows-2 grid-flow-col lg:gap-3 text-center'>
					<div>
						<div className='devicon-html5-plain-wordmark colored mx-2 text-4xl lg:text-8xl' />
						<span>HTML</span>
					</div>
					<div>
						<div className='devicon-css3-plain-wordmark colored mx-2 text-4xl lg:text-8xl' />
						<span>CSS</span>
					</div>
					<div>
						<div className='devicon-javascript-plain colored mx-2 text-4xl lg:text-8xl' />
						<span>JAVASCRIPT</span>
					</div>
					<div>
						<div className='devicon-react-original colored mx-2 text-4xl lg:text-8xl' />
						<span>REACT JS</span>{' '}
					</div>
					<div>
						<div className='devicon-tailwindcss-plain colored mx-2 text-4xl lg:text-8xl' />
						<span>TAILWIND CSS</span>
					</div>
					<div>
						<div className='devicon-vscode-plain colored mx-2 text-4xl lg:text-8xl'></div>
						<span>VS CODE</span>
					</div>
					<div>
						<div className='devicon-git-plain colored mx-2 text-4xl lg:text-8xl' />

						<span>GIT</span>
					</div>

					<div>
						<div className='devicon-github-original mx-2 text-4xl lg:text-8xl' />
						<span>GITHUB</span>
					</div>
				</div>
			</div>
		</>
	)
}

export default Skills
