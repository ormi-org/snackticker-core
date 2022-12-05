import { BrowserModule } from '@angular/platform-browser';
import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { BasketButtonComponent } from './basket-button.component';

export default {
  title: 'BasketButtonComponent',
  component: BasketButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [BrowserModule],
    })
  ],
} as Meta<BasketButtonComponent>;

const Template: Story<BasketButtonComponent> = (args: BasketButtonComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
};