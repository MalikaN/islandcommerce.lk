export type Project = {
	id: number
	name: string
	area: string
	link: string
	image: string
	imageAlt: string
	color?: string
}

export const projects: Project[] = [
	{
		id: 0,
		name: 'Custom store fronts',
		area: 'Design and Development',
		image: '/assets/store_front.svg',
		imageAlt: 'custom store fronts',
		link: '/project/tsks',
		color: '#1D1D26',
	},
	{
		id: 1,
		name: 'Headless commerce solutions',
		area: 'Design and Development',
		image: '/assets/headless_solutions.svg',
		imageAlt: 'headless commerce solutions',
		link: '/service/headless-commerce',
	},
	{
		id: 2,
		name: 'Solutions for multiple industries',
		area: 'Design',
		image: '/assets/multiple_industries.svg',
		imageAlt: 'solutions for multiple industries',
		link: '/project/100-days-of-ui',
		color: '#E3E3E3',
	},
]
