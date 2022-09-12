import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { AuthorSplashComponent } from './author-splash.component';

export default {
  title: 'AuthorSplashComponent',
  component: AuthorSplashComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<AuthorSplashComponent>;

const Template: Story<AuthorSplashComponent> = (args: AuthorSplashComponent) => ({
  props: args,
});


export const AuthorSplash = Template.bind({});
AuthorSplash.args = {
  width: 175
}