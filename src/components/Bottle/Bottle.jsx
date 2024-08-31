import PropTypes from 'prop-types';
import './Bottle.css'
const Bottle = ({ bottle, handleCart }) => {
    const { name, price, img } = bottle
    return (
        <div className="bottle">
            <img src={img} alt="" />
            <h3>Name: {name}</h3>
            <p>Price: ${price}</p>
            <button onClick={() => handleCart(bottle)}>Purchase</button>
        </div>
    );
};

Bottle.propTypes = {
    bottle: PropTypes.array.isRequired,
    handleCart: PropTypes.func
}

export default Bottle;