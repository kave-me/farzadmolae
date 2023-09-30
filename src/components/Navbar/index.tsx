import Link from 'next/link';

export const Navbar = () => <nav className="h-10  w-full px-9 py-9">
	{/*
	Wrapper
	   Links
		   link1
		   link2
		   link3
	   NavLogo
	*/}
	
	<div className='flex justify-between items-center '>
		<Link href='/' className='justify-start'>
			logo
		</Link>
	<div className="flex gap-2 justify-end">
		{
			links.map(i => <Link href={i.path} key={i.name} className='p-4' >
				{i.name}
			</Link>)
		}
	</div>
	</div>
</nav>

const links = [
	{
		name: 'home',
		path: '/',
		description: 'the home page'
		
	},
	{
		name: 'home1',
		path: '/',
		description: 'the home page'
	}, {
		name: 'home2',
		path: '/',
		description: 'the home page'
	}, {
		name: 'home3',
		path: '/',
		description: 'the home page'
	},
]