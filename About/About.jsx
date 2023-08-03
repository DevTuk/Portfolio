import React from 'react'

const About = () => {
	return (
		<div className='hero p-2 my-2 mt-52'>
			<div className='flex flex-col items-center justify-center relative animate-fade-up'>
				<p className='text-xl md:text-3xl text-white font-semibold'>Hola, soy</p>
				<h1 className='text-6xl md:text-9xl  font-black  flex flex-col items-center animate-text bg-gradient-to-r from-emerald-500 from-10% via-sky-500 via-30% to-purple-500 to-90%  bg-clip-text text-transparent '>
					Diego <span className='text-center'>Barros Sofio</span>
				</h1>
				<p className='py-3 text-center text-white text-3xl '>
					Frontend developer en proceso de aprendizaje constante.
				</p>
			</div>
		</div>
	)
}

export default About
