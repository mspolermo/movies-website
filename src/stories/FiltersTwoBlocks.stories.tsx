import {Meta, StoryObj} from "@storybook/react";
import FilterTwoBlocks from "../components/Filters/FilterTypes/FilterGenre&Countries/FilterTwoBlocks";

const meta: Meta<typeof FilterTwoBlocks> = {
    title: 'Components/FilterTwoBlocks',
    component: FilterTwoBlocks,
    tags: ['autodocs'],
    argTypes: {
        popularValues: {
            description: 'Массив популярных значений фильтра',
            options: []
        },

        allValues: {
            description: 'Массив всех значений фильтра',
            options: []
        },

        selectValues: {
            description: 'Выбранные значения конкретного фильтра',
            options: ['Не выбраны' ,'Не выходи', 'Из комнаты', 'Не совершай', 'Ошибку', 'Зачем', 'тебе', 'Солнце', 'если ты', 'куришь ', 'Шипку?', 'За дверью', 'бессмысленно', 'всё, особенно', 'возглас', 'счастья', 'Только ', 'в уборную', 'и сразу же', 'возвращайся', 'О, не выходи', 'из комнаты', 'не вызывай', 'мотора'],
            control: {
                type: 'check'
            }
        },

        handleChangeFilter: {
            description: 'Все выбранные фильтры',
        },
    }
};

export default meta;
type Story = StoryObj<typeof FilterTwoBlocks>;

export const FilterBlocks: Story = {
    render: (args) => (
        <div {...args} style={{'backgroundColor': '#FFFFFF', 'minHeight': 393}} >
            <FilterTwoBlocks popularValues={args.popularValues} allValues={args.allValues} selectValues={args.selectValues} handleChangeFilter={args.handleChangeFilter}/>
        </div>
    ),
    args: {
        popularValues: ['Не выходи', 'Из комнаты', 'Не совершай', 'Ошибку', 'Зачем', 'тебе', 'Солнце', 'если ты', 'куришь ', 'Шипку?',],
        allValues: ['Не выходи', 'Из комнаты', 'Не совершай', 'Ошибку', 'Зачем', 'тебе', 'Солнце', 'если ты', 'куришь ', 'Шипку?', 'За дверью', 'бессмысленно', 'всё, особенно', 'возглас', 'счастья', 'Только ', 'в уборную', 'и сразу же', 'возвращайся', 'О, не выходи', 'из комнаты', 'не вызывай', 'мотора'],
        selectValues: ['Не выбраны'],
    }
};