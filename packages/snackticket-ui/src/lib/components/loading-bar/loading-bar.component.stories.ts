import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { LoadingBarComponent } from './loading-bar.component';

export default {
  title: 'LoadingBarComponent',
  component: LoadingBarComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<LoadingBarComponent>;

const Template: Story<LoadingBarComponent> = (args: LoadingBarComponent) => ({
  props: args,
});


export const LoadingBarZero = Template.bind({});
LoadingBarZero.args = {
  width: 252,
  height: 14,
  progress: 0
};

export const LoadingBar25 = Template.bind({});
LoadingBar25.args = {
  width: 252,
  height: 14,
  progress: 25
};

export const LoadingBar40 = Template.bind({});
LoadingBar40.args = {
  width: 252,
  height: 14,
  progress: 40
};

export const LoadingBar100 = Template.bind({});
LoadingBar100.args = {
  width: 252,
  height: 14,
  progress: 100
};