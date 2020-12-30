const urlTotalCases="https://covid-19-data.p.rapidapi.com/totals"
const urlTotalPopulation="https://world-population.p.rapidapi.com/worldpopulation"
const urlAllCountries="https://world-population.p.rapidapi.com/allcountriesname"

export const getTotalCases=async()=>{
    const response=await fetch(urlTotalCases, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "89121e0ddfmshb3a051877090596p190ae3jsn1b448db10e6c",
            "x-rapidapi-host": "covid-19-data.p.rapidapi.com"
        }
    })
    const data=await response.json()
    // console.log(data[0])
    return data[0]

}
export const getTotalPopulation=async()=>{
    const response=await fetch(urlTotalPopulation, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "89121e0ddfmshb3a051877090596p190ae3jsn1b448db10e6c",
            "x-rapidapi-host": "world-population.p.rapidapi.com"
        }
    })
    const {body}=await response.json()
    // console.log(body)
    return body

}
export const getAllCountries=async()=>{
    const response=await fetch(urlAllCountries, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "89121e0ddfmshb3a051877090596p190ae3jsn1b448db10e6c",
            "x-rapidapi-host": "world-population.p.rapidapi.com"
        }
    })
    const {body}=await response.json()
    console.log(body.countries)
    return body.countries

}
export const getCountryCases=async(countryName)=>{
    const response=await fetch(`https://covid-19-data.p.rapidapi.com/country?name=${countryName}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "89121e0ddfmshb3a051877090596p190ae3jsn1b448db10e6c",
            "x-rapidapi-host": "covid-19-data.p.rapidapi.com"
        }
    })
    
    const data=await response.json()
    // console.log(data[0])
    return data[0]

}

export const getCountryPopulation=async(countryName)=>{
    const response=await fetch(`https://world-population.p.rapidapi.com/population?country_name=${countryName}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "89121e0ddfmshb3a051877090596p190ae3jsn1b448db10e6c",
            "x-rapidapi-host": "world-population.p.rapidapi.com"
        }
    })
    
    const {body}=await response.json()
    console.log(body)
    return body

}