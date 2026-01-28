import React, { useState } from "react";
// Componentes 
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";
import SearchBar from "./components/SearchBar";
import Cart from "./components/Cart";
// Datos 
import { catalog } from "./data/catalog";
export default function App() {
    // Estado de búsqueda 
    const [query, setQuery] = useState("");
    // Estado del carrito 
    const [cartItems, setCartItems] = useState([]);
    // Añadir producto al carrito 
    const addToCart = (product) => {
        setCartItems([...cartItems, product]);
    };
    // Filtrado en tiempo real 
    const filteredProducts = catalog.filter((p) => {
        const text = query.toLowerCase();
        return (
            p.nombre.toLowerCase().includes(text) ||
            p.id.toLowerCase().includes(text) ||
            String(p.precio).includes(text)
        );
    });
    return (
        <>
            {/* Cabecera */}
            <Header />
            {/* Carrito */}
            <div className="container mt-3">
                <Cart items={cartItems} />
            </div>
            {/* Barra de búsqueda */}
            <SearchBar
                query={query}
                onChange={setQuery}
                onClear={() => setQuery("")}
            />
            {/* Listado filtrado + botón Añadir */}
            <ProductList
                products={filteredProducts}
                onAdd={addToCart}
            />
            {/* Pie de página */}
            <Footer />
        </>
    );
} 