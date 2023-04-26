import type { Meta, StoryObj } from '@storybook/react';

import '../styles/App.scss'
import { RatingRangeSlider } from '../components/RatingRangeSlider/RatingRangeSlider';

const meta: Meta<typeof RatingRangeSlider> = {
	title: 'Components/RatingRangeSlider',
	component: RatingRangeSlider,
};

export default meta;
type Story = StoryObj<typeof RatingRangeSlider>;


export const byRating: Story = {
	args: {
		filterBy: 'by-rating',
	},
};

export const byRatingCount: Story = {
	args: {
		filterBy: 'by-rating-quantity',
	},
};