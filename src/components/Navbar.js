//==========Archivos exportados(Dependencias y demas)==========//
import React from 'react';
import '../assets/css/Navbar.css'; //Importar estilos para la etiqueta (nav)
const Navbar = () => { //nombre de la etiqueta creada
    return (
        <nav className='navbar bg-black text-light mb-5'>
            <div className='container-fluid'>
                <h2 className="mx-auto">CLIMATE BY FELIPE</h2>
            </div>
        </nav>
    );
};
export default Navbar; //Importar etiqueta creada
