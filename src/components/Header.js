import React from 'react';
export default function Header() {
    return (
        <header className="bg-dark text-white p-3 mb-4">
            <div className="container">
                <h1 className="mb-0">Tienda de Productos Informáticos</h1>
                <nav className="mt-2">
                    <ul className="nav">
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Productos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Contacto</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
} 