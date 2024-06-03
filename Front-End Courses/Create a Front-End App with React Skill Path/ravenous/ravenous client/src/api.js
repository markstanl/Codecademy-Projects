const apiKey = 'api_key_here'
const yelpBaseURL = 'http://localhost:3001/api/'


const fetchBusinesses = async (searchTerms, location, sortBy) => {
    try {
        const fetchURL = `${yelpBaseURL}businesses/search?term=${searchTerms}&location=${location}&sort_by=${sortBy}`
        console.log(fetchURL)
        const response = await fetch(fetchURL,
            {
                headers: {
                    Authorization: `Bearer ${apiKey}`
                }
            })
        if (response.ok) {
            const jsonResponse = await response.json()
            console.log(jsonResponse.businesses[0].categories)
            return jsonResponse.businesses
        }
    } catch (error) {
        console.log(error)
    }
}

console.log( fetchBusinesses('pizza', 'New York', 'best_match'))

module.exports = { fetchBusinesses }
