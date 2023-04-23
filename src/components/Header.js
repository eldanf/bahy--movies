import React from 'react'
import logo from '../images/ana.png'
import { FaSearch } from 'react-icons/fa';
function Header( {search} ) {

  const onSearch = (word)=>{
    search(word)  // from app
  }

  return (
    <div>
          <header className="bg-dark text-white py-3">
            <div className="container">
                <div className="row">
                        <div className="col-2">
                            <a href="/"><img src={logo} className="w-75" alt="" /></a>
                        </div>{/* col-2  */}

                        <div className="col-10">
                            <div className="input-group">
                                <span className="input-group-text" ><FaSearch/></span>
                                <input type="text" onChange={ (e) => onSearch(e.target.value) } className="form-control form-control-lg" placeholder="Movie Name" />
                              </div>
                        </div> {/* col-10  */}
                </div>{/* row */}
            </div>{/* container  */}
    </header>
    </div>
  )
}

export default Header