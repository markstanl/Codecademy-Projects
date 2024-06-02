const apiKey = '0t1-zeOa1rRqZ8-L9TlFnno48kXeKu3M-DkekVQb0aO-3gH63H9sNLs-53OMBglC7-wWTw4lrdUNtTMfBbakJzkiIO3-4wf7T-5qnxbArulAgNfJj4P2x6xvR5pcZnYx'
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
