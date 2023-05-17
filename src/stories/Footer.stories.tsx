import type { Meta, StoryObj } from '@storybook/react';
import Footer from '../components/Footer/Footer';
import'../styles/App.scss'

import { BrowserRouter} from "react-router-dom";
import LanguageChanger from '../components/Header/LanguageChanger/LanguageChanger';



const meta: Meta<typeof Footer> = {
    title: 'Components/Footer',
    component: Footer,
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {
    render: (args) => (
      <BrowserRouter >
        <div style={
              {
                  'backgroundColor': '#100e19', 
                  'width': '1400px' 
              }
          }>

                <LanguageChanger />
                <Footer />  
        </div>
      </BrowserRouter>
    ),
    args: {
    }
  };