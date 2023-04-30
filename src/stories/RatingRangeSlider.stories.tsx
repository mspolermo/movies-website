import type { Meta, StoryObj } from '@storybook/react';

import '../styles/App.scss'
import { RatingRangeSlider } from '../components/RatingRangeSlider/RatingRangeSlider';

const meta: Meta<typeof RatingRangeSlider> = {
	title: 'UI/RatingRangeSlider',
	component: RatingRangeSlider,
	tags: ['autodocs'],
	argTypes: {
		filterBy: {
			description: 'Варианты для фильтрации',
			options: ['by-rating', 'by-rating-quantity'],
			control: {
				type: 'radio',
			}
		}
	}
};

export default meta;
type Story = StoryObj<typeof RatingRangeSlider>;


export const byRating: Story = {
	args: {
		filterBy: 'by-rating',
	},
	render: () => (
		<div style={{ padding: '100px', backgroundColor: '#100e19' }}>
			<RatingRangeSlider handleChangeValue={() => console.log('')} filterBy='by-rating' />
		</div>
	)
};

export const byRatingCount: Story = {
	args: {
		filterBy: 'by-rating-count',
	},
	render: () => (
		<div style={{ padding: '100px', backgroundColor: '#100e19' }}>
			<RatingRangeSlider handleChangeValue={() => console.log('')} filterBy='by-rating-quantity' />
		</div>
	)
};