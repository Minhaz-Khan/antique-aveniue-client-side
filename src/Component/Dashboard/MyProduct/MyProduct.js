import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const MyProduct = () => {
    const { user } = useContext(AuthContext)
    const { data: myProduct, isLoading, refetch } = useQuery({
        queryKey: ['myProduct'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/myProduct?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json()
            return data;
        }
    })

    const handleadvertise = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be advertised this product!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/myProduct/${id}`, {
                    method: 'PUT',
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        refetch()
                        if (data.acknowledged) {
                            Swal.fire(
                                'Advertised!',
                                'Your product has been advertised.',
                                'success'
                            )
                        }

                    })

            }
        })

    }
    return (
        <div className='mt-6'>

            <section className="container px-4 mx-auto">
                <div className="flex items-center justify-center gap-x-3">
                    <h2 className="text-xl font-medium text-gray-800 dark:text-white ">My Order List</h2>
                </div>

                <div className="flex flex-col mt-6">
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                            <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                    <thead className="bg-gray-50 dark:bg-gray-800">
                                        <tr>
                                            <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                <span>IMAGE</span>
                                            </th>
                                            <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                <span>Product Name</span>
                                            </th>



                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                <button className="flex items-center gap-x-2">
                                                    <span>price</span>


                                                </button>
                                            </th>

                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">Email address</th>


                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"></th>


                                        </tr>
                                    </thead>

                                    <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                                        {myProduct && myProduct.map(product => <tr key={product._id}>
                                            <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                <div className="inline-flex items-center gap-x-3">


                                                    <div className="flex items-center gap-x-2">
                                                        <img className="object-cover w-10 h-10 rounded-full" src={product.image} alt="" />

                                                    </div>
                                                </div>
                                            </td>
                                            <td>

                                                <h2 className="font-medium text-gray-800 dark:text-white ">{product.productName}</h2>


                                            </td>

                                            <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{product.salePrice}</td>
                                            <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{product.sellerEmail}</td>


                                            <td className="px-4 py-4 text-sm whitespace-nowrap">
                                                <div className="flex items-center gap-x-6">
                                                    <button className="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                        </svg>
                                                    </button>
                                                    {product.status === 'avilable' && <button onClick={() => handleadvertise(product._id)} className='btn-sm btn-ghost rounded'>
                                                        {product.status}
                                                    </button>}
                                                    {product.status === 'sold' && <button className='btn-sm btn-ghost rounded bg-maroonLight hover:bg-maroon text-white duration-200'>
                                                        {product.status}
                                                    </button>}
                                                    {product.status === 'advertised' && <button className='btn-sm btn-ghost rounded bg-blue-500 hover:bg-blue-700 text-white duration-200'>
                                                        {product.status}
                                                    </button>}

                                                </div>
                                            </td>
                                        </tr>)}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>


            </section>

        </div>
    );
};

export default MyProduct;


// onClick = {() => handleOrderDelete(product._id)}