import './ActualizarStyle.css';


const ActualizarCarrito = ({ children, isOpen, closeModal, guardarModal}) => {
    const handelModalContainerClick = (e) => e.stopPropagation();

    return (
        <article className={`mymodal ${isOpen && "is-open"}`} onClick={closeModal}>
            <div className="mymodal-container" onClick={handelModalContainerClick}>
                <button className="mymodal-close" onClick={closeModal}>X</button>
                {children}
                <button className="btnActualizar" onClick={guardarModal}>ACTUALIZAR</button>
                <button className="mymodal-close" onClick={closeModal}>Cerrar</button>
            </div>
        </article>
    );
}

export default ActualizarCarrito;
