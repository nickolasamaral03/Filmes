import {Link, useNavigate} from 'react-router-dom'
import {BiCameraMovie, BiSearchAlt2} from 'react-icons/bi';
import { useState } from 'react';

import "./Navbar.css";

const Navbar = () => {

  const [search, setSearch] = useState('')
  const navigate = useNavigate();

  const handleSubmit = (e) => {
     e.preventDefault()  //impede que o evento padrão ocorra 
    
    if(!search) return

    navigate(`/search?q=${search}`)  //Consegue fazer rotas na aplicação e leva para os UseParams em Search
    setSearch(''); //Limpa o input
  }


return (
    <nav id="navbar">
        <h2>
           <Link to="/"><BiCameraMovie/>MoviesNi</Link> {/*Leva para a página inicial */}
        </h2>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Busque um filme' onChange={(e) => setSearch (e.target.value)} value={search}/>
            <button type='submit'>
                <BiSearchAlt2/>
            </button>
        </form>
      </nav>
  )
}

export default Navbar