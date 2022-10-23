import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { SideMenuComponent } from './side-menu.component';
import { SideMenuItemComponent } from './side-menu-item/side-menu-item.component'
import { CommonModule } from '@angular/common';
import { LogoTextComponent } from '../../g-elements/logo-text/logo-text.component';
import { AuthorSplashComponent } from '../../g-elements/author-splash/author-splash.component';

export default {
  title: 'SideMenuComponent',
  component: SideMenuComponent,
  decorators: [
    moduleMetadata({
      declarations: [SideMenuItemComponent, LogoTextComponent, AuthorSplashComponent],
      imports: [ CommonModule ],
    })
  ],
} as Meta<SideMenuComponent>;

const Template: Story<SideMenuComponent> = (args: SideMenuComponent) => ({
  props: args,
});


export const sideMenu = Template.bind({});

sideMenu.args = {
 eventName: "EMC concert annuel",
 eventHour: "21h00",
 eventLocation: "Celette",
 menuItems: [
  {
    isActive: false,
    name: "Carte",
    icon: '/carteIcon.svg',
    route: ""
  },
  {
    isActive: false,
    name: "Historique",
    icon: "/historyIcon.svg",
    route: ""
  },
  {
    isActive: false,
    name: "Aide",
    icon: "/helpIcon.svg",
    route: ""
  },
  {
    isActive: false,
    name: "Changer de périphérique",
    icon: "/changeDeviceIcon.svg",
    route: ""
  }
]
};

