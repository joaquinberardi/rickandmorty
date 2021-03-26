import UserCard from './components/UserCard'
import database from './rickandmorty.json'

function App() {
  return (
    <div className="App">

      {/*<!-- HEADER -->*/}
      <div class="header header-fixed unselectable header-animated">
        <div class="header-brand">
          <div class="nav-item no-hover">
            <h6 class="title">RICK AND MORTY</h6>
          </div>
          <div class="nav-item nav-btn" id="header-btn"> <span></span> <span></span> <span></span> </div>
        </div>
        <div class="header-nav" id="header-menu">
          <div class="nav-left">
            <div class="nav-item text-center">  <img src="https://img.icons8.com/color/48/000000/rick-sanchez.png"/> </div>
          </div>
        </div>
      </div>
    
      {/*<!-- BODY -->*/}
      <section class="section" style={{'background-color': '#FBF8F3;'}}>
        <div class="hero">
          <div class="hero-body">
            <div class="content">

              <h1> Listado de personajes:</h1>


              {/*<!-- Contenedor de tarjetas -->*/}
              <div class="grid grid-cols-3 grid-gap-3">
              {console.log(database)}
              {
                    database.map(function(specs, idx) {
                        return < UserCard specs={specs} key={idx}/>
                    })
                }


              </div>
            </div>
          </div>
        </div>
      </section>
      
      <div class="footer">
          <h6 class="footer__title white uppercase">Joaquin Berardi</h6>
          <h6 class="footer__title white uppercase">26/3/2021</h6>
        <div class="content"></div>

    </div>
    </div>
  );
}

export default App;
