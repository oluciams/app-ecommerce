import { XMarkIcon } from "@heroicons/react/24/solid";
import PropTypes from "prop-types";

const OrderCard = (props) => {

  const { id, title, imageUrl, price, handleDelete } = props;

  return (
    <div className="flex justify-between item-center mb-3">
      <div className="flex items-center gap-2">
        <figure className="w-20 h-20">
          <img
            className="w-full h-full rounded-lg"
            src={imageUrl}
            alt={title}
          />
        </figure>
        <p className="text-sm font-ligth">{title}</p>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-lg font-medium">${price}</p>
        <XMarkIcon
          onClick={() => handleDelete(id)}
          className="h-6 w-6 text-black cursor-pointer"
        />
      </div>
    </div>
  );
}

OrderCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.array.isRequired,
  price: PropTypes.number.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default OrderCard