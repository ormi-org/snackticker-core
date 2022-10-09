import { RouterModule } from '@angular/router';
import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { StartupComponent } from './startup.component';
import { ViewModule } from '../view.module';

export default {
  title: 'StartupComponent',
  component: StartupComponent,
  decorators: [
    moduleMetadata({
      imports: [RouterModule, ViewModule],
    })
  ],
} as Meta<StartupComponent>;

const Template: Story<StartupComponent> = (args: StartupComponent) => ({
  props: args,
});


export const Base = Template.bind({});
Base.args = {
}