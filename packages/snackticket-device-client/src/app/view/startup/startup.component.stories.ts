import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { StartupComponent } from './startup.component';

export default {
  title: 'StartupComponent',
  component: StartupComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<StartupComponent>;

const Template: Story<StartupComponent> = (args: StartupComponent) => ({
  props: args,
});


export const Base = Template.bind({});
Base.args = {
}