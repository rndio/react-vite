import {useState} from 'react';
import { RiArrowUpCircleFill } from '@remixicon/react';
import Header from './components/Header';
import Button from './components/Button';

function App() {
    const [ likes, setLikes ] = useState(0);
    function handleClick() {
      setLikes(likes + 1);
    }

    return (
        <div className='bg-slate-900 grid place-content-center min-h-screen text-white'>
          <div className='flex gap-x-2'>
            <Button>
                Default Button
            </Button>

            <Button className='bg-red-600' onClick={() => console.log('Hello World!')}>
                Danger Button
            </Button>

            <Button onClick={() => handleClick()}>
              {likes} Likes
            </Button>
            </div>
        </div>
    );
}

export default App;
