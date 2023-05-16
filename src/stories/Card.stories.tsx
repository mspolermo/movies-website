import type { Meta, StoryObj } from '@storybook/react';
import Card from '../components/UI/Buttons/Card/Card';

const meta: Meta<typeof Card> = {
    title: 'UI/Buttons/Card',
    component: Card,
    tags: ['autodocs'],
    argTypes: {
        type: {
            description: 'Варианты типов карточки',
            options: ['small', 'big', 'reit'],
            defaultValue: 'small',
            control: {
                type: 'radio',
                defaultValue: 'default'
            }
        },
        title: {
            description: 'Имя персонажа'
        },
        raitingKP:  {
            description: 'Количество баллов рейтинга (для типа карточки reit)'
        },
        photoUrl:  {
            description: 'Ссылка на фото персонажа'
        },
        role: {
            description: 'Роль персонажа'
        },
        onClick: {
            description: `Поле для назначения действия на кнопку`,
            options: [function() {alert('Кнопка нажата')}],
            control: {
                type: 'radio'
            }
        }
    }
};

export default meta;
type Story = StoryObj<typeof Card>;

export const smallCard: Story = {
    args: {
        type: 'small',
        title: 'Райан Дункан',
        photoUrl: "https://st.kp.yandex.net/images/actor_iphone/iphone360_476708.jpg",
    }
};

export const bigCard: Story = {
    args: {
        type: 'big',
        title: 'Джеймс Энт',
        photoUrl: "https://st.kp.yandex.net/images/actor_iphone/iphone360_83247.jpg",
        role: 'актеры'

    }
};

export const reitingCard: Story = {
    args: {
        type: 'reit',
        raitingKP: 6.2
    }
};