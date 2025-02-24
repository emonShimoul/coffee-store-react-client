const CoffeeCard = ({ coffee }) => {
  const { name, quantity, supplier, taste, category, details, photo } = coffee;
  return (
    <div className="card card-side bg-base-100 shadow-sm">
      <figure>
        <img src={photo} alt="Movie" />
      </figure>
      <div className="flex justify-between items-center w-full pr-6 ms-8">
        <div>
          <h2 className="card-title">{name}</h2>
          <p>{quantity}</p>
          <p>{supplier}</p>
          <p>{taste}</p>
        </div>
        <div className="card-actions justify-end">
          <div className="join join-vertical space-y-2">
            <button className="btn bg-gray-600 rounded text-white join-item">
              View
            </button>
            <button className="btn bg-amber-400 rounded join-item">Edit</button>
            <button className="btn bg-red-500 text-white rounded join-item">
              X
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
