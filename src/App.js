import { BrowserRouter, Switch, Route, Redirect, Link } from 'react-router-dom';
import ColorList from './ColorList.js';
import ColorFilter from './ColorFilter.js';

const defaultColors = [
  {
    name: 'red',
    value: '#ff0000'
  },
  {
    name: 'green',
    value: '#00ff00'
  },
  {
    name: 'blue',
    value: '#0000ff'
  }
];

const App = ({ colors=defaultColors }) => {
  return (
    <>
      <h1>Color Picker</h1>
      <BrowserRouter>
        <Link to='/colors'>Home</Link>
        <Switch>
          <Route exact path='/colors'>
            <ColorList colors={colors} />
          </Route>
          <Route path='/colors/:name'>
            <ColorFilter colors={colors} />
          </Route>
          <Redirect to='/colors' />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
