import {Meta, StoryObj} from "@storybook/react";
import FilterTwoBlocks from "../components/Filters/FilterBlocks/FilterTwoBlocks";

const meta: Meta<typeof FilterTwoBlocks> = {
    title: 'Components/FilterTwoBlocks',
    component: FilterTwoBlocks,
    tags: ['autodocs'],
    argTypes: {
        popularValues: {
            description: 'Массив популярных значений фильтра',
            options: []
        },

        listValues: {
            description: 'Массив всех значений фильтра',
            options: []
        },

        selectedFiltersBy: {
            description: 'Выбранные значения конкретного фильтра',
            options: ['Не выбраны' ,'Не выходи', 'Из комнаты', 'Не совершай', 'Ошибку', 'Зачем', 'тебе', 'Солнце', 'если ты', 'куришь ', 'Шипку?', 'За дверью', 'бессмысленно', 'всё, особенно', 'возглас', 'счастья', 'Только ', 'в уборную', 'и сразу же', 'возвращайся', 'О, не выходи', 'из комнаты', 'не вызывай', 'мотора'],
            control: {
                type: 'check'
            }
        },

        selectedFilter: {
            description: 'Все выбранные фильтры',
        },

        setActiveBlock: {
            description: 'Активна ли родительская кнопка фильтра',
        }
    }
};

export default meta;
type Story = StoryObj<typeof FilterTwoBlocks>;

export const FilterBlocks: Story = {
    render: (args) => (
        <div {...args} style={{'backgroundColor': '#FFFFFF', 'minHeight': 393}} >
            <FilterTwoBlocks popularValues={args.popularValues} listValues={args.listValues} selectedFiltersBy={args.selectedFiltersBy} selectedFilter={args.selectedFilter} setActiveBlock={args.setActiveBlock}/>
        </div>
    ),
    args: {
        popularValues: ['Не выходи', 'Из комнаты', 'Не совершай', 'Ошибку', 'Зачем', 'тебе', 'Солнце', 'если ты', 'куришь ', 'Шипку?',],
        listValues: ['Не выходи', 'Из комнаты', 'Не совершай', 'Ошибку', 'Зачем', 'тебе', 'Солнце', 'если ты', 'куришь ', 'Шипку?', 'За дверью', 'бессмысленно', 'всё, особенно', 'возглас', 'счастья', 'Только ', 'в уборную', 'и сразу же', 'возвращайся', 'О, не выходи', 'из комнаты', 'не вызывай', 'мотора'],
        selectedFiltersBy: ['Не выбраны'],
    }
};