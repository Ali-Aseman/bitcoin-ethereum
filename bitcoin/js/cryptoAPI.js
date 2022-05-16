class CryptoAPI{

    constructor(){
        this.apiKey = '112f189ffe9e2f216e6453be5727b991'
    }

    // query the api
    async queryAPI(currency,cryptocurrency){
        // building url
        let url = `https://api.nomics.com/v1/currencies/ticker?key=${this.apiKey}&ids=${cryptocurrency}&interval=1h,1d,7d,30d&convert=${currency}`

        // fetch url
        const response = await fetch(url)
        // return json
        const resultApi = await response.json()
        // return object
        return {
            resultApi
        }

    }
}