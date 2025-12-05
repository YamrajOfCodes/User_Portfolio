 const ProductCard = ({projectName,tech}) => {
  return (
    <div className="flex justify-start p-4 rounded-xl w-full sm:w-1/2 lg:w-1/3 2xl:w-1/4 ">
      <div className="bg-bg-primary p-6 w-full border flex flex-col gap-2 border-Border rounded-xl">
        <div className="w-full h-60 rounded-2xl bg-gradient-to-br from-pink-500 via-purple-500 to-blue-300 mb-4"></div>
        <h2 className="text-white text-xl xl:text-3xl font-semibold mb-3">
         {projectName || "Project"}
        </h2>
        <div className="flex flex-wrap gap-2 mb-4">
        {
          tech.map((technology,_) =>   <span className="px-3 py-1 bg-[rgba(120,77,199,1)] text-white text-xs lg:text-[1rem] rounded-full">
            {technology}
          </span>)
        }
        </div>
      
        <button className="w-full bg-bg-secondary hover:bg-gray-700 text-white py-3 xl:text-lg rounded-lg transition-colors cursor-pointer">
          View Product Detail
        </button>
      </div>
    </div>
  );
}

export default ProductCard;