import Swal from "sweetalert2";
import BusTypesService from "../../services/BusTypesService";
const BusType = ({ BusType, index }) => {
  const deleteBusType = async () => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const reply = await BusTypesService.deleteBusType(BusType._id);
          console.log(reply);
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
          window.location.reload(false);
        }
      });
    } catch (error) {}
  };

  return (
    <tr>
      <th scope="row">{index + 1}</th>
      <td>{BusType.name}</td>
      <td>{BusType.numberPlate}</td>
      <td>{BusType.day}</td>
      <td>{BusType.capacity}</td>
      <td>{BusType.routeName}</td>

      <td>
        <button className="btn btn-danger" onClick={deleteBusType}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default BusType;
