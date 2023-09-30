import Link from 'next/link';

export const Navbar = () => <nav className="h-10 bg-red-400 w-full">
	{/*
	Wrapper
	   Links
		   link1
		   link2
		   link3
	   NavLogo
	*/}
	inja navbar ast
	<div className="flex gap-2 flex-col ">
		{
			links.map(i => <Link href={i.path} key={i.name}>
				{i.name}
			</Link>)
		}
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