import { BrowserRouter, Switch, Route, Redirect, Link } from 'react-router-dom';
import { useEffect } from 'react';
import ColorList from './ColorList.js';
import ColorFilter from './ColorFilter.js';
import NewColorForm from './NewColorForm.js';

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

const App = ({ initialData=defaultColors }) => {
  
  useEffect(() => {
    localStorage['colors'] = JSON.stringify([...initialData]);
  });

  const colors = JSON.parse(localStorage['colors']);

  return (
    <>
      <h1>Color Picker</h1>
      <BrowserRouter>
        <Link to='/colors'>Home</Link>
        <Link to='/colors/new'>Add Color</Link>
        <Switch>
          <Route exact path='/colors'>
            <ColorList colorNames={colors.map(({ name }) => name)} />
          </Route>
          <Route exact path='/colors/new'>
            <NewColorForm />
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
