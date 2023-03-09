import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CategorieItem from '../CategorieItem/CategorieItem';
import ItemModal from '../CategorieItem/ItemModal';

const AllSalePost = () => {
    const categorieAllPost = useLoaderData();
    const [modalItem, setModalItem] = useState(null);
    return (
        <div className='container mx-auto font-poppins'>
            <h2 className='text-center text-maroon text-5xl font-bold mt-10 font-Caveat'>Antique {categorieAllPost[0].categories}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center p-10 gap-y-16 gap-x-6'>
                {categorieAllPost.map(categorieItem => <CategorieItem setModalItem={setModalItem} key={categorieItem._id} categorieItem={categorieItem}></CategorieItem>)}
            </div>
            {modalItem && <ItemModal modalItem={modalItem} setModalItem={setModalItem}></ItemModal>}

        </div>
    );
};

export default AllSalePost;