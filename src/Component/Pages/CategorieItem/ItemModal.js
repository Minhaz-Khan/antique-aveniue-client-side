import React, { useContext } from 'react';
// import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const ItemModal = ({ modalItem, setModalItem }) => {
    // const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useContext(AuthContext)
    const { _id, productName, condition, status, categories, sellerName, location, oldPrice, salePrice, postTime, image, details } = modalItem

    const handlModal = e => {
        e.preventDefault();
        const form = e.target;
        const meetingLocation = form.location.value;
        const phoneNum = form.phoneNum.value;
        const bookingDetails = {
            meetingLocation,
            phoneNum,
            buyerName: user.displayName,
            buyerEmail: user.email,
            bookedProductId: _id,
            productName,
            image,
            salePrice
        }
        console.log(bookingDetails);
        setModalItem(null)
    }
    return (
        <div >
            <input type="checkbox" id="antique-modal" className="modal-toggle" />
            <div className="modal ">
                <div className="modal-box relative p-5 bg-Beige">
                    <label htmlFor="antique-modal" className="btn btn-sm  btn-circle border-none absolute right-4 top-4">✕</label>
                    <h3 className="text-lg font-bold uppercase text-center ">Give your info</h3>
                    <form onSubmit={handlModal} className='mt-6'>

                        <input value={user.displayName} disabled id="username" type="text" className="block w-full px-4 py-2 mt-2 text-gray-800 bg-gray-200  border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        <input value={user.email} disabled id="username" type="text" className="block w-full px-4 py-2 mt-2 text-gray-800 bg-gray-200 border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        <input value={productName} disabled id="username" type="text" className="block w-full px-4 py-2 mt-2 text-gray-800 bg-gray-200 border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        <input name='location' placeholder='Meeting Location' id="username" type="text" className="block w-full px-4 py-2 mt-2 text-gray-800 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        {/* {errors.location && <p className='text-red-500'>{errors.location?.message}</p>} */}
                        <input name='phoneNum' placeholder='Phone Number' id="username" type="text" className="block w-full px-4 py-2 mt-2 text-gray-800 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        {/* {errors.phoneNum && <p className='text-red-500'>{errors.phoneNum?.message}</p>} */}
                        <button type='submit' className="px-4 w-full py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-maroon rounded-md mt-3 hover:bg-maroonLight focus:outline-none focus:bg-blue-600">
                            Booked
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ItemModal;