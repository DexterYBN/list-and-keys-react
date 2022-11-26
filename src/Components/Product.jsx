import React from 'react';

const Product = ({ name, price, left, image, }) => {

    return (
        <>
            <div className='container text-center'>
                <div className='row'>
                    <div className='col'>
                        <div className='shadow p-3 mb-5 bg-body rounded'>
                            <img src={image} className="img-thumbnail" alt={name} />
                            <h3>{name}</h3>
                            <h6>{price}</h6>
                            <p>{left}</p>
                            <button type="button" class="btn btn-primary btn-lg">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Product;