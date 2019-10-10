import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component{
    constructor(props) {  //nº3 . Hemos añadido construtor, con un this.state y sus trres keys q se refieren a los dos inputs y a la selecion de filtro de busqueda
        super(props);
        this.state= {
            term:'',
            location:'',
            sortBy: 'best_match',
        };
        this.sortByOptions = {     //ESto era un const sortbyOptions, pero lo hemos introducido en el constructor, y tranformado en this.
            'Best Match': 'best_match' ,
            'Highest Rated': 'rating',
            'Most Reviewed':'review_cont'
        }
        this.renderSortByOptions=this.renderSortByOptions.bind(this);
        this.handleTermChange=this.handleTermChange.bind(this); //BINDEAMOS TODOS LOS METODOS Q USEN THIS
        this.handleLocationChange=this.handleLocationChange.bind(this);
        this.handleSearch=this.handleSearch.bind(this);
    }
    getSortByClass(sortByOption) { //funcion crea para chekar si existe un filtro selecionado o no
        if(this.state.sortBy===sortByOption){ //no estoy seguro si es asi. 
            return 'active'
        }else{
            return ''
        }
    }
    handleSortByChange(sortByOption) {
        this.setState({sortBy: sortByOption})  // De esta manera conseguimos q se cambie el color cnd seleccionamos los filtros
    }
    handleTermChange(event){  //ponemos event en los dos pues van a relacionarse con events
        this.setState({
            term: event.target.value //esto hara q acepte string. EL string q entre por el input
        })
    }
    handleLocationChange(event){
        this.setState({
            location: event.target.value
        })
    }
    handleSearch(event) {
        this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy) //CREO MALLLLL
        event.preventDefault(); //CREO MALLLLL
    }
    renderSortByOptions() {  //el fin de este render es display las opciones d busqueda. Recomienda mirar future proof en doc de Yelp
        return Object.keys(this.sortByOptions).map(sortByOption=>{
            let sortByOptionValue= this.sortByOptions[sortByOption]; //asi accedemos al valor de sorbyoptions
            return <li key={sortByOptionValue}  
            className={this.getSortByClass(sortByOptionValue)}/*Con esto vamos a poder ver marcado q sort esta seleccionado, es estetico*/ onClick={this.handleSortByChange.bind(this, sortByOptionValue)} > 
                {sortByOption} 
            </li>
        });
    }

    render() {
        return (
            <div className= 'SearchBar' searchYelp= {this.searchYelp}>
                <div className= 'SearchBar-sort-options'>
                    <ul>
                        {this.renderSortByOptions()}
                    </ul>
                </div>
                <div className= "SearchBar-fields">
                    <input placeholder="Search Businesses" onChange={this.handleTermChange}/*Añadimos onChange a los dos inputs,para q se ejecute los metodos handle*//>
                    <input placeholder="Where?" onChange={this.handleLocationChange}/>
                </div>
                <div className="SearchBar-submit" >
                    <a href="www.#.com" onClick={this.handleSearch}>Let's Go</a>
                </div>
            </div>
        )
    }
}
export default SearchBar;