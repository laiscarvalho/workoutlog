import React from 'react';
import { Menu } from 'semantic-ui-react'

export class App extends React.Component {
  render() {
    return (
      <div className={'menu'}>
        <Menu color={'black'} stackable={true} inverted>
          <Menu.Item
            name='home'
          />
        </Menu>
      </div>
    )
  }
}

export default App;
