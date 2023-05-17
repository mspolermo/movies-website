import type { Meta, StoryObj } from '@storybook/react';
import Loader from '../components/UI/Loader/Loader';

const meta: Meta<typeof Loader> = {
    title: 'UI/Loader',
    component: Loader,
};

export default meta;
type Story = StoryObj<typeof Loader>;

export const Default: Story = {
    render: (args) => (
        <div style={
              {
                  'backgroundColor': '#100e19', 
                  'width': '1400px' 
              }
          }>
                <Loader />  
        </div>
    ),
    args: {
    }
  };