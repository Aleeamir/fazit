import SearchBar from "../SearchBar";

const AfterHeaderKeyword = () => {
  return (
    <div className="border-bordercolor border-b-4 " style={{ height: 18 }}>
      <div className="flex justify-stretch items-center font-bold">
        <div className="flex pl-96">
          <div className=" text-popupcolor   flex space-x-2 pl-16 text-xs">
            <span>Page:</span>
            {[...Array(6)].map((_, i) => (
              <a key={i} href="#" className="hover:underline pl-2">
                {i + 1}
              </a>
            ))}
            <span>...</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AfterHeaderKeyword;
