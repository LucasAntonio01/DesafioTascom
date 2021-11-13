import './App.css';
import React from 'react';
import Card from './components/card';

class App extends React.Component {
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
        <div className="App"> 
          <nav className="navbar navbar-light bg-light">
              <div className="container-fluid">
                <a className="navbar-brand tascom-icon d-flex justify-content-between w-100"> 
                <h3>Desafio Tascom</h3>
                <img src="http://www.tascominformatica.com.br/img/logo_tascom.png" alt="" width="200" height="50" class="d-inline-block align-text-top"/>
                </a>
              
              </div>
            </nav>
          
          <div class="container-fluid">
            <div class="row-12">
        

            <div className="card card-pais">
              <div className="country-img-wrapper mt-3">
                <img src="https://www.infoescola.com/wp-content/uploads/2017/11/rotacao-da-terra.gif" className="card-img-top" alt="..."/>
              </div>
              <div className="card-body">
                  <h3 className="card-title">Casos no mundo</h3>         
              </div>
              <ul className="list-group list-group-flush">
                  <li className="list-group-item"><b>Novos casos confirmados:</b> {response.Global.NewConfirmed}</li>
                  <li className="list-group-item"><b>Total de casos confirmados:</b> {response.Global.TotalConfirmed}</li>
                  <li className="list-group-item"><b>Novas mortes:</b> {response.Global.NewDeaths}</li>
                  <li className="list-group-item"><b>Total de mortes:</b> {response.Global.TotalDeaths}</li>
                  <li className="list-group-item"><b>Novos curados:</b> {response.Global.NewRecovered}</li>
                  <li className="list-group-item"><b>Total de curados:</b> {response.Global.TotalRecovered}</li>
              </ul>
           </div>

            </div>
            <div class="row"> 
              {response.Countries.slice(0, 10).map(country => (
                <div class="col-xl-3 col-lg-4 col-md-6">
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


export default App;
