import React from "react";

const List = ({ list }) => {
  return (
    <div className="grid grid-cols-3 gap-2 text-sm mt-5 text-brown_vs">
      {list &&
        list.map((item, index) => (
          <div key={index} className="flex flex-row  mb-3">
            <img
              src={item.logo}
              alt={item.name}
              className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
            />
            <code>{item.name}</code>
          </div>
        ))}
    </div>
  );
};

export default List;
