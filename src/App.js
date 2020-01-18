import React, { useState, useEffect } from "react";

import "./global.css";
import "./App.css";
import "./Sidebar.css";
import "./Main.css";

function App() {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        console.log(position);
        const { latitude, longitude } = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);
      },
      err => {
        console.log(err);
      },
      {
        timeout: 30000
      }
    );
  }, []);

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="github_username" required />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input
                type="number"
                name="latitude"
                id="latitude"
                required
                value={latitude}
                onChange={e => setLatitude(e.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input
                type="number"
                n
                ame="longitude"
                id="longitude"
                required
                value={longitude}
                onChange={e => setLongitude(e.target.value)}
              />
            </div>
          </div>
          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars0.githubusercontent.com/u/26778411?s=460&v=4"
                alt="Gabriel Vicente"
              />
              <div className="user-info">
                <strong>Gabriel Vicente</strong>
                <span>Spring, Reactjs</span>
              </div>
            </header>
            <p>Desenvolvedor</p>
            <a href="https://github.com/gabrielvf64">
              Acessar perfil no Github
            </a>
          </li>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars0.githubusercontent.com/u/26778411?s=460&v=4"
                alt="Gabriel Vicente"
              />
              <div className="user-info">
                <strong>Gabriel Vicente</strong>
                <span>Spring, Reactjs</span>
              </div>
            </header>
            <p>Desenvolvedor</p>
            <a href="https://github.com/gabrielvf64">
              Acessar perfil no Github
            </a>
          </li>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars0.githubusercontent.com/u/26778411?s=460&v=4"
                alt="Gabriel Vicente"
              />
              <div className="user-info">
                <strong>Gabriel Vicente</strong>
                <span>Spring, Reactjs</span>
              </div>
            </header>
            <p>Desenvolvedor</p>
            <a href="https://github.com/gabrielvf64">
              Acessar perfil no Github
            </a>
          </li>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars0.githubusercontent.com/u/26778411?s=460&v=4"
                alt="Gabriel Vicente"
              />
              <div className="user-info">
                <strong>Gabriel Vicente</strong>
                <span>Spring, Reactjs</span>
              </div>
            </header>
            <p>Desenvolvedor</p>
            <a href="https://github.com/gabrielvf64">
              Acessar perfil no Github
            </a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
