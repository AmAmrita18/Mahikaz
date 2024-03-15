import React from "react";

const DropdownList = () => {
  // const [selected, setIsSelected] = useState("Choose one");
  return (
    <div className="w-full">
      <div className="w-[80%] h-full  max-w-[1200px] py-12 flex flex-row gap-0">
        <div className="bg-white rounded-l-3xl border-r border-[#E4E4E4] px-16 py-10 flex items-start justify-start">
          <select label="Looking For" 
            name="lookingfor"
            id="lookingfor"
            className="border-none outline-none focus:outline-none outline-white"
          >
            <option value="option1">Buy</option>
            <option value="option2">Rent</option>
           
          </select>
        </div>

        <div className="bg-white border-r  border-[#E4E4E4] px-16 py-10 flex items-start justify-start">
          <select
          label="Location" 
            name="location"
            id="location"
            className="border-none outline-none focus:outline-none outline-white"
          >
            
            <option value="option1">North</option>
            <option value="option2">South</option>
            <option value="option3">East</option>
            <option value="option4">West</option>
            <option value="option4">Center</option>
          </select>
        </div>

        <div className="bg-white border-r border-[#E4E4E4] px-16 py-10 flex items-start justify-start">
          <select
           label="Property Type"
            name="propertytype"
            id="propertytype"
            className="border-none outline-none focus:outline-none outline-white"
          >
            
            <option value="option1">Apartment</option>
            <option value="option2">House/Villa</option>
            <option value="option3">Land</option>
            <option value="option4">Office</option>
          </select>
        </div>

        <div className="bg-white rounded-r-3xl  px-16 py-10 flex items-start justify-start">
          <select
            label="Price"
            name="price"
            id="price"
            className="border-none outline-none focus:outline-none outline-white"
          >
            
            <option value="option1">Rs 0 - Rs 25,000</option>
            <option value="option2">Rs 25,000 - Rs 50,000</option>
            <option value="option3">Rs 50,000 - Rs 75,000</option>
            <option value="option4">Rs 75,000 - Rs 100,000</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default DropdownList;
