import axios from 'axios';

export default async function handler(req, res) {

    const lat = req.query.lat;
    const long = req.query.long;
    const radiusInMiles = 5;
    const radiusInMeters = radiusInMiles * 1609;

    const query = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=seafood&type=restaurant&location=${lat}%2C${long}&radius=${radiusInMeters}&key=${process.env.GATSBY_GOOGLE_API}`;
    
    try {
        axios.get(query)
            .then(function (response) {
                // handle success
                res.status(200).json({results: response.data.results});
            })
            .catch(function (error) {
                // handle error
                res.status(500).json({ error: JSON.stringify(error) });
            })
            .finally(function () {
                // always executed
            });
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: JSON.stringify(error) });
    } 
}