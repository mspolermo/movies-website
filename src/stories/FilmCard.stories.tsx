import FilterButton from "../components/Filters/FilterButton/FilterButton";
import {Meta, StoryObj} from "@storybook/react";
import FilmCard from "../components/FilmCard/FilmCard";

const meta: Meta<typeof FilmCard> = {
    title: 'Components/FilmCard',
    component: FilmCard,
    tags: ['autodocs'],
    argTypes: {
        film: {
            description: 'jSon c информацией по конкретному фильму',
            options: '',
        },
        onClick: {
            description: 'Переход на страницу фильма по клику',
            defaultValue: [],
        },
    }
};

export default meta;
type Story = StoryObj<typeof FilmCard>;

export const Default: Story = {

    args: {

    }
};