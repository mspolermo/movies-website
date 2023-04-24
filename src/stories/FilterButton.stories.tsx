import FilterButton from "../components/Filters/FilterButton/FilterButton";
import {Meta, StoryObj} from "@storybook/react";

const meta: Meta<typeof FilterButton> = {
    title: 'Components/FilterButton',
    component: FilterButton,
    tags: ['autodocs'],
    argTypes: {
        filterName: {
            description: 'Название фильтра',
            options: '',
        },
        selectedFiltersBy: {
            description: 'Массив выбранных значений фильтра',
            defaultValue: [],
        },
        activeBlock: {
            description: 'Имя активной кнопки',
            options: ['countries', 'genre', 'year', 'rating'],
            control: {
                type: 'select'
            }
        },
        blockName: {
            description: 'Имя кнопки(уникальное)',
            defaultValue: '',
        },
        setActiveBlock: {
            description: 'Проверяет, если имя активной кнопки === имени кнопки, то кнопка активна.',
        }
    }
};

export default meta;
type Story = StoryObj<typeof FilterButton>;

export const InternalIcon: Story = {
    render: (args) => (
        <div {...args}>
            <FilterButton filterName={args.filterName} selectedFiltersBy={args.selectedFiltersBy} activeBlock={args.activeBlock} blockName={args.blockName} setActiveBlock={args.setActiveBlock}/>
        </div>
    ),
    args: {
        filterName: 'Жанр',
        selectedFiltersBy: '',
        activeBlock: 'countries',
        blockName: 'genre',
    }
};