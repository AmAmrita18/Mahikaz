import React from "react";

const DropdownList = () => {
  // const [selected, setIsSelected] = useState("Choose one");
  return (
    <div className="w-full">
      <div className="w-[80%] h-full  max-w-[1200px] py-12 flex flex-row gap-0">
        <div className="bg-white rounded-l-3xl border-r border-[#E4E4E4] pl-4 pr-44 py-12 flex items-start justify-start">
          <select name="lookingfor" id="lookingfor" className="border-none">
          <option >Looking For</option>
            <option value="option1">option 1</option>
            <option value="option2">option 2</option>
            <option value="option3">option 3</option>
            <option value="option4">option 4</option>
          </select>
        </div>

        <div className="bg-white border-r rounded-l-md border-[#E4E4E4] pl-4 pr-44 py-12 flex items-start justify-start">
          <select name="lookingfor" id="lookingfor" className="border-none">
          <option >Location</option>
            <option value="option1">option 1</option>
            <option value="option2">option 2</option>
            <option value="option3">option 3</option>
            <option value="option4">option 4</option>
          </select>
        </div>

        <div className="bg-white border-r border-[#E4E4E4] pl-4 pr-44 py-12 flex items-start justify-start">
          <select name="lookingfor" id="lookingfor" className="border-none ">
            <option >Property Type</option>
            <option value="option1">option 1</option>
            <option value="option2">option 2</option>
            <option value="option3">option 3</option>
            <option value="option4">option 4</option>
          </select>
        </div>

        <div className="bg-white rounded-r-3xl  pl-4 pr-44 py-12 flex items-start justify-start">
          <select name="lookingfor" id="lookingfor" className="border-none ">
          <option >Price</option>
            <option value="option1">option 1</option>
            <option value="option2">option 2</option>
            <option value="option3">option 3</option>
            <option value="option4">option 4</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default DropdownList;
