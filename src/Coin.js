import React from 'react'
import './Bit.css';

const Coin = ({image, name, symbol, price, volume, priceChange, marketcap}) => {
    return (
        <div className="container-fluid mr-4">
            <div className="row">
                <div className="col-lg-12 col-sm-12">
                    <div className="card mt-4 shadow-lg p-3 mb-5 bg-body rounded">
                        <div className="card-body">
                            <div className="row">
                                
                    <div className="col-lg-1 col-sm-1">
                        <img src={image} alt="bitcoin" className="img-con mt-2 pt-3"/>
                    </div>

                    <div className="col-lg-2 pt-3">
                         <p className="ml-5">Name</p>
                        <hr />   
                        <h4 className="pl-5"><strong>{name}</strong></h4>
                    </div>

                    <div className="col-lg-1 pt-3">
                        <p>Symbol</p>
                        <hr /> 
                        <h5 className="font-italic"><strong>{symbol}</strong></h5>
                    </div>

                    <div className="col-lg-2 pt-3">
                         <p className="prc">Price</p>
                         <hr /> 
                        <p className="pl-5"><strong>₱{price}</strong></p>
                    </div>

                    <div className="col-lg-2 pt-3">
                        <p className="pl-5">Total Volume</p>
                        <hr /> 
                        <p className="pl-4"><strong>₱{volume.toLocaleString()}</strong></p>
                    </div>

                    <div className="col-lg-2 pt-3">
                        <p className="pl-5">Price Change</p>
                        <hr /> 
                        {priceChange < 0 ? (
                        <p className="text-danger pch"><strong>{priceChange.toFixed(2)}%</strong></p>

                         ) : (<p className="text-success pch"><strong>{priceChange.toFixed(2)}%</strong></p>
                    
                         )}
                  </div>

                  <div className="col-lg-2 pt-3">
                         <p className="pl-5">Market Cap</p>
                         <hr /> 
                         <p className="pl-3"><strong>₱{marketcap.toLocaleString()}</strong></p>
                  </div>
                </div>       
            </div>
         </div>
     </div>
    </div>
</div>
    )
}

export default Coin;
