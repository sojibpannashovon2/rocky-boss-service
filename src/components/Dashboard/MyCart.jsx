import React from 'react';
import { Helmet } from 'react-helmet-async';
import useCart from '../../hooks/useCart';
import {
    FaTrash

} from "react-icons/fa";
import Swal from 'sweetalert2';

const MyCart = () => {

    const [cart, refetch] = useCart();
    const total = cart?.reduce((sum, item) => item.price + sum, 0)
    const newTotal = total.toFixed(2)

    const handleDelete = (row) => {
        // console.log(id);

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:1000/carts/${row._id}`, {
                    method: "DELETE",

                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }

                    })

            }
        })


    }
    return (

        <div>
            <Helmet>
                <title>My Cart || Rocky Boss</title>
            </Helmet>
            <div >
                <div className='flex justify-between my-8 font-bold text-2xl'>
                    <h3>Total Items: {cart.length}</h3>

                    <h3>Total Price: ${newTotal}</h3>
                    <button className="btn btn-warning btn-sm ">Pay Now</button>

                </div>
                <div className="overflow-x-auto ">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>Food</th>
                                <th>Food-Name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody >
                            {
                                cart?.map((row, index) => <tr

                                    key={row?._id}
                                >
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-32 h-32">
                                                    <img src={row?.image} />
                                                </div>
                                            </div>

                                        </div>
                                    </td>
                                    <td>
                                        {row?.name}
                                    </td>
                                    <td>${row?.price}</td>
                                    <th onClick={() => handleDelete(row)}>
                                        <button className="btn btn-ghost hover:bg-red-600 ">
                                            <FaTrash className='w-8 h-8'></FaTrash>
                                        </button>
                                    </th>
                                </tr>)
                            }


                        </tbody>



                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyCart;