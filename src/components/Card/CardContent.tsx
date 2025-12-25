import { ShareButton } from "../Share/ShareButton";
import { CardInfo } from "./CardInfo";
import { CardUser } from "./CardUser";

export function CardContent() {
  return (
    <div className="flex flex-col gap-8 sm:w-[60%] w-full">
      <CardInfo />
      <div className="flex justify-between items-center relative px-7 sm:py-7 py-3">
        <CardUser />
        <ShareButton />
      </div>
    </div>
  )
}