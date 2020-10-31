//My api key
var apikey = {
    key: 'Cole aqui sua API KEY ;)'
}

//GET Fetch Requisition
fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=' +
    apikey.key)
    .then((response) => {
        if(!response.ok) throw new Error('Erro ao executar a requisição, status ' + response.status);
        return response.json();
})
.then((api) => {
    
    var texto = "";
    // Get 10 coins and symbols 
    for(let i = 0; i < 10; i++){

    //Show API information  
    let d = new Date(`${api.data[i].first_historical_data}`);
         
    texto = texto + `
        <tbody>    
            <th scope="row">${api.data[i].id}</th>
            <td><img src="coin.jpg" class="align-self-center" alt="coin" width="50"></td>
            <td>${api.data[i].name}</td>
            <td>${api.data[i].symbol}</td>
            <td>${d.toLocaleString()}</td>
        </tbody>        
    `
        document.getElementById("coins").innerHTML = texto;                
    }
})
.catch((error) => {
    console.error(error.message);
});