const apikey= 'IpRomzGKu4rqYco2VleUSHpP79o5ek9wRiu8ZHzQex9mVdVbN0w1tWKhSRHwf8tg5LrBn3ng_vKw7H-MO0vqoBKOdcVh0tpwPSgq8mQV3w201hDz3x_4ZKUGwk2TXXYx';
const yelp= {
    
    searchYelp(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, { //la primero esuna API llamada CORS Anywhere, para asi saltar las limitaciones CORS de enlaces externos.. */
            headers: {
                Authorization: `Bearer ${apikey}`,},    }).then((response)=> {

                    return response.json();
                }).then((jsonResponse=> {
                    if(jsonResponse.businesses) { //comprueba si en jsonResponse esta la key businesses
                        return jsonResponse.businesses.map(business=> { //manda a iterar por todos los elementos del array
                            return { /*si esta, devolvera el array d cosas q pedimos en businesses*/ 
                                id: business.id, //no se xq esta. nNo la encuentro.IMPORTATE: TODO ESTAS TERMINACIONES LAS MARCA LA API DE YELP
                                imageSrc: business.image_url, //pense q era imgaSrc, pero no, 
                                name: business.name,
                                adress: business.location.adress,
                                city: business.location.city, //hemos añadido lcation pues sino, no renderiza bien la direccion
                                state: business.location.state,
                                zipCode: business.location.zip_code,
                                category: business.categories[0].title, //toma categorias como un array, no lo entiendo muy bien
                                rating: business.rating,
                                reviewCount: business.review_count

                            }
                        })
                    }
                }));
                
            }
        };

export default yelp;    


