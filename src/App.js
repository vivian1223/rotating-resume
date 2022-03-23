import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
  import { fab } from '@fortawesome/free-brands-svg-icons'
  import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
  import Rotate from './component/layout/Rotate';
  import Resume from './component/layout/Resume';

  library.add(fab, faPlus, faMinus )

function App() {
  return (
    <div className='app'>
      <Rotate>
        <Resume />
      </Rotate>
    </div>
  );
}

export default App;
