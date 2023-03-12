import './App.css';
import React, { useEffect } from 'react';
import { DataContext, LineType } from './contexts/DataContext';
import { LinesRender } from './Components/LinesRender';
import NewLine from './Components/NewLine';

function App() {
  const { context, dispatch } = React.useContext(DataContext);
  const { lines } = context;
  console.log(context);
  useEffect(() => {
    dispatch({
      type: 'lines',
      payload: [{
        key: '1',
        type: LineType.Dialog,
        value: {
          speaker: 'rex',
          text: 'hello'
        }
      }, {
        key: '2',
        type: LineType.Dialog,
        value: {
          speaker: 'rex',
          text: 'hello2'
        }

      }]
    });
  }, []);
  return (
    <div className='container'>
      <div className='header'>header</div>
      <div className="mainCon">
        <div className="left"></div>
        <div className="main">
          {LinesRender(lines)}
          <NewLine />
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
}

export default App;

