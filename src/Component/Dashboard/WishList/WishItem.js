import React from 'react';

const WishItem = ({ wish, handleWishListDelete, setPaymentItem }) => {
    const handlePayment = () => {
        setPaymentItem(wish)
    }
    return (
        <tr key={wish._id}>
            <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                <div className="inline-flex items-center gap-x-3">


                    <div className="flex items-center gap-x-2">
                        <img className="object-cover w-10 h-10 rounded-full" src={wish.image} alt="" />

                    </div>
                </div>
            </td>
            <td>

                <h2 className="font-medium text-gray-800 dark:text-white ">{wish.productName}</h2>


            </td>

            <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{wish.salePrice}</td>
            <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{wish.buyerEmail}</td>


            <td className="px-4 py-4 text-sm whitespace-nowrap">
                <div className="flex items-center gap-x-6">
                    <button onClick={() => handleWishListDelete(wish._id)} className="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                        </svg>
                    </button>
                    {
                        wish.salePrice && !wish.paid &&

                        <label onClick={handlePayment} htmlFor="my-modal-3" className='btn-ghost px-3 py-1 rounded-lg bg-gray-100'>
                            Pay
                        </label>

                    }
                    {
                        wish.salePrice && wish.paid && <span className='text-green-500'>Paid </span>


                    }

                </div>
            </td>
        </tr>
    );
};

export default WishItem;