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
                <a className="navbar-brand">Navbar</a>
                <form className="d-flex">

                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                  <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
              </div>
            </nav>
          <div class="container-fluid">
            <div class="row"> 
              {response.Countries.map(country => (
                <div class="col-2">
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
