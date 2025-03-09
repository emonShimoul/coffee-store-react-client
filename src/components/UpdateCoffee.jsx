import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { _id, name, quantity, supplier, taste, category, details, photo } =
    coffee;

  const handleUpdateCoffe = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const updatedCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };

    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Coffee updated successfully!!",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className="bg-[#F4F3F0] p-24">
      <h2 className="mb-4 text-3xl font-extrabold">Update Coffee</h2>
      <form onSubmit={handleUpdateCoffe} className="flex flex-col gap-4">
        {/* form name and quantity row */}
        <div className="md:flex gap-4">
          <div className="md:w-1/2">
            <input
              type="text"
              name="name"
              defaultValue={name}
              placeholder="Coffee Name"
              className="w-full bg-white p-3 rounded border border-gray-300"
              required
            />
          </div>

          <div className="md:w-1/2">
            <input
              type="text"
              name="quantity"
              defaultValue={quantity}
              placeholder="Available Quantity"
              className="w-full bg-white p-3 rounded border border-gray-300"
              required
            />
          </div>
        </div>

        {/* form supplier and taste row */}
        <div className="md:flex gap-4">
          <div className="md:w-1/2">
            <input
              type="text"
              name="supplier"
              defaultValue={supplier}
              placeholder="Supplier Name"
              className="w-full bg-white p-3 rounded border border-gray-300"
              required
            />
          </div>

          <div className="md:w-1/2">
            <input
              type="text"
              name="taste"
              defaultValue={taste}
              placeholder="Taste"
              className="w-full bg-white p-3 rounded border border-gray-300"
              required
            />
          </div>
        </div>

        {/* form category and details row */}
        <div className="md:flex gap-4">
          <div className="md:w-1/2">
            <input
              type="text"
              name="category"
              defaultValue={category}
              placeholder="Category"
              className="w-full bg-white p-3 rounded border border-gray-300"
              required
            />
          </div>

          <div className="md:w-1/2">
            <input
              type="text"
              name="details"
              defaultValue={details}
              placeholder="Details"
              className="w-full bg-white p-3 rounded border border-gray-300"
              required
            />
          </div>
        </div>

        {/* form row */}
        <div className="">
          <div className="w-full">
            <input
              type="text"
              name="photo"
              defaultValue={photo}
              placeholder="Photo URL"
              className="w-full bg-white p-3 rounded border border-gray-300"
              required
            />
          </div>
        </div>

        <input
          type="submit"
          value="Update Coffee"
          className="btn btn-block bg-amber-700 text-white font-bold"
        />
      </form>
    </div>
  );
};

export default UpdateCoffee;
