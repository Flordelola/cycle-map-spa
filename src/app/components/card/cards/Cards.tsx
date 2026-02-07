import Image from "next/image";
import { ICards } from '@/app/interfaces';
import { MapPin } from 'lucide-react';



function Cards (props: ICards)  {

  const {title, location, nslots, iconColor} = props;

  return (
    <div className="cards px-4 py-4">
      <h4 className="h4">{title}</h4>
      <MapPin color={iconColor}/>
      <h2>{location}</h2>
      <Image
        className="dark:invert"
        src="/icons/suitcase.svg"
        alt="Suitcase"
        width={24}
        height={24}
        priority
      />
      <p>{nslots}</p>
    </div>
  )
}

export default Cards
