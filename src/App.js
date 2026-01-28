import React, { useState } from "react";

function App() {
    // Estado para inputs controlados
    const [texto, setTexto] = useState('');
    const [email, setEmail] = useState('');
    const [contadorClick, setContadorClick] = useState(0);
    const [hover, setHover] = useState(false);
    const [posicion, setPosicion] = useState({ x: 0, y: 0 });
    const [tecla, setTecla] = useState('');
    const [wheelDelta, setWheelDelta] = useState(0);
    const [touch, setTouch] = useState({ x: null, y: null });
    // Clicks, doble clic, menú contextual
    const manejarClick = () => {
        setContadorClick(c => c + 1);
    };
    const manejarDobleClick = () => {
        alert('Doble clic detectado');
    };
    const manejarContextMenu = (e) => {
        e.preventDefault();
        alert('Menú contextual bloqueado');
    };
    // Change, Input (controlados)
    const manejarCambioTexto = (e) => {
        setTexto(e.target.value);
    };
    const manejarInputEmail = (e) => {
        setEmail(e.target.value);
    };
    // Focus / Blur
    const manejarFocus = () => {
        console.log('Input obtuvo foco');
    };
    const manejarBlur = () => {
        console.log('Input perdió el foco');
    };
    // Keyboard
    const manejarKeyDown = (e) => {
        setTecla(`KeyDown: ${e.key}`);
        if (e.key === 'Enter') {
            e.preventDefault();
            alert('Enter presionado');
        }
    };
    const manejarKeyUp = (e) => {
        setTecla(`KeyUp: ${e.key}`);
    };
    // Mouse
    const manejarMouseEnter = () => setHover(true);
    const manejarMouseLeave = () => setHover(false);
    const manejarMouseMove = (e) => {
        setPosicion({
            x: e.nativeEvent.offsetX, y:
                e.nativeEvent.offsetY
        });
    };
    // Wheel (scroll con rueda)
    const manejarWheel = (e) => {
        setWheelDelta(e.deltaY);
    };
    // Touch (móvil)
    const manejarTouchStart = (e) => {
        const t = e.touches[0];
        setTouch({ x: t.clientX, y: t.clientY });
    };
    const manejarTouchMove = (e) => {
        const t = e.touches[0];
        setTouch({ x: t.clientX, y: t.clientY });
    };
    const manejarTouchEnd = () => {
        setTouch({ x: null, y: null });
    };
    // Submit formulario
    const manejarSubmit = (e) => {
        e.preventDefault();
        if (!email.trim()) {
            alert('El email es obligatorio');
            return;
        }
        alert(`Formulario enviado: texto=\"${texto}\",
email=\"${email}\"`);
    };
    return (
        <div style={{
            fontFamily: 'system-ui, sans-serif', padding: 24,
            lineHeight: 1.5
        }}>
            <h1>Eventos comunes en React</h1>
            {/* Clicks */}
            <section style={{ marginBottom: 24 }}>
                <h2>Clicks</h2>
                <button onClick={manejarClick}
                    onDoubleClick={manejarDobleClick}
                    onContextMenu={manejarContextMenu}>
                    Haz clic / doble clic / botón derecho
                </button>
                <p>Has hecho clic <strong>{contadorClick}</strong>
                    veces.</p>
            </section>
            {/* Formularios: change, input, submit, focus, blur */}
            <section style={{ marginBottom: 24 }}>
                <h2>Formularios</h2>
                <form onSubmit={manejarSubmit}>
                    <div style={{ marginBottom: 12 }}>
                        <label>
                            Texto (onChange):
                            <input
                                type="text"
                                value={texto}
                                onChange={manejarCambioTexto}
                                onFocus={manejarFocus}
                                onBlur={manejarBlur}
                                placeholder="Escribe algo"
                                style={{ marginLeft: 8 }}
                            />
                        </label>
                    </div>
                    <div style={{ marginBottom: 12 }}>
                        <label>
                            Email (onInput):
                            <input
                                type="email"
                                value={email}
                                onInput={manejarInputEmail}
                                placeholder="tu@correo.com"
                                style={{ marginLeft: 8 }}
                            />
                        </label>
                    </div>
                    <button type="submit">Enviar</button>
                </form>
            </section>
            {/* Teclado */}
            <section style={{ marginBottom: 24 }}>
                <h2>Teclado</h2>
                <input
                    type="text"
                    onKeyDown={manejarKeyDown}
                    onKeyUp={manejarKeyUp}
                    placeholder="Pulsa alguna tecla"
                />
                <p>{tecla}</p>
            </section>
            {/* Ratón */}
            <section style={{ marginBottom: 24 }}>
                <h2>Ratón</h2>
                <div
                    onMouseEnter={manejarMouseEnter}
                    onMouseLeave={manejarMouseLeave}
                    onMouseMove={manejarMouseMove}
                    style={{
                        width: 300,
                        height: 160,
                        border: '2px dashed #888',
                        borderRadius: 8,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: hover ? '#f0fff4' : '#f9fafb',
                    }}
                >
                    <div>
                        <div>Área interactiva (move/enter/leave)</div>
                        <div style={{
                            fontSize: 12, color: '#555', marginTop: 8
                        }}>
                            Posición: x={posicion.x} y={posicion.y}
                        </div>
                    </div>
                </div>
            </section>
            {/* Wheel */}
            <section style={{ marginBottom: 24 }}>
                <h2>Rueda del ratón (Wheel)</h2>
                <div
                    onWheel={manejarWheel}
                    style={{
                        width: 300, height: 100, overflow: 'auto',
                        border: '1px solid #ccc', padding: 12
                    }}
                >
                    <p>Haz scroll con la rueda del ratón sobre este
                        recuadro.</p>
                    <p style={{ fontSize: 12, color: '#555' }}>deltaY:
                        {wheelDelta}</p>
                    <div style={{ height: 300 }} />
                </div>
            </section>
            {/* Touch */}
            <section style={{ marginBottom: 24 }}>
                <h2>Eventos táctiles (Touch)</h2>
                <div
                    onTouchStart={manejarTouchStart}
                    onTouchMove={manejarTouchMove}
                    onTouchEnd={manejarTouchEnd}
                    style={{
                        width: 300,
                        height: 120,
                        border: '2px solid #888',
                        borderRadius: 8,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: '#fffef0',
                    }}
                >
                    {touch.x === null ? (
                        <span>Toca y arrastra en un dispositivo táctil</span>
                    ) : (
                        <span>Touch: x={touch.x} y={touch.y}</span>
                    )}
                </div>
            </section>
            <footer style={{
                marginTop: 32, fontSize: 12, color: '#666'
            }}>
                <p>
                    Nota: estos son los eventos más comunes. React también
                    soporta eventos para formularios avanzados, portales, y más.
                    Consulta la documentación oficial para detalles completos.
                </p>
            </footer>
        </div>
    );
}
export default App;