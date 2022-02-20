import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
  import { fab } from '@fortawesome/free-brands-svg-icons'
  import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
  import Accordion from './component/Accordion';

  library.add(fab, faPlus, faMinus )

const list = [
  {
    id: 1,
    title: 'Can I restore the product?',
    content: 'If there is any non-human damage, please contact us on official website asking for restore. The whole process will not charge any fee.'
  },
  {
    id: 2,
    title: 'Can I restore the product?',
    content: 'If there is any non-human damage, please contact us on official website asking for restore. The whole process will not charge any fee.'
  },
  {
    id: 3,
    title: 'Can I restore the product?',
    content: 'If there is any non-human damage, please contact us on official website asking for restore. The whole process will not charge any fee.'
  }
];

function App() {
  console.log(list);
  return (
    <div className='app'>
      <Accordion list={list}/>
    </div>
  );
}

export default App;
