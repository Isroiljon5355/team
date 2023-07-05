import React from "react";
import { data } from "./data.js";

function Table() {
  const [search, setSeach] = React.useState(" ");
  return (
    <div>
      <div class="flex flex-col">
        <input
          type="text"
          placeholder="name"
          onChange={(e) => {
            setSeach(e.target.value);
          }}
          className="p-[15px]"
        />
        <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead className="bg-white border-b">
                  {data
                    .filter((item) => {
                      return search.toLocaleLowerCase() === " "
                        ? item
                        : item.name.toLocaleLowerCase().includes(search);
                    })
                    .map((item) => {
                      return (
                        <div key={item.id}>
                          <tbody>
                            <tr className="bg-gray-100 border-b">
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                {item.id}
                              </td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                {item.name}
                              </td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                {item.surname}
                              </td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                {item.hobby}
                              </td>
                            </tr>
                            <tr class="bg-white border-b">
                              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                {item.adres}
                              </td>
                            </tr>
                          </tbody>
                        </div>
                      );
                    })}
                </thead>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;
