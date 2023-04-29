import {Meta, StoryObj} from "@storybook/react";
import Filters from "../components/Filters/Filters";


const meta: Meta<typeof Filters> = {
    title: 'Components/Filters',
    component: Filters,
};

export default meta;
type Story = StoryObj<typeof Filters>;

export const Default: Story = {
};