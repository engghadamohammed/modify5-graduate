import "./Card.css"
import { Link } from "react-router-dom"
const Card = ( props) => {
  return (
      <>
          <div className="card">
  <img src={props.img} className="card-img-top" alt="..."/>
  <div className="card-body">
                  <h5 className="card-title">{props.title}</h5>
    <Link to ="/Memory"  className="btn">Add Now</Link>
   
  </div>
</div>
      </>
  )
}

export default Card
