const cryptoUrl = 'https://api.coingecko.com/api/v3/coins';
const box = document.body;

const obtenerCrypyo = async(id) => {
    const resp = await fetch(`${cryptoUrl}/${id}`);
    const data = await resp.json();
    console.log(data.id,data.symbol,data.market_data.current_price.ars,data.market_data.current_price.usd);
    showHtml(data);
    return data;
}

const showHtml = (data) => {
    box.innerHTML=
        `
        Criptomoneda: ${data.id}<br/>
        Simbolo: ${data.symbol}<br/>
        Precio en crocantes: ${data.market_data.current_price.ars}<br/>
        Precio en pesos argentinos: ${data.market_data.current_price.usd}<br/>
        `
}

export {
    obtenerCrypyo
}