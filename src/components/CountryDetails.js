import React, { Component } from 'react'
import axios from 'axios'

export default class CountryDetails extends Component {

    state={
        countryDetails:null
    }
    

    componentDidMount(){
        let countryId = String(this.props.match.params.id)
        axios.get(`https://restcountries.eu/rest/v2/alpha/${countryId}`)
        .then((result) => {
            
        }).catch((err) => {
            console.log('Error')
        });

    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}
