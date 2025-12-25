import { user } from "../../data/userInfo";

export function CardUser() {
  return (
    <div className="flex items-center items gap-2">
      <img className="rounded-[25px] w-12.5 h-12.5" src={user.image} alt="User Image" />
      <div>
        <p className="font-bold text-(--dark-grayish-blue)">{user.name}</p>
        <p className="font-medium text-(--dark-blue) text-sm">{user.date}</p>
      </div>
    </div>
  )
}