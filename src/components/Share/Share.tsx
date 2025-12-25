
type ShareProps = {
  Showing: boolean;
}

export function Share({ Showing }: ShareProps) {
  return (
    <div
      className={`
        absolute 
        bg-(--dark-grayish-blue) 
        sm:-top-18 sm:left-1/2 sm:right-auto sm:bottom-auto
        sm:-translate-x-1/2 
        left-0 right-0 bottom-0 top-0 
        flex 
        gap-4 px-7 py-3 
        sm:justify-center sm:items-center 
        items-center justify-start
        rounded-lg 
        shadow-2xl ${Showing ? 'block' : 'hidden'}
      `}
    >
      <p className="text-(--grayish-blue)">SHARE</p>
      <div className="flex gap-3 text-white">
        <a href="#">
          <i className="fa-brands fa-square-facebook text-lg"></i>
        </a>
        <a href="#">
          <i className="fa-brands fa-x-twitter text-lg"></i>
        </a>
        <a href="#">
          <i className="fa-brands fa-pinterest text-lg"></i>
        </a>
      </div>
      <div className="absolute -bottom-5 sm:block hidden">
        <i className="fa-solid fa-caret-down text-4xl text-(--dark-grayish-blue)"></i>
      </div>
    </div>
  )
}