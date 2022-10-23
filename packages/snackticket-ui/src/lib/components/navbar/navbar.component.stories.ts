import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { BasketButtonComponent } from './basket-button/basket-button.component';
import { QrcodeButtonComponent } from './qrcode-button/qrcode-button.component';
import { BurgerButtonComponent } from './burger-button/burger-button.component';

export default {
  title: 'NavbarComponent',
  component: NavbarComponent,
  decorators: [
    moduleMetadata({
      declarations: [BasketButtonComponent, QrcodeButtonComponent, BurgerButtonComponent],
      imports: [ CommonModule ],
    })
  ],
} as Meta<NavbarComponent>;

const Template: Story<NavbarComponent> = (args: NavbarComponent) => ({
  props: args,
});


export const Amount5 = Template.bind({});
Amount5.args = {
  currentAmount: 5
}

export const Amount10 = Template.bind({});
Amount10.args = {
  currentAmount: 10
}

export const Amount15 = Template.bind({});
Amount15.args = {
  currentAmount: 15
}

export const Amount25 = Template.bind({});
Amount25.args = {
  currentAmount: 25
}

export const Amount100 = Template.bind({});
Amount100.args = {
  currentAmount: 100
}
