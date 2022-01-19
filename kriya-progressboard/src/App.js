import './App.css';
import ProgressBoard from './Component/ProgressBoard';
import { DndProvider } from 'react-dnd'
import {HTML5Backend} from 'react-dnd-html5-backend'

function App() {
  return (
    <div className="pb-body">
      <h1>Progress Board</h1>
      <DndProvider backend={HTML5Backend}>
        <ProgressBoard />
      </DndProvider>
    </div>
  );
}

export default App;
