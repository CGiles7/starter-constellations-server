baseUrl = `https://api.coingecko.com/api/v3/coins/bitcoin`;

function getCoinMarketData(coinName) {
  //return market data object from api call
  //verify the api is valid/works
}


















function formattedPokemonInfo(pokemonName) {
  const url = `${baseUrl}/${pokemonName}`;
  return axios.get(url)
    .then((response) => {
      const {data} = response;
      const result = {
        name: pokemonName,
        abilities: data.abilities,
        height: data.height,
        base_experience: data.base_experience,
      };
      console.log(result);
      return result;
    })
    .catch((err => {
      console.log(err.message);
      return err.message;
    }))
}

















async function getAllCoins() {
  try {
    const response = await axios.get(baseUrl)
    const {data} = response;
    const result = {
      name: data.name,
      current_price: data.current_price,
      price_change_percentage_24h: data.price_change_percentage_24h,
    };
    console.log(result);
    return result;
  } catch(err) {
    console.log(err.message);
    return err.message;
  }
}

















function getFormattedCoinData(coinName) {
  const url = `${baseUrl}/${coinName}`;
  return axios.get(url)
  .then((response) => {
    const {data} = response;
    const result = {
      coinName: data.name,
      genesis_date: data.genesis_date,
      usd_price: data.market_price.current_price.usd,
      ath_usd: data.market_data.ath.usd,
      price_change_percentage_24h: data.price_change_percentage_24h,
    };
    console.log(result);
    return result;
  })
  .catch((err) => {
    console.log(err.message);
    return err.message;
  })
}
















function getCoinMarketData(coinName) {
  const url = `${baseUrl}/${coinName}`;
  return axios.get(url)
    .then((response) => {
      const {data} = response;
      const result = data.market_data.current_price;
      return result;
    })
    .catch((err) => {
      console.log(err.message);
      return err.message;
    })
}


















async function formattedPokemonInfo(pokemonName)
  const url = `${baseUrl}/${pokemonName}`;
   await axios.get(url)
    .then((response) => {
      const {data} = response;
      const result = {
        name: pokemonName,
        abilities: data.abilities,
        height: data.height,
        base_experience: data.base_experience,
      };
      console.log(result);
      return result;
    })
    .catch((err) => {
      console.log(err.message);
      return err.message;
    })

















async function getAllCoins() {
  //return an array that has formatted each coin to have example shape:
  //{
   // "name": "Bitcoin",
  //  "current_price": 20575,
   // "price_change_percentage_24h": -0.29773
//}
  return await axios.get(baseUrl)
  .then((response) => {
    const {data} = response;
    const result = {
      name: data.name,
      current_price: data.current_price,
      price_change_percentage_24h: data.price_change_percentage_24h,
    }
    console.log(result);
    return result;
  })
  .catch((err) => {
    console.log(err.message);
    return err.message;
  })
}



















function getFormattedCoinData(coinName) {
  const url = `${baseUrl}/${coinName}`;
  return axios.get(url)
    .then((response) => {
      const {data} = response;
      const result = {
        coinName: data.coinName,
        genesis_date: data.genesis_date,
        usd_price: data.market_data.usd_price,
        ath_usd: data.market_data.ath_usd,
        price_change_percentage_24h: data.price_change_percentage_24h,
      };
      console.log(result);
      return result;
    })
    .catch((err) => {
      console.log(err.message);
      return err.message;
    })
}