import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"
console.log(data)

export default function App() {
  const abc = "shazia"
  const mydata = data.map(item =>
  {
    return (
      <Card 
      key  = {item.id}
      // img = {item.img}
      // rating = {item.rating}
      // reviewCount = {item.reviewCount}
      // country = {item.country}
      // title = {item.title}
      // price = {item.price}
      // openSpots = {item.openSpots}
      // location={item.location}
      // item={item}
      {...item}
      />  
    )

  }
  )
  return (
       <div>
         <Navbar />
         <Hero /> 
         <section className="card-list">
            {mydata}
         </section>
       </div>
      );
}
