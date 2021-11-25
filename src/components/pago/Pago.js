
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import Vertor from '../vector/Vertor';
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router';


const cookies = new Cookies();

const stripePromise = loadStripe('pk_test_51JzCb3AWvg3c0gVmKP886O5H9cPHN2lPL1uD7pOsIjpZUQqitjM9aOoGb8Jp6uzcgmGrdKWApoyJQWsDIWu2J98t00pEEkfwGM');

export default function Pago() {
    const navigator = useNavigate();
    let nombre = cookies.get('name');
    if (JSON.parse(localStorage.getItem('seccionAppguajoapp'))){
        return (
            <Elements stripe={stripePromise}>
                <Vertor pago={"car"}/>
                <h5 className="text-center">Bienvenido</h5>
                <h6 className="text-center">{nombre}</h6>
    
                <div className="text-center">
                    <h3>Información Para Pagos</h3>
                </div>
                <br />
                <CheckoutForm></CheckoutForm>
            </Elements>
        )
    }
    else if(!JSON.parse(localStorage.getItem('seccionAppguajoapp'))){
        navigator("/FormLogin")
    }
  
    
}
