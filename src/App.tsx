import "./App.css";
import Hero from "./img/pexels-pixabay-210243.jpg";
import Logo from "./img/zyro-image.png";
import Destino1 from "./img/maldives.jpg";
import Destino2 from "./img/paris.jpg";
import Destino3 from "./img/nightchina.jpg";

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
          <h2>Contato</h2>
          <form>
            <div>
              <label htmlFor="name">Nome:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div>
              <label htmlFor="email">E-mail:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div>
              <label htmlFor="message">Mensagem:</label>
              <textarea id="message" name="message" required></textarea>
            </div>
            <button type="submit">Enviar</button>
          </form>
        </section>
      </main>
    </div>
  );
}
