import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, quantity, supplier, taste, category, details, photo } =
    coffee;

  const handleDelete = (id) => {
    console.log(id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success",
              });

              const remaining = coffees.filter((coff) => coff._id !== _id);
              setCoffees(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="card card-side bg-base-100 shadow-sm">
      <figure>
        <img src={photo} alt="Movie" />
      </figure>
      <div className="flex justify-between items-center w-full pr-6 ms-8">
        <div>
          <h2 className="card-title">
            <span className="font-bold text-amber-600">Name: </span>
            {name}
          </h2>
          <p className="text-sm">
            <span className="font-bold text-amber-600">Available: </span>
            {quantity}
          </p>
          <p className="text-sm">
            <span className="font-bold text-amber-600">Supplier: </span>
            {supplier}
          </p>
          <p className="text-sm">
            <span className="font-bold text-amber-600">Taste: </span>
            {taste}
          </p>
          <p className="text-sm">
            <span className="font-bold text-amber-600">Category: </span>
            {category}
          </p>
          <p className="text-sm">
            <span className="font-bold text-amber-600">Details: </span>
            {details}
          </p>
        </div>
        <div className="card-actions justify-end">
          <div className="join join-vertical space-y-2">
            <button className="btn bg-gray-600 rounded text-white join-item">
              View
            </button>
            <Link to={`updateCoffee/${_id}`}>
              <button className="btn bg-amber-400 rounded join-item">
                Edit
              </button>
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="btn bg-red-500 text-white rounded join-item"
            >
              X
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
