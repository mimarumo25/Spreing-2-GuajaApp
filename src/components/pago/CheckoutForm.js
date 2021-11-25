
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import axios from 'axios';

import { useContext, useState } from 'react'
import { ProductosContext } from '../../routes/AppRouter';
import { DivCarrito, TotalPago, H5, ImagenCarrito, Moneda, PrecioCarrito, SmallCantidad } from '../Carrito/CarritoStyle';

export default function CheckoutForm() {
    //Hooks
    const stripe = useStripe();
    const element = useElements();
    const [loading, setLoading] = useState(false)

    const { productosCarrito } = useContext(ProductosContext);

    let total = 0;
    let subtotal = 0;
    productosCarrito.forEach(p => {
        subtotal = p.precio * p.cantidad
        total += subtotal
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: element.getElement(CardElement)
        })
        const { id } = paymentMethod
        if (!error) {
            try {
                const { data } = await axios.post('http://localhost:3001/api/checkout', {
                    id,
                    amount: total,
                });
                setLoading(true)
                console.log(data);

                element.getElement(CardElement).clear();
            } catch (error) {
                console.log(error);
            }
        }
        else {
            console.log(error);
        }
        setLoading(false)
    };

    return (

        <form onSubmit={handleSubmit} className="container">
            <div className="card-body">
                <div className="form-group">
                    {
                        productosCarrito.map((p, i) => (
                            <div key={i}>
                                <DivCarrito className="carritoProducto" >
                                    <ImagenCarrito src={p.imagen} alt={"Producto: " + p.categoria + " " + p.nombre} />
                                    <div>
                                        <H5>{p.nombre}</H5>
                                        <SmallCantidad>x {p.cantidad}</SmallCantidad>
                                    </div>
                                    <PrecioCarrito>{subtotal = p.precio * p.cantidad} {p.moneda}</PrecioCarrito>
                                </DivCarrito>
                            </div>
                        ))
                    }
                    <TotalPago>
                        <h2><b>Total</b></h2>
                        <Moneda>$ {`${total}.00`} <span >MXN</span></Moneda>
                    </TotalPago>
                    <div className="mx-3 my-3 ">
                        <CardElement className="form-control fs-3" />
                    </div>
                </div>
                <div className="d-grid gap-2">
                    <button className="btn btn-success mx-3" disabled={!stripe} type="submit">
                        {loading ?(<div className="spinner-border text-secondary" role="status"><span className="visually-hidden">Loading...</span>
                                </div>): "Buy"}
                    </button>
                </div>

            </div>
        </form>
    )
}
