import { useCart } from '../context/CartContext'
import { createOrder } from '../firebase/db'
import { serverTimestamp } from 'firebase/firestore'
import { useNavigate } from 'react-router'
import Swal from 'sweetalert2'
import './styles/Checkout.css'

function Checkout() {
    const { cart, getTotal, setCart } = useCart()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const phone = form.phone.value

        const order = {
            buyer: { name, email, phone },
            items: cart,
            date: serverTimestamp(),
            total: getTotal(),
        }

        try {
            await createOrder(order)

            Swal.fire({
                title: '¡Compra realizada!',
                text: 'Tu compra ha sido procesada con éxito.',
                icon: 'success',
                confirmButtonText: 'Aceptar',
                confirmButtonColor: '#51adfd',
            }).then((result) => {
                if (result.isConfirmed) {
                    console.log('Vaciar carrito y redirigir')
                    setCart([])
                    navigate('/')
                }
            })
        } catch (error) {
            console.error('Error al finalizar la compra: ', error)

            Swal.fire({
                title: 'Error',
                text: 'Hubo un problema al procesar tu compra. Por favor, inténtalo nuevamente.',
                icon: 'error',
                confirmButtonText: 'Aceptar',
                confirmButtonColor: '#ff4b4b',
            })
        }
    }

    return (
        <div className="checkout-container">
            <form onSubmit={handleSubmit}>
                <h3 className="checkout-h3">Complete los siguientes datos para finalizar tu compra:</h3>
                <div className="checkout-formgroup">
                    <label className="checkout-label" htmlFor="name">Nombre:</label>
                    <input className="checkout-input" type="text" id="name" name="name" placeholder="Nombre y Apellido" required/>
                </div>
                <div className="checkout-formgroup">
                    <label className="checkout-label" htmlFor="email">Email:</label>
                    <input className="checkout-input" type="email" id="email" name="email" placeholder="nombreapellido@mail.com" required/>
                </div>
                <div className="checkout-formgroup">
                    <label className="checkout-label" htmlFor="phone">Teléfono:</label>
                    <input className="checkout-input" type="text" id="phone" name="phone" placeholder="+5491143094700" required/>
                </div>
                <button className="checkout-button" type="submit">Finalizar compra</button>
            </form>
        </div>
    )
}

export default Checkout
