const Coin = ({names ,image , symbol , price , volume}) => {
    return ( 
        <div className="coin-container">
            <div className="coin-row">
                <div className="coin">
                    <img src={image} alt="Crypto" />
                    <h1>{names}</h1>
                    <p className="coin-symbol">{symbol}</p>
                </div>
                <div className="coin-data">
                    <div className="coin-price">${price}</div>
                    <p className="coin-volume">${volume.toLocaleString()}</p>

                </div>
            </div>
        </div>
     );
}
 
export default Coin;