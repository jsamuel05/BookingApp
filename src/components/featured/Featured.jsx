import './featured.css'

const Featured = () => {
  return (
    <div className='featured'>
      <div className="featuredItem">
        <img src="https://bstatic.com/xdata/images/xphoto/1182x887/150933984.jpg?k=02fec7d5a32acdcdc667eed53bfa0968e61fead61d956324700a5dc914955dc9&o=?size=S" alt="" className="featuredImg" />
        <div className="featuredTitles">
          <h1>Dublin</h1>
          <h2>123 properties</h2>

        </div>
      </div>
      <div className="featuredItem">
        <img src="https://bstatic.com/xdata/images/xphoto/1182x887/150933989.jpg?k=aa39caae1b89e21c4759cd50cf9fad0d2e490d12ed6e45d4ad583d2c6d52953f&o=?size=S" alt="" className="featuredImg" />
        <div className="featuredTitles">
          <h1>Portugal</h1>
          <h2>76 properties</h2>

        </div>
      </div>
      <div className="featuredItem">
        <img src="https://bstatic.com/xdata/images/xphoto/1182x887/150933982.jpg?k=5ab519220fa4a91723bc3f0a06880ebde39ab37245a34fb784a7405da70c43d8&o=?size=S" alt="" className="featuredImg" />
        <div className="featuredTitles">
          <h1>England</h1>
          <h2>69 properties</h2>

        </div>
      </div>
    </div>
  )
}

export default Featured