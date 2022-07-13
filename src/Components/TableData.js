import React, { useState } from "react";
import _ from "lodash";

function Table(props) {
  const headers = _.keys(props.data[0]);
  const [sortData, setSortData] = useState(props.data);

  const handleSort = (header) => {
    const sortedData = _.sortBy([...sortData], (o) => o[header])
    setSortData(sortedData) 
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            {_.map(headers, (header) => (
              <th key={header} onClick={(e) => handleSort(header)}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {_.map(sortData, (data, index) => (
            <tr key={index}>
              {_.map(data, (value, index) => (
                <td key={index}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
