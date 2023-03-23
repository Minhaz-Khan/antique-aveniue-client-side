import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import WishCheckout from './WishCheckout';



const stripePromise = loadStripe(`${process.env.REACT_APP_STRIPE_PK}`);

const WishPaymentModal = ({ paymentItem, setPaymentItem, refetch }) => {
    const { _id, image, productName, salePrice, buyerEmail, companyName, buyerName } = paymentItem
    return (
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold text-center"> Payment For {productName}</h3>
                    <p className="pt-4 pb-2">Please pay <strong>{salePrice}</strong> for your package </p>
                    <p className='pb-4'>Company Name: <span className='font-medium'>{companyName}</span></p>
                    <div>
                        <Elements stripe={stripePromise}>
                            <WishCheckout paymentItem={paymentItem} setPaymentItem={setPaymentItem} refetch={refetch} />
                        </Elements>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default WishPaymentModal;