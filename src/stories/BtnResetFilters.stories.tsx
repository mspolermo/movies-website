import {Meta, StoryObj} from "@storybook/react";
import ButtonResetFilters from "../components/Filters/ButtonResetFilters/ButtonResetFilters";

const meta: Meta<typeof ButtonResetFilters> = {
    title: 'Components/ButtonResetFilters',
    component: ButtonResetFilters,
    tags: ['autodocs'],
    argTypes: {
        selectedFilters: {
            description: 'Все выбранные фильтры',
            options: {},
        },
        activeFilters: {
            description: 'Props без фильтров',
            options: {},
        },
        setSelectedFilters: {
            description: 'Обнуление фильтров',
        },
    }
};

export default meta;
type Story = StoryObj<typeof ButtonResetFilters>;

export const BtnResetFilters: Story = {
    render: (args) => (
        <div {...args} style={{'backgroundColor': '#1f1b2e', 'minHeight': 60}}>
            <ButtonResetFilters selectedFilters={args.selectedFilters} activeFilters={args.activeFilters} setSelectedFilters={args.setSelectedFilters} />
        </div>
    ),
    args: {
        selectedFilters: {
            'popularGenres': [],
            'genres': [],
            'countries': [],
            'years': '',
            'rating': {
                'min': 0,
                'max': 0,
            },
            'grade': {
                'min': 0,
                'max': 0,
            },
            'producer': [],
            'actor': []
        },
    }
};