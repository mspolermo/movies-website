import type { Meta, StoryObj } from '@storybook/react';
import Icons from '../components/Icons/Icons';

const meta: Meta<typeof Icons> = {
    title: 'Components/Icons',
    component: Icons,
    tags: ['autodocs'],
    argTypes: {
        name: {
            description: 'Варианты иконок',
            options: [
                'telegram', 'linkedin', 'viber', 'twitter', 'odnoklasniki',
                'vkontakte', 'mute', 'devices', 'smartTV', 'google',
                'apple', 'mail', 'phone', 'search', 'notification',
                'person', 'movie', 'folder-plus', 'download', 'ring'
            ],
            control: {
                type: 'select'
            }
        },
        color: {
                description: 'Выбор цвета линий иконки'
        },
        size: {
            description: 'Выбор размера иконки'
        },
        strokeWidth: {
            description: 'Выбор ширины линий'
        },
        className: {
            description: 'Имя класса'
        }
    }
};

export default meta;
type Story = StoryObj<typeof Icons>;

export const InternalIcon: Story = {
    render: (args) => (
      <div {...args} style={{'backgroundColor': '#100e19', 'minHeight': 150, 'display': 'flex', 'alignItems':'center', 'justifyContent' : 'center'}} >
        <Icons name={args.name} color={args.color} size={args.size} strokeWidth={args.strokeWidth} className={args.className}/>
      </div>
    ),
    args: {
        name: 'mail',
        color: '#fff',
        size: '40',
        strokeWidth: '1',
        className: ''
    }
  };