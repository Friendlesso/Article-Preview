import { useState } from 'react';
import shareIcon from '../../assets/icons/icon-share.svg';
import { Share } from './Share';

export function ShareButton() {
  const [Showing, setShowing] = useState<boolean>(false);

  return (
    <div className='sm:relative'>
      <button
        className={`
          bg-(--grayish-blue) hover:bg-(--dark-grayish-blue) 
          z-10 
          px-3 py-3 
          rounded-4xl cursor-pointer 
          transition-colors duration-150 
          relative`}
        onClick={() => {
          setShowing(prev => !prev)
          console.log(Showing)
        }}
      >
        <img className='w-4 h-4' src={shareIcon} alt="Share icon" />
      </button>
      <Share
        Showing={Showing}
      />
    </div>
  )
}