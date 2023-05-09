import {Meta, StoryObj} from "@storybook/react";
import TypeYear from "../components/Filters/FilterTypes/FilterYears/TypeYear";

const meta: Meta<typeof TypeYear> = {
    title: 'Components/Filters/FilterYear',
    component: TypeYear,
    tags: ['autodocs'],
    argTypes: {
        allValues: {
            description: 'Все фильтры',
            options: []
        },
        selectValues: {
            description: 'Выбранный фильтр',
            options: ['2023', '2010-2015', 'до 1980', ''],
            control: {
                type: 'radio'
            }
        },
        handleChangeFilter: {
            description: 'Добавляет значение в выбранные фильтры',
        },
    }
};

export default meta;
type Story = StoryObj<typeof TypeYear>;

export const Default: Story = {
    render: (args) => (
        <div {...args} style={{'minHeight': 200}} >
            <TypeYear allValues={args.allValues} selectValues={args.selectValues} handleChangeFilter={args.handleChangeFilter}/>
       </div>
    ),
    args: {
        allValues: [2023, 2010, 2015, 1980],
        selectValues: 0,
        handleChangeFilter: function (){}
    }
};