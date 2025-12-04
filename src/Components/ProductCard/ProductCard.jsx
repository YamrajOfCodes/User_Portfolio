 const ProductCard = ({projectName,tech}) => {
  return (
    <div className="flex justify-start p-6 rounded-xl w-full sm:w-1/2 lg:w-1/3 2xl:w-1/4 ">
      <div className="bg-[rgba(11,11,11,1)] p-6 w-full border flex flex-col gap-2 border-[rgba(100,100,100,1)] rounded-xl bg-[rgba(11,11,11,1)]">
        <div className="w-full h-60 rounded-2xl bg-gradient-to-br from-pink-500 via-purple-500 to-blue-300 mb-4"></div>
        <h2 className="text-white text-xl xl:text-2xl font-semibold mb-3">
         {projectName || "Project"}
        </h2>
        <div className="flex flex-wrap gap-2 mb-4">
        {
          tech.map((technology,_) =>   <span className="px-3 py-1 bg-[rgba(120,77,199,1)] text-white text-xs lg:text-[1rem] rounded-full">
            {technology}
          </span>)
        }
        </div>
      
        <button className="w-full bg-[rgba(41,41,41,1)] hover:bg-gray-700 text-white py-3 xl:text-lg rounded-lg transition-colors cursor-pointer">
          View Product Detail
        </button>
      </div>
    </div>
  );
}

export default ProductCard;