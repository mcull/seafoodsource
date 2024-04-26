export default async function handler(req, res) {
    try {
        
        const response = await fetch(
                                `https://gateway.api.globalfishingwatch.org/v3/vessels/search?query=7831410&datasets[0]=public-global-vessel-identity:latest`, {
                                headers: {
                                    "Authorization": `Bearer ${process.env.GATSBY_GLOBAL_FISHING_WATCH_API_KEY}`
                                },
        });
        const data = await response.json();
        console.log(data);
        res.status(200).json({message: data});        
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: JSON.stringify(err) });
    } 
}