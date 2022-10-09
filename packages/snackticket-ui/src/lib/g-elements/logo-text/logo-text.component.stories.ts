import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { LogoTextComponent } from './logo-text.component';

export default {
  title: 'LogoTextComponent',
  component: LogoTextComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<LogoTextComponent>;

const Template: Story<LogoTextComponent> = (args: LogoTextComponent) => ({
  props: args,
});


export const LogoText = Template.bind({});
LogoText.args = {
  width: 256
}