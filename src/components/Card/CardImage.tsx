import CardPicture from '../../assets/images/drawers.jpg';

export function CardImage() {
 return (
  <div className='sm:w-[40%] w-full flex'>
    <img className='object-cover rounded-tl-[1.25rem] rounded-tr-[1.25rem] sm:rounded-bl-[1.25rem] sm:rounded-tr-none' src={CardPicture} alt="" />
  </div>
 )
}