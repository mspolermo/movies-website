import type { Meta, StoryObj } from '@storybook/react';

import '../styles/App.scss'
import { Carousel } from '../components/Carousel/Carousel';
import FilmCard from '../components/FilmCard/FilmCard';

const meta: Meta<typeof Carousel> = {
	title: 'Components/Carousel',
	component: Carousel,
	tags: ['autodocs'],
	argTypes: {
		variant: {
			description: 'Варианты слайдера',
			options: ['cards', 'filters', 'tv', 'main'],
			control: {
				type: 'radio',
				defaultValue: 'main'
			}
		},
		children: {
			description: 'Принимает список компонент и HTML элементов',
		}
	}
};

export default meta;
type Story = StoryObj<typeof Carousel>;


export const cards: Story = {
	args: {
		variant: 'cards'
	},
	render: () => (
		<div style={{ padding: '100px', backgroundColor: '#100e19' }}>
			<Carousel variant='cards'>
				<FilmCard film='film' onClick={() => console.log('film')} />
				<FilmCard film='film' onClick={() => console.log('film')} />
				<FilmCard film='film' onClick={() => console.log('film')} />
				<FilmCard film='film' onClick={() => console.log('film')} />
				<FilmCard film='film' onClick={() => console.log('film')} />
				<FilmCard film='film' onClick={() => console.log('film')} />
				<FilmCard film='film' onClick={() => console.log('film')} />
				<FilmCard film='film' onClick={() => console.log('film')} />
				<FilmCard film='film' onClick={() => console.log('film')} />
				<FilmCard film='film' onClick={() => console.log('film')} />
				<FilmCard film='film' onClick={() => console.log('film')} />
				<FilmCard film='film' onClick={() => console.log('film')} />
				<FilmCard film='film' onClick={() => console.log('film')} />
				<FilmCard film='film' onClick={() => console.log('film')} />
				<FilmCard film='film' onClick={() => console.log('film')} />
				<FilmCard film='film' onClick={() => console.log('film')} />
			</Carousel>
		</div>
	)
};

export const filters: Story = {
	args: {
		variant: 'filters'
	},
	render: () => (
		<div style={{ padding: '100px', backgroundColor: '#1f1b2e' }}>
			<Carousel variant='filters'>
				<div style={{ backgroundColor: 'white', marginRight: '10px', minWidth: '150px', minHeight: '30px', borderRadius: '30px' }}></div>
				<div style={{ backgroundColor: 'green', marginRight: '10px', minWidth: '150px', minHeight: '30px', borderRadius: '30px' }}></div>
				<div style={{ backgroundColor: 'blue', marginRight: '10px', minWidth: '180', minHeight: '30px', borderRadius: '30px' }}></div>
				<div style={{ backgroundColor: 'gray', marginRight: '10px', minWidth: '150px', minHeight: '30px', borderRadius: '30px' }}></div>
				<div style={{ backgroundColor: 'purple', marginRight: '10px', minWidth: '150px', minHeight: '30px', borderRadius: '30px' }}></div>
				<div style={{ backgroundColor: 'pink', marginRight: '10px', minWidth: '150px', minHeight: '30px', borderRadius: '30px' }}></div>
				<div style={{ backgroundColor: 'red', marginRight: '10px', minWidth: '100px', minHeight: '30px', borderRadius: '30px' }}></div>
				<div style={{ backgroundColor: 'crimson', marginRight: '10px', minWidth: '120px', minHeight: '30px', borderRadius: '30px' }}></div>
				<div style={{ backgroundColor: 'snow', marginRight: '10px', minWidth: '130px', minHeight: '30px', borderRadius: '30px' }}></div>
				<div style={{ backgroundColor: 'teal', marginRight: '10px', minWidth: '200', minHeight: '30px', borderRadius: '30px' }}></div>
				<div style={{ backgroundColor: 'tomato', marginRight: '10px', minWidth: '150px', minHeight: '30px', borderRadius: '30px' }}></div>
				<div style={{ backgroundColor: 'chocolate', marginRight: '10px', minWidth: '140px', minHeight: '30px', borderRadius: '30px' }}></div>
				<div style={{ backgroundColor: 'brown', marginRight: '10px', minWidth: '90px', minHeight: '30px', borderRadius: '30px' }}></div>
				<div style={{ backgroundColor: 'darkgoldenrod', marginRight: '10px', minWidth: '150px', minHeight: '30px', borderRadius: '30px' }}></div>
				<div style={{ backgroundColor: 'coral', marginRight: '10px', minWidth: '150px', minHeight: '30px', borderRadius: '30px' }}></div>
				<div style={{ backgroundColor: 'darkviolet', marginRight: '10px', minWidth: '80px', minHeight: '30px', borderRadius: '30px' }}></div>
				<div style={{ backgroundColor: 'skyblue', marginRight: '10px', minWidth: '180px', minHeight: '30px', borderRadius: '30px' }}></div>
				<div style={{ backgroundColor: 'cyan', marginRight: '10px', minWidth: '150px', minHeight: '30px', borderRadius: '30px' }}></div>
				<div style={{ backgroundColor: 'firebrick', marginRight: '10px', minWidth: '150px', minHeight: '30px', borderRadius: '30px' }}></div>
				<div style={{ backgroundColor: 'aqua', marginRight: '10px', minWidth: '240', minHeight: '30px', borderRadius: '30px' }}></div>
			</Carousel>
		</div>
	)
};

export const main: Story = {
	args: {
		variant: 'main'
	},
	render: () => (
		<div style={{ marginTop: '100px', backgroundColor: '#100e19' }}>
			<Carousel variant='main'>
				<img src="https://thumbs.dfs.ivi.ru/storage2/contents/f/b/e127018037ec40b6aba9d848097aea.jpg/1216x524/?q=85" alt="" />
				<img src="https://thumbs.dfs.ivi.ru/storage15/contents/2/9/f14be40a738a287d115b71f5e8f8ff.jpg/1216x524/?q=85" alt="" />
				<img src="https://thumbs.dfs.ivi.ru/storage9/contents/8/9/bb4117c54b4e0ac89cb429fa753626.jpg/1216x524/?q=85" alt="" />
				<img src="https://thumbs.dfs.ivi.ru/storage26/contents/4/5/0a9a5152f4ef1c2358c8b22bbdbebf.jpg/1216x524/?q=85" alt="" />
			</Carousel>
		</div>
	)
};

export const tv: Story = {
	args: {
		variant: 'tv'
	},
	render: () => (
		<div style={{ padding: '100px', backgroundColor: '#1f1b2e' }}>
			<Carousel variant='tv'>
				<div style={{ backgroundColor: 'white', marginRight: '10px', minWidth: '150px', minHeight: '60px', borderRadius: '5px' }}></div>
				<div style={{ backgroundColor: 'green', marginRight: '10px', minWidth: '150px', minHeight: '60px', borderRadius: '5px' }}></div>
				<div style={{ backgroundColor: 'blue', marginRight: '10px', minWidth: '150px', minHeight: '60px', borderRadius: '5px' }}></div>
				<div style={{ backgroundColor: 'gray', marginRight: '10px', minWidth: '150px', minHeight: '60px', borderRadius: '5px' }}></div>
				<div style={{ backgroundColor: 'purple', marginRight: '10px', minWidth: '150px', minHeight: '60px', borderRadius: '5px' }}></div>
				<div style={{ backgroundColor: 'pink', marginRight: '10px', minWidth: '150px', minHeight: '60px', borderRadius: '5px' }}></div>
				<div style={{ backgroundColor: 'red', marginRight: '10px', minWidth: '150px', minHeight: '60px', borderRadius: '5px' }}></div>
				<div style={{ backgroundColor: 'crimson', marginRight: '10px', minWidth: '150px', minHeight: '60px', borderRadius: '5px' }}></div>
				<div style={{ backgroundColor: 'snow', marginRight: '10px', minWidth: '150px', minHeight: '60px', borderRadius: '5px' }}></div>
				<div style={{ backgroundColor: 'teal', marginRight: '10px', minWidth: '150px', minHeight: '60px', borderRadius: '5px' }}></div>
				<div style={{ backgroundColor: 'tomato', marginRight: '10px', minWidth: '150px', minHeight: '60px', borderRadius: '5px' }}></div>
				<div style={{ backgroundColor: 'chocolate', marginRight: '10px', minWidth: '150px', minHeight: '60px', borderRadius: '5px' }}></div>
				<div style={{ backgroundColor: 'brown', marginRight: '10px', minWidth: '150px', minHeight: '60px', borderRadius: '5px' }}></div>
				<div style={{ backgroundColor: 'darkgoldenrod', marginRight: '10px', minWidth: '150px', minHeight: '60px', borderRadius: '5px' }}></div>
				<div style={{ backgroundColor: 'coral', marginRight: '10px', minWidth: '150px', minHeight: '60px', borderRadius: '5px' }}></div>
				<div style={{ backgroundColor: 'darkviolet', marginRight: '10px', minWidth: '150px', minHeight: '60px', borderRadius: '5px' }}></div>
			</Carousel>
		</div>
	)
};
