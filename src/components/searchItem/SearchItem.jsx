import './searchItem.css'

const SearchItem = () => {
  return (
    <div className='searchItem'>
        <img src="https://t-cf.bstatic.com/xdata/images/hotel/square600/366917835.webp?k=dff00eecb13da8dc26e6910db9d2c97bfd5f1b19c1aed10dd1dbc343dc8f4de3&o=&s=1" alt="" className="siImg" />    
        <div className="siDesc">
        <h1 className="siTitle">Wonderful Landscape Villa Sea and Mountain ViewOpens in new window</h1>
            <span className="siDistance">500m from center</span>
            <span className="siTaxiOp">Free airport taxi</span>
            <span className="siSubtitle">Studio Apartment with Air conditioning</span>
            <span className="siFeatures">Entire studio • 1 bathroom • 21m² 1 full bed</span>
            <span className="siCancelOp">Free cancellation</span>
            <span className="siCancelOpSubtitle">You can cancel later, so lock in this great price today!</span>
        </div>
        <div className="siDetails">
            <div className="siRating">
                <span>Excellent</span>
                <button>8.9</button>
            </div>
            <div className="siDetailTexts">
                <span className="siPrice">$2,100</span>
                <span className="siTaxOp">Includes taxes and fees </span>
                <button className='siCheckButton'>See availability</button>
            </div>
        </div>
    </div>
  )
}

export default SearchItem