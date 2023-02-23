import "./App.css";
import Hero from "./img/pexels-pixabay-210243.jpg";
import Logo from "./img/zyro-image.png";
import Destino1 from "./img/maldives.jpg";
import Destino2 from "./img/paris.jpg";
import Destino3 from "./img/nightchina.jpg";
import Parque1 from "./img/disney.jpg";
import Parque2 from "./img/universal.jpg";
import Parque3 from "./img/Betocarreiro.jpg";
import cliente1 from "./img/turista1.jpg";
import cliente2 from "./img/turista2.jpg";
import cliente3 from "./img/turista3.jpg";

export default function App(): JSX.Element {
  return (
    <div>
      <img src={Hero} />
      <header>
        <img src={Logo} />
        <nav>
          <ul>
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
        <button>Registre-se</button>
      </header>
      <main>
        <section>
          <h1>Descubra e aproveite de novos lugares e experiências</h1>
          <h3>
            Pensa em fazer uma pausa na vida diária ? Não se preocupe, nós
            cuidamos de sua viagem.
          </h3>
          {/* criar card destinos, voos, cruzeiros */}
        </section>
        <section>
          <ul>
            <li>
              <img src={Destino1} alt="Destino 1" />
              <a href="#">Saiba mais</a>
            </li>
            <li>
              <img src={Destino2} alt="Destino 2" />
              <a href="#">Saiba mais</a>
            </li>
            <li>
              <img src={Destino3} alt="Destino 3" />
              <a href="#">Saiba mais</a>
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
              <img src="https://via.placeholder.com/200x200" alt="mapa" />
              <h3>Muitas escolhas</h3>
              <p>
                Há muitas opções de lugares interessantes para fazer uma
                história em sua jornada.
              </p>
            </li>
            <li>
              <img src="https://via.placeholder.com/200x200" alt="carteira" />
              <h3>Reserva fácil</h3>
              <p>
                Faremos seu pedido o mais rápido possível e nada pode superá-lo.
              </p>
            </li>
            <li>
              <img
                src="https://via.placeholder.com/200x200"
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
          <h1>Categorias populares para você</h1>
          <li>
            <h3>Parques</h3>
            <h3>Praias</h3>
            <h3>Monumentos</h3>
          </li>
          <ul>
            <li>
              <img src={Parque1} />
              <p>Disney Orlando - Florida</p>
              <button>Ver pacotes</button>
            </li>
            <li>
              <img src={Parque2} />
              <p>Universal Orlando - Florida</p>
              <button>Ver pacotes</button>
            </li>
            <li>
              <img src={Parque3} />
              <p>Beto Carreiro Penha - Santa Catarina</p>
              <button>Ver pacotes</button>
            </li>
          </ul>
        </section>
        <section>
          <h3>Veja o que nossos cliente dizem sobre nossos serviços</h3>
          <div>
            <img src={cliente1} />
            <h4>Felipe H.</h4>
            <p>Viagem ao Caribe incrivel, voltarei!</p>
          </div>
          <div>
            <img src={cliente2} />
            <h4>Jessica Thais</h4>
            <p>
              Amei Roma! Foi uma experiência única, agradeço à agência por
              tornar isso possível.
            </p>
          </div>
          <div>
            <img src={cliente3} />
            <h4>Rafael G.</h4>
            <p>
              Minha lua de mel nas Maldivas foi perfeita graças à agência de
              viagens!
            </p>
          </div>
        </section>
        <footer>
          {/* falta criar o footer */}
        </footer>
      </main>
    </div>
  );
}
