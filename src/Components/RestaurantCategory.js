import Itemlist from "./Itemlist";

export const RestaurantCategory = ({ data, ShowItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex(); // Toggle the visibility of this category
  };

  return (
    <div>
      <div className="w-6/10 mx-auto my-4 bg-gray-100 shadow-lg p-4">
        {/* Header Section */}
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
          <span className="font-black text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>{ShowItems ? "⬆️" : "⬇️"}</span>
        </div>

        {/* Item List Section */}
        <div className="flex justify-center mt-4">
          {ShowItems && <Itemlist items={data.itemCards} />}
        </div>
      </div>
    </div>
  );
};
