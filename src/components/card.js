

function Card(props) {
    return (
        <div className="card card-pais">
            <img src="..." className="card-img-top" alt="..."/>
            <div className="card-body">
                <h3 className="card-title">{props.country.Country}</h3>         
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item"><b>CountryCode:</b> {props.country.Country}</li>
                <li className="list-group-item"><b>Slug:</b> {props.country.Slug}</li>
                <li className="list-group-item"><b>NewConfirmed:</b> {props.country.NewConfirmed}</li>
                <li className="list-group-item"><b>TotalConfirmed:</b> {props.country.TotalConfirmed}</li>
                <li className="list-group-item"><b>NewDeaths:</b> {props.country.NewDeaths}</li>
                <li className="list-group-item"><b>TotalDeaths:</b> {props.country.TotalDeaths}</li>
                <li className="list-group-item"><b>NewRecovered:</b> {props.country.NewRecovered}</li>
                <li className="list-group-item"><b>TotalRecovered:</b> {props.country.TotalRecovered}</li>
                <li className="list-group-item"><b>Última Atualização:</b> {props.country.Date}</li>
            </ul>
        </div>
    );
  }
  
  export default Card;