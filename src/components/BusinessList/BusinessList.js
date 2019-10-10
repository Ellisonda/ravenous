import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business'; //los .. refieren al directorio padre
class BusinessList extends React.Component{
    render() {
        return ( //recordar la barra de conclusion en los business q vienen ahora. Ya NO PROCEDE
            <div className="BusinessList"> 
             {this.props.businesses.map((business)=>{ /*OJO que habia puesto mal el orden del props y daba error. Esto va a  mandar que usemos el array business*/
                 return <Business business={business} key= {business.id}/>; //renderizara el array. HEMOS AÑADIDO UNA KEY DE ID, RELACIONADA CN LA HOJA DE YELP
              })/*accedemos al array de business, q esta en app.js*/ 
            } 
               
            </div>
        );
    }
}
export default BusinessList; //asi lo hacemos exportable