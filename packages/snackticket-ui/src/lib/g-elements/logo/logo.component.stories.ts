import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { LogoComponent } from './logo.component';

export default {
  title: 'LogoComponent',
  component: LogoComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<LogoComponent>;

const Template: Story<LogoComponent> = (args: LogoComponent) => ({
  props: args,
});


export const Logo = Template.bind({});
Logo.args = {
  width: 172
}