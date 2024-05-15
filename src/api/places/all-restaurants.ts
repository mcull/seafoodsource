import axios from 'axios';

export default async function handler(req, res) {

    const lat = req.query.lat;
    const long = req.query.long;
    const radiusInMiles = 5;
    const radiusInMeters = radiusInMiles * 1609;

    const root = "https://maps.googleapis.com/maps/api/place/findplacefromtext/json";
    const baseQuery = "inputtype=textquery&input=seafood%20restaurant";
    const fields = "fields=formatted_address%2Cname%2Crating%2Copening_hours%2Cgeometry";
    const range = `locationbias=circle%3A${radiusInMeters}%40${lat}%2C${long}`
    const auth = `key=${process.env.GATSBY_GOOGLE_API}`;
    
    try {
        console.log(`${root}?${baseQuery}&${fields}&${range}&${auth}`);
        axios.get(`${root}?${baseQuery}&${fields}&${range}&${auth}`)
            .then(function (response) {
                // handle success
                res.status(200).json({message: response});
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