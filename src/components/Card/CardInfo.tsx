import { info } from '../../data/cardInfo';

export function CardInfo() {

  return(
    <div className='flex flex-col gap-7 px-7 pt-7'>
      <h3 className='font-bold text-(--dark-grayish-blue) text-2xl'>{info.title}</h3>
      <p className='font-medium text-(--dark-blue) text-sm'>{info.description}</p>
    </div>
  )
}