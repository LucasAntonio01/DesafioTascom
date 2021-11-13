

function Card(props) {
    const countrySrcImg = `https://flagicons.lipis.dev/flags/4x3/${props.country.CountryCode.toLowerCase()}.svg`
    return (
        <div className="card card-pais">
            <div className="country-img-wrapper mt-3">
                <img src={countrySrcImg} className="card-img-top" alt={props.country.Country}/>
            </div>
            <div className="card-body">
                <h3 className="card-title">{props.country.Country}</h3>         
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item"><b>País:</b> {props.country.Country}</li>
                <li className="list-group-item"><b>Novos casos confirmados:</b> {props.country.NewConfirmed}</li>
                <li className="list-group-item"><b>Total de casos Confirmados:</b> {props.country.TotalConfirmed}</li>
                <li className="list-group-item"><b>Novas mortes:</b> {props.country.NewDeaths}</li>
                <li className="list-group-item"><b>Total de mortes:</b> {props.country.TotalDeaths}</li>
                <li className="list-group-item"><b>Novos curados:</b> {props.country.NewRecovered}</li>
                <li className="list-group-item"><b>Total de curados:</b> {props.country.TotalRecovered}</li>
            </ul>
        </div>
    );
  }
  
  export default Card;