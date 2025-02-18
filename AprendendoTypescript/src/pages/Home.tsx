import { Link } from "react-router-dom";
import './Home.css';

function Home() {
  return (

    <>
      <div>
        <span className="link-perfil">
          <Link to="./perfil">Ir para o seu perfil</Link>
        </span>
      </div>

    </>
  )
}

export default Home;