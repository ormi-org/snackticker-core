import { CommonModule } from '@angular/common';
import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { LoadingBarComponent } from '../components/loading-bar/loading-bar.component';
import { AuthorSplashComponent } from '../g-elements/author-splash/author-splash.component';
import { LogoTextComponent } from '../g-elements/logo-text/logo-text.component';
import { LogoComponent } from '../g-elements/logo/logo.component';
import { SplashScreenComponent } from './splash-screen.component';

export default {
  title: 'SplashScreenComponent',
  component: SplashScreenComponent,
  decorators: [
    moduleMetadata({
      declarations: [LogoTextComponent, LogoComponent, LoadingBarComponent, AuthorSplashComponent],
      imports: [CommonModule],
    })
  ],
} as Meta<SplashScreenComponent>;

const Template: Story<SplashScreenComponent> = (args: SplashScreenComponent) => ({
  props: args,
});


export const SplashScreen = Template.bind({});
SplashScreen.args = {
}