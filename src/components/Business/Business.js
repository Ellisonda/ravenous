import React from 'react';
import './Business.css';


class Business extends React.Component {
    render(){
      const {business}=this.props; //Esto lo ponemos xq asi n es necesario poner en casa business un this.props delante, pero tb seria valido
        return (
  <div className="Business">
   <div className="image-container"> 
    <img src={business.imageSrc/* vamosa  susbstituir todos los puntos */} alt=''/> 
   </div>
   <h2>{business.name}</h2>
    <div className="Business-information">
          <div className="Business-address">
             <p>{business.adress}</p>
             <p>{business.city}</p>
             <p>{`${business.state} ${business.zipCode}`/*en estos p ponemos cada atributo relacionado a busines. Ojo que usamos comillas */ }</p> 
          </div>
        <div className="Business-reviews">
          <h3>{business.category.toUpperCase()}</h3>
          <h3 className="rating">4.5 stars</h3>
           <p>`${business.reviewCount} reviews`</p>
        </div>
    </div>
  </div>
        )
    }
}
export default Business;