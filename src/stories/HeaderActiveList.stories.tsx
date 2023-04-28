import type { Meta, StoryObj } from '@storybook/react';
import HeaderActiveList from '../components/Header/HeaderActiveList/HeaderActiveList';

const meta: Meta<typeof HeaderActiveList> = {
    title: 'Components/Header/Elements/HeaderActiveList',
    component: HeaderActiveList,
    tags: ['autodocs'],
    argTypes: {
        dataArray: {
            description: 'Элемент принимает массив данных в формате [index:number, title:string, url:string]',
            options: [
                [
                    [0, 'Иви.Рейтинг', "https://www.ivi.ru/profile/subscription-ivi-amediateka"],
                    [1, 'Сериалы Amediateka', "https://www.ivi.ru/profile/subscription-amediateka"],
                    [2, 'Матч Премьер', "https://www.ivi.ru/profile/subscription-matchpremier"]
                ]
            ]
        },
        prefixForId:{
            description: 'Элемент требует передачи имени родительского компонента (откуда он вызван), для создания уникальных id в отрисованном списке',
            options: ['parentComponent', 'uniqString']
        },
        onHoverChange: {
            description: 'Props для двухстороннего связывания и возврата в родительский компонент типа варианта, на который наведен курсор (ivi/amediateka/match). В родительском помпоненте должен быть привязан к хуку useState, в формате функции setState',
        }
    }
};

//code for ExampleUsing 
let value='';
function setHoverData(currentHoverValue:string) {
    value=currentHoverValue;
}
let imgUrl = 'https://www.ivi.ru/pages/newseason/assets/images/new-logo-short.svg'
    switch(value) {
        case 'amediateka':
            imgUrl = 'https://toplogos.ru/images/logo-amediateka.png';
            break;
        case 'match':
            imgUrl = 'https://upload.wikimedia.org/wikipedia/ru/4/4d/%D0%9B%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF_%D1%82%D0%B5%D0%BB%D0%B5%D0%BA%D0%B0%D0%BD%D0%B0%D0%BB%D0%B0_%D0%9C%D0%B0%D1%82%D1%87_%D0%A2%D0%92.svg'
            break;
    };
export const ExampleUsing: Story = {
    render: 
    (args) => (
      <div {...args} style={
            {
                'backgroundColor': '#100e19', 
                'minHeight': 600, 'display': 'flex', 
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
                <HeaderActiveList dataArray={args.dataArray} prefixForId={args.prefixForId} onHoverChange={args.onHoverChange}/>    
            </div>
      </div>
    ),
    
    args: {
        dataArray: [
            [0, 'Изи Иви', "https://www.ivi.ru/profile/subscription-izi-ivi"],
            [1, 'Иви', 'https://www.ivi.ru/profile/subscription'],
            [2, 'Иви + Amediateka', "https://www.ivi.ru/profile/subscription-ivi-amediateka"],
            [3, 'Amediateka', "https://www.ivi.ru/profile/subscription-amediateka"],
            [4, 'Матч Премьер', "https://www.ivi.ru/profile/subscription-matchpremier"],
            [5, 'Матч Футбол', "https://www.ivi.ru/profile/subscription-matchfootball"]
        ],
        prefixForId: 'storyBook',
        onHoverChange: setHoverData
    }
  };

export default meta;
type Story = StoryObj<typeof HeaderActiveList>;