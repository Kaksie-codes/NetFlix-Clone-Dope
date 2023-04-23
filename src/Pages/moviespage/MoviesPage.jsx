import React from 'react';
import Logo from '../../components/Logo';
import Avatar from '../../assets/Netflix-avatar.png'
import './moviespage.css';

const MoviesPage = () => {
  return (
    <div>
        <div className="nav">
            <div className="nav__container container">
                <Logo/>
                
                <div className="avatar">
                <img src={Avatar} alt="avatar" />
              </div>
            </div>
        </div>
    </div>
  )
}

export default MoviesPage