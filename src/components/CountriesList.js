import React, { Component } from 'react'
import axios from 'axios'
import {Link, Route} from 'react-router-dom'
import CountryDetails from './CountryDetails';


export default class CountriesList extends Component {

    state ={
        countries: [],
    }
    
    componentDidMount(){
        axios.get('https://restcountries.eu/rest/v2/')
        .then((result) => {
            this.setState({
                countries:result.data
            })
        }).catch(() => {
            console.log('Error')
        });
    }

    render() {
        const {countries} = this.state

        if(!countries){
            return <h1>Loading...</h1>
        }

        return (
            <div>
                <h1>List of Countries</h1>
                <div style={{display: 'flex', justifyContent:'space-around'}}>
                    <div className="col-5" style={{'maxHeight':'90vh' , 'overflow': 'scroll'}}>
                        <div className="list-group">
                            {
                                countries.map((country)=>{
                                    return (<div key={country.alpha3Code} >
                                                <Link countries={countries} className="list-group-item list-group-item-action" to={`/country/${country.alpha3Code}`}><img style={{maxWidth:'10%'}} src={country.flag} alt='flag'/>  {country.name}</Link>
                                            </div>
                                    )   
                                })
                            }
                        </div>
                    </div>                            
                <Route path="/country/:id" component={CountryDetails}/>
                </div>
            </div>
        )
    }
}

