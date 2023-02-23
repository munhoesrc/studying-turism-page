import "./App.css";
import Hero from "./img/pexels-pixabay-210243.jpg";
import Logo from "./img/travellogoblue.png";
import Destino1 from "./img/maldives.jpg";
import Destino2 from "./img/paris.jpg";
import Destino3 from "./img/nightchina.jpg";
import Parque1 from "./img/disney.jpg";
import Parque2 from "./img/universal.jpg";
import Parque3 from "./img/Betocarreiro.jpg";
import cliente1 from "./img/turista1.jpg";
import cliente2 from "./img/turista2.jpg";
import cliente3 from "./img/turista3.jpg";
import Master from "./img/logo-mastercard.png";
import Visa from "./img/bandeira-visa.png";
import Elo from "./img/bandeira-elo.png";
import Hiper from "./img/bandeira-hipercard.png";
import AppStore from "./img/AppStore.png";

export default function App(): JSX.Element {
  return (
    <div>
      <img className="img-hero" src={Hero} />
      <header>
        <img src={Logo} />
        <nav>
          <ul className="nav-header">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Destinos</a>
            </li>
            <li>
              <a href="#">Depoimentos</a>
            </li>
          </ul>
        </nav>
        <button className="btn-header">Registre-se</button>
      </header>
      <main>
        <section className="section-hero">
          <h1>Descubra e aproveite de novos lugares e experiências</h1>
          <h3 className="text-hero">
            Pensa em fazer uma pausa na vida diária ? Não se preocupe, nós
            cuidamos de sua viagem.
          </h3>
          <section>
            <div>
              <ul>Destinos</ul>
              <ul>Voos</ul>
              <ul>Cruzeiros</ul>
            </div>
            <div>
              <ul>LOCALIZAÇÃO</ul>
              <span>Alemanha</span>
              <ul>PASSAGEIROS</ul>
              <span>02 Adultos</span>
              <ul>CHECK-IN</ul>
              <span>01 Dez 2023</span>
              <ul>CHECK-OUT</ul>
              <span>05 Dez 2023</span>
            </div>
            <button>Buscar</button>
          </section>
        </section>
        <section>
          <ul>
            <li>
              <img className="destino1" src={Destino1} alt="Destino 1" />
            </li>
            <li>
              <img className="destino2" src={Destino2} alt="Destino 2" />
            </li>
            <li>
              <img className="destino3" src={Destino3} alt="Destino 3" />
            </li>
          </ul>
        </section>
        <section>
          <h2>Escolha os melhores destinos na melhor agência</h2>
          <h3>
            Descubra os melhores destinos do mundo com a nossa agência de
            viagens! De praias paradisíacas a cidades vibrantes, temos opções
            para todos os gostos. Reserve agora e comece a sua aventura!
          </h3>
          <ul>
            <li>
              <img src="https://via.placeholder.com/80x80" alt="mapa" />
              <h3>Muitas escolhas</h3>
              <p>
                Há muitas opções de lugares interessantes para fazer uma
                história em sua jornada.
              </p>
            </li>
            <li>
              <img src="https://via.placeholder.com/80x80" alt="carteira" />
              <h3>Reserva fácil</h3>
              <p>
                Faremos seu pedido o mais rápido possível e nada pode superá-lo.
              </p>
            </li>
            <li>
              <img
                src="https://via.placeholder.com/80x80"
                alt="local ususario"
              />
              <h3>Melhor guia turístico</h3>
              <p>
                Temos uma equipe de guias que podem satisfazê-lo para explorar a
                beleza deste mundo.
              </p>
            </li>
            <li>
              <img src="https://via.placeholder.com/200x200" alt="acomodação" />
              <h3>Acomodação</h3>
              <p>
                Há muitas opções de lugares interessantes para fazer uma
                história em sua jornada.
              </p>
            </li>
          </ul>
        </section>
        <section>
          <h1 className="title-populares">Categorias populares para você</h1>
          <ul className="nav-populares">
            <h3>Parques</h3>
            <h3>Praias</h3>
            <h3>Monumentos</h3>
          </ul>
          <ul>
            <li>
              <p>Disney Orlando - Florida</p>
              <img className="img-parq1" src={Parque1} />
              <button>Ver pacotes</button>
            </li>
            <li>
              <p>Universal Orlando - Florida</p>
              <img className="img-parq2" src={Parque2} />
              <button>Ver pacotes</button>
            </li>
            <li>
              <p>Beto Carreiro Penha - Santa Catarina</p>
              <img className="img-parq3" src={Parque3} />
              <button>Ver pacotes</button>
            </li>
          </ul>
        </section>
        <section>
          <h3 className="title-avaliacao">
            Veja o que nossos cliente dizem sobre nossos serviços
          </h3>
          <div className="client-1">
            <img className="img-cli-one" src={cliente1} />
            <h4>Felipe H.</h4>
            <p>Viagem ao Caribe incrivel, voltarei!</p>
          </div>
          <div className="client-2">
            <img className="img-cli-two" src={cliente2} />
            <h4>Jessica Thais</h4>
            <p>
              Amei Roma! Foi uma experiência única, agradeço à agência por
              tornar isso possível.
            </p>
          </div>
          <div className="client-3">
            <img className="img-cli-three" src={cliente3} />
            <h4>Rafael G.</h4>
            <p>
              Minha lua de mel nas Maldivas foi perfeita graças à agência de
              viagens!
            </p>
          </div>
        </section>
        <footer>
          <div>
            <h3>Formas de pagamento</h3>
            <img src={Master} />
            <img src={Visa} />
            <img src={Elo} />
            <img src={Hiper} />
          </div>
          <div>
            <h3>Baixe nosso aplicativo</h3>
            <img src={AppStore} />
          </div>
          <div>
            <h3>Televendas</h3>
            <p>(11)3003-9282</p>
            <p>Segunda a Sábado: 09h às 21h</p>
            <p>Domingo: 10h às 16h</p>
            <p>Feriados Nacionais: 09h às 18h</p>
          </div>
          <div>
            <h3>Siga ofertas nas redes</h3>
            {/* icones redes sociais */}
          </div>
        </footer>
      </main>
    </div>
  );
}
