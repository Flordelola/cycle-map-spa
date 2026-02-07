import Image from "next/image";
import Cards from "./cards/Cards"

function Card()  {
  

  return (
    <div className="card">
      <div className="grid gap-y-16">
        <Image
          className="dark:invert"
          src="/Logo.svg"
          alt="Cycle Map Logo"
          width={135}
          height={28}
          priority
        />
        <div className="grid gap-y-8">
          <h2>Discover bike networks</h2>
          <p>Lorem ipsum dolor sit amet consectetur. A volutpat adipiscing placerat turpis magna sem tempor amet faucibus. Arcu praesent viverra pellentesque nisi quam in rhoncus.</p>
        </div>
      </div>
      <Cards title="tile" location="location" nslots="nslots" iconColor="#F37B44"/>
    </div>
  )
}

export default Card
