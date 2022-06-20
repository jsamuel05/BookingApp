import "./hotel.css"
import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/header/Header"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"

const Hotel = () => {

  const photos = [
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/22160261.jpg?k=f0b1cfbd486e3ed0c647d0c4bf18b938f4bea3bbe5834b4e5267047df842caff&o=&hp=1"
    },
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/22143675.jpg?k=4fbc6abc85d21e623830a1b26f9c5f7ab58af5fb2e545a11214d8d9915b08fab&o=&hp=1"
    },
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/22143680.jpg?k=f05541ed926c67e4fe34fe4f1406408e34d7999afd8e9061bf71b2e6dbecb7af&o=&hp=1"
    },
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/70089772.jpg?k=348edbd31ec2d0104d9eadd8f0ec94cd7626e2d14dd73a11c818c9cabfe8dab5&o=&hp=1"
    },
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/70089775.jpg?k=e2600d0f91d7412cec87d03e349c316d03bd9b07bd5cef8579801f2971e2c653&o=&hp=1"
    },
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/69698212.jpg?k=51cb98249b71cbd0f467ac8aa5e58f2e217943a866446a25fbfaeace9230a8b6&o=&hp=1"
    },

  ]
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        <div className="hotelWrapper">
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton St 123 New york</span>
          </div>
          <span className="hotelDistance">Excellent location - 50m from center</span>
          <span className="hotelPriceHighlight">
            Book a stay over $114 at this property and get a free airport taxi.
          </span>
          <div className="hotelImages">
            {photos.map(photo => (
              <div className="hotelWrapper">
                <img src={photo.src} alt="" className="hotelImg" />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of Krakow</h1>
              <p className="hotelDesc">
                This property is 1 minute walk from the beach. Located on the spectacular Tres Irmaos Beach, this 5-star hotel offers an outdoor saltwater pool surrounded by landscaped gardens. It has 5 tennis courts and 8 golf courses within 9.3 mi.
                Pestana Alvor Praia Premium Beach & Golf Resort provides nicely decorated, comfortable rooms with stunning views looking out to blue waters, the beach and lovely gardens.
                Guests have a choice to spend the day purely relaxing and taking advantage of the wellness facilities, including a sauna, steam bath and massages, available at an extra charge. There is also an indoor fresh water pool and a health club.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located in the real heart of Krakow, this property has an excellent location score of 8.9!
              </span>
              <h2>
                <b>$945</b> (9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hotel