// src/components/Table.jsx
export default function Table({ columns, data }) {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          {columns.map((col) => (
            <th
              key={col}
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              {col}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {data.map((row, index) => (
          <tr
            key={index}
            className="hover:bg-gray-100 transition-colors duration-200"
          >
            {columns.map((col) => (
              <td
                key={col}
                className="px-6 py-4 whitespace-nowrap text-sm text-gray-700"
              >
                {row[col]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
