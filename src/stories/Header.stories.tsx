import type { Meta, StoryObj } from '@storybook/react';
import Header from '../components/Header/Header';
import'../styles/App.scss'


const meta: Meta<typeof Header> = {
    title: 'Components/Header/Header',
    component: Header,
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
    render: (args) => (
      <div style={
            {
                'backgroundColor': '#100e19', 
                'width': '1400px' 
            }
        }>
                <Header />  
      </div>
    ),
    args: {
    }
  };