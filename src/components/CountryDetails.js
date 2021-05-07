import React, { Component } from 'react'
import axios from 'axios'
import {Link, Routes} from 'react-router-dom'
export default class CountryDetails extends Component {
    
    state={
        countryDetails:null,
    }
    
     fetchData = () => {
        let countryId = String(this.props.match.params.id)
        axios.get(`https://restcountries.eu/rest/v2/alpha/${countryId}`)
        .then((result) => {
            const {name, capital, area, borders} = result.data
            let detail={
                name: name,
                capital: capital,
                area: area,
                borders: borders,
            }
            this.setState({
                countryDetails: detail
            })
        }).catch((err) => {
            console.log('Error')
        });
    }

    componentDidMount(){
        this.fetchData()
    }
       
    componentDidUpdate(){
        let paramsId = this.props.match.params.id
        this.state.countryDetails.borders.filter((e)=>{
            if(paramsId == e){
                return this.fetchData()
            }
        })        
    }

    render() {
        
        const {countryDetails} = this.state
        if(!countryDetails){
            return <h1>Loading...</h1>
        }

        return (
            <div>
                <h1>{countryDetails.name}</h1>
                <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td >Capital</td>
                  <td>{countryDetails.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                    {countryDetails.area} km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                        {       
                            countryDetails.borders.map((e, i)=>{  
                                return <div key={i}>
                                    <ul>
                                        <li>
                                        <Link to={`/country/${e}`}>{e}</Link>   
                                        </li>
                                        </ul>
                                </div>
                            })
                        }
                  </td>
                </tr>
              </tbody>
            </table>
            </div>
        )
    }
}
