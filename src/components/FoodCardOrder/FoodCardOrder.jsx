import React, { useContext } from 'react';
import { authContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';


const FoodCardOrder = ({ item }) => {
    const { user } = useContext(authContext)
    const [, refetch] = useCart();
    const { price, name, image, recipe, _id } = item || {}
    const navigate = useNavigate()
    const location = useLocation()

    const handleCart = (data) => {
        console.log(data);

        if (user && user.email) {
            const cartItem = { menuId: _id, price, image, name, email: user.email }
            fetch(`http://localhost:1000/carts`, {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(cartItem)


            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Added To Cart Successfully',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {

            Swal.fire({
                title: 'Are you sure?',
                text: "Please login to order the food!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Log-In'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }

    return (
        <div className="card  bg-base-100 shadow-xl  h-full border border-slate-400">
            <figure className=' '><img className='mt-5 w-72 h-64 border border-slate-400 rounded-xl' src={image} alt="Shoes" /></figure>
            <button className='btn btn-success btn-sm absolute  mt-3 right-5'>${price}</button>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button onClick={() => handleCart(item)} className="btn-primary btn btn-outline bg-amber-200 bg-opacity-30 btn-md border-0 border-b-2">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCardOrder;