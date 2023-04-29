import {Meta, StoryObj} from "@storybook/react";
import TypeRangeSlider from "../components/Filters/FilterTypes/FilterRating&Grade/TypeRangeSlider";
import FilterTwoBlocks from "../components/Filters/FilterTypes/FilterGenre&Countries/FilterTwoBlocks";

const meta: Meta<typeof TypeRangeSlider> = {
    title: 'Components/Filters/TypeRangeSlider',
    component: TypeRangeSlider,
    tags: ['autodocs'],
    argTypes: {
        blockName: {
            description: 'Массив популярных значений фильтра',
        },
        handleChangeFilter: {
            description: 'Добавляет значение в выбранные фильтры',
        },
    }
};

export default meta;
type Story = StoryObj<typeof TypeRangeSlider>;

export const Rating: Story = {
    render: (args) => (
        <div {...args} style={{'minHeight': 100}} >
            <TypeRangeSlider handleChangeFilter={args.handleChangeFilter} blockName={args.blockName}/>
        </div>
    ),
    args: {
        blockName: 'rating',
        handleChangeFilter: function (){}
    }
};

export const Grade: Story = {
    render: (args) => (
        <div {...args} style={{'minHeight': 100}} >
            <TypeRangeSlider handleChangeFilter={args.handleChangeFilter}/>
        </div>
    ),
    args: {
        handleChangeFilter: function (){}
    }
};