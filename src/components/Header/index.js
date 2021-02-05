import './styles.css';

import bookImg from '../../assets/images/header.png';

function Header(){
    return(
        <header className="logo-container">
            <div id="page-content" className="container">
                <div className="logo-container">
                    <h1>Library</h1>
                    <h2>Encontre o livro que você precisa !!</h2>
                </div>

                <img 
                    src={bookImg}
                    alt="Encontre livros" 
                    className="image"
                />
            </div>
        </header>
    )
}

export default Header;