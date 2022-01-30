export const ElectionCard = ({ plan, handleOpen }) => {
  return (
    <div className="rounded-xl shadow-lg my-3 border hover:scale-105 duration-500 transform transition cursor-pointer">
      <img src="/img/art.jpg" alt="" className="rounded-xl" />
      <div className="p-3">
        <div className="text-gray-900 text-lg font-medium">
          Arts faculty election
        </div>
        <div className="my-2">
          <div className="text-gray-700 text-md">
            Election Type:
            <span className="text-gray-600"> Faculty</span>
          </div>
          <div className="text-gray-700 text-md">
            Start Date:
            <span className="text-gray-600"> 06/03/2022 </span>
          </div>
          <div className="text-gray-700 text-md">
            End Date: <span className="text-gray-600">06/03/2022</span>
          </div>
        </div>
        <div className="mt-5">
          <div
            onClick={handleOpen}
            className="bg-green-500 text-gray-50 border rounded-xl font-bold cursor-pointer text-center py-2"
          >
            View
          </div>
        </div>
      </div>
    </div>
  );
};
