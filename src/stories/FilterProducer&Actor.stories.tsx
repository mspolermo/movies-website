import {Meta, StoryObj} from "@storybook/react";
import TypeSearch from "../components/Filters/FilterTypes/FilterProducer&Actor/TypeSearch";

const meta: Meta<typeof TypeSearch> = {
    title: 'Components/Filters/TypeSearch',
    component: TypeSearch,
    tags: ['autodocs'],
    argTypes: {
        handleChangeFilter: {
            description: 'Все выбранные фильтры',
        },
    }
};

export default meta;
type Story = StoryObj<typeof TypeSearch>;

export const Default: Story = {
};

//todo: Как задать выбор элемнтов по клику смену имени активного блока?