import type { Meta, StoryObj } from '@storybook/react';
import Tile from '../components/UI/Buttons/Tile/Tile';
import Icons from '../components/Icons/Icons';

const meta: Meta<typeof Tile> = {
    title: 'UI/Buttons/Tile',
    component: Tile,
    tags: ['autodocs'],
    argTypes: {
        title: {
            description: 'Заголовок плитки'
        },
        svg: {
            description: `Поле для передачи иконки в формате &lt;svg>...</svg>`,
            options: [
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#ffffff" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"/><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/><g id="SVGRepo_iconCarrier"> <title/> <g id="Complete"> <g id="mail"> <g> <polyline fill="none" points="4 8.2 12 14.1 20 8.2" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/> <rect fill="none" height="14" rx="2" ry="2" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="18" x="3" y="6.5"/> </g> </g> </g> </g></svg>
            ]
        },
        onClick: {
            description: `Поле для назначения действия на плитку`,
            options: [function() {alert('Кнопка нажата')}],
            control: {
                type: 'radio'
            }
        },
        hooverEffect: {
            description: `Включить/выключить эффекты по наведению курсора на плитку`,
            options: ['on', 'off'],
            control: {
                type: 'radio'
            }
        }
    }
};

export default meta;
type Story = StoryObj<typeof Tile>;

export const ExampleUsing: Story = {
    render: (args) => (
      <div {...args} style={
            {
                'backgroundColor': '#100e19', 
                'minHeight': 300, 'display': 'flex', 
                'alignItems':'center', 
                'justifyContent' : 'center'
            }
        }>
            <div style={
                {
                    'width': 180,
                    'marginTop': -40
                }
            }>
                <Tile title={args.title} svg={args.svg} hooverEffect={args.hooverEffect}/>    
            </div>
      </div>
    ),
    args: {
        title: 'Смотреть позже',
        svg: <Icons className="headerMenuLogin__svg" name='bookmark' color='#b0afb1' size='20'/>,
        hooverEffect: 'on'
    }
  };

export const Default: Story = {
    args: {
        title: 'История просмотров',
        svg: <Icons className="headerMenuLogin__svg" name='history' color='#b0afb1' size='20'/>
    }
};