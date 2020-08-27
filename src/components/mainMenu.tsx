import React from 'react';
import { Menu } from 'semantic-ui-react';

export class MainMenu extends React.Component {
  render() {
    return (
      <Menu  color={'black'} stackable={true} inverted={true}>
        <Menu.Item name='home' />
      </Menu>
    );
  }
}

export default MainMenu;
