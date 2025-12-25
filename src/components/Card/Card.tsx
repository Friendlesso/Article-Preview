import { CardContent } from "./CardContent";
import { CardImage } from "./CardImage";

export function Card() {
  return (
    <article className=" max-w-[80dvw] w-4xl flex sm:flex-row flex-col rounded-[1.250rem] bg-white">
      <CardImage />
      <CardContent />
    </article>
  )
}