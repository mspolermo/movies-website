import type { Meta, StoryObj } from '@storybook/react';
import QualityTag from '../components/UI/Tags/QualityTag/QualityTag';

const meta: Meta<typeof QualityTag> = {
    title: 'UI/QualityTag',
    component: QualityTag,
    tags: ['autodocs'],
    argTypes: {
        quality: {
            description: 'Варианты качества',
            options: ['FullHD', 'HD', '1080', '720'],
            control: {
                type: 'radio',
                defaultValue: 'default'
            }
        },
    }
};

export default meta;
type Story = StoryObj<typeof QualityTag>;

export const Default: Story = {
    render: (args) => (
        <div {...args} style={
              {
                  'backgroundColor': '#100e19', 
                  'width': '1400px',
                  'height': '300px',
                  'display': 'flex',
                  'alignItems': 'center',
                  'justifyContent': 'center' 
              }
          }>
            <div style={
              {
                  'maxWidth': '80px',
                  'maxHeight': '20px' 
              }
            }>
                <QualityTag quality={args.quality}/>  
            </div>
                
        </div>
    ),
    args: {
        quality: 'FullHD'
    }
  };
