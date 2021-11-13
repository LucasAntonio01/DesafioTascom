import './Teste.css';
import React from 'react';
import Card from './card';

class Teste extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      response: {}
    };

  }

  componentDidMount() {
    fetch("https://api.covid19api.com/summary")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
          this.setState({
            isLoaded: true,
            response: result
          });
        },
        // Nota: É importante lidar com os erros aqui
        // em vez de um bloco catch() para não recebermos
        // exceções de erros dos componentes.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  sear

  render() {
    const { error, isLoaded, response } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div> 
          <nav className="navbar navbar-light bg-light">
              <div className="container-fluid">
                <a className="navbar-brand tascom-icon d-flex"> <img src="http://www.tascominformatica.com.br/img/logo_tascom.png" alt="" width="200" height="50" class="d-inline-block align-text-top"/>
                <h3>Desafio Tascom</h3> </a>
              
              </div>
            </nav>
          
          <div class="container-fluid">
            <div class="row-12">
        

            <div className="card card-pais">
              <img src="..." className="card-img-top" alt="..."/>
              <div className="card-body">
                  <h3 className="card-title">Casos no mundo</h3>         
              </div>
              <ul className="list-group list-group-flush">
                  <li className="list-group-item"><b>NewConfirmed:</b> {response.Global.NewConfirmed}</li>
                  <li className="list-group-item"><b>TotalConfirmed:</b> {response.Global.TotalConfirmed}</li>
                  <li className="list-group-item"><b>NewDeaths:</b> {response.Global.NewDeaths}</li>
                  <li className="list-group-item"><b>TotalDeaths:</b> {response.Global.TotalDeaths}</li>
                  <li className="list-group-item"><b>NewRecovered:</b> {response.Global.NewRecovered}</li>
                  <li className="list-group-item"><b>TotalRecovered:</b> {response.Global.TotalRecovered}</li>
                  <li className="list-group-item"><b>Última Atualização:</b> {response.Global.Date}</li>
              </ul>
           </div>

            </div>
            <div class="row"> 
              {response.Countries.slice(0, 10).map(country => (
                <div class="col-xxl-3">
                  <Card country={country} ></Card>
                </div>
              ))}'
          </div>
          </div>
        </div>

      );
    }
  }
}


export default Teste;
