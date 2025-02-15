import React from "react";

export type TableData = {
  key: string;
  age: string;
  message: React.ReactNode;
  duration: React.ReactNode;
};

type Props = {
  id: string;
  columns: string[];
  sticky?: boolean;
  data: TableData[];
};

export function Table({ columns, data, id, sticky = false }: Props) {
  const columnsMapped = columns.map((c) => {
    if (typeof c === "string") {
      return { name: c };
    }
    return c;
  });
  return (
    <div className="flex flex-col">
      <div className="align-middle inline-block min-w-full">
        <table
          className="min-w-full divide-y divide-gray-300 border-separate"
          style={{ borderSpacing: "0px" }}
        >
          <thead className={sticky ? "sticky top-0 bg-white" : ""}>
            <tr>
              {columnsMapped.map((column) => (
                <th
                  key={column.name}
                  scope="col"
                  className={`px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-300`}
                >
                  {column.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-300" style={{}}>
            {data.map((row, idx) => (
              // eslint-disable-next-line react/no-array-index-key
              <tr key={`${id}.${idx}`}>
                {columnsMapped.map((column) => (
                  <td
                    key={column.name}
                    className="px-4 py-3 border-b border-gray-300"
                  >
                    <div className="text-sm text-gray-900">
                      {row[column.name.toLowerCase()]}
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
