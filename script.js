const apiKey = "https://restcountries.com/v3.1/name/";
let showDetails = document.getElementById('countryDetails');

async function getCountryDetails (countryName){
    try{
        let respose = await fetch(`https://restcountries.com/v3.1/name/${countryName}`)
        let data = await respose.json();
        let commonName = data[1].name.common ;
        let countryCapital = data[1].capital ;
        let area = data[1].area;
        let population = data[1].population;
        let lattitude = data[1].latlng[0];
        let longitude = data[1].latlng[1];

        let results = 
        `<div>
            <h3 style="text-align:center;"> Entered Country : ${commonName}  </h5><br>
            <h5>Capital of the Country : ${countryCapital}</h5>
            <h5>Area of the Country : ${area} </h5>
            <h5>population of the Country : ${population}</h5>
            <h5>Lattitude : ${lattitude}</h5>
            <h5>longitude : ${longitude}</h5>
        </div>`
        showDetails.innerHTML= results ;
    }
    catch(error) {
        console.error("Error Fetching Data  :",error );
    }
}
let button = document.getElementById('button');
button.addEventListener('click',(e)=>{
    e.preventDefault();
    let countryName = document.getElementById('countryName').value;
    getCountryDetails(countryName);
})
