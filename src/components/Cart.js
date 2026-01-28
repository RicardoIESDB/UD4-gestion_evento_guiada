import React from 'react';
export default function Cart({ items = [] }) {
    const total = items.length;
    return (
        <div className="cart d-flex align-items-center">
            <span className="me-2">🛒</span>
            <span>
                Carrito ({total} {total === 1 ? 'producto' : 'productos'})
            </span>
        </div>
    );
}