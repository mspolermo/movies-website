import type { Meta, StoryObj } from '@storybook/react';
import HeaderAdvertise from '../components/Header/HeaderAdvertise/HeaderAdvertise';

const meta: Meta<typeof HeaderAdvertise> = {
    title: 'Components/Header/Elements/HeaderAdvertise',
    component: HeaderAdvertise,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            description: 'Компонент принимает строковые значения `ivi` или `amediateka`',
            options: ['ivi', 'amediateka'],
            control: {
                type: 'radio'
            }
        }
    }
};

export default meta;
type Story = StoryObj<typeof HeaderAdvertise>;

export const ExampleUsing: Story = {
    render: (args) => (
      <div {...args} style={
            {
                'backgroundColor': '#100e19', 
                'minHeight': 400, 'display': 'flex', 
                'alignItems':'center', 
                'justifyContent' : 'center'
            }
        }>
                <HeaderAdvertise variant={args.variant}/>    

      </div>
    ),
    args: {
        variant: 'ivi'
    }
  };
