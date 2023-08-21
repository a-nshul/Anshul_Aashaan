import React from "react";
import { contentConstant } from "../../Constant/content";
import CheckboxField from "../Form/Checkbox";
function Table(props) {
  const { dataList, type, isCheckbox } = props;

  // Check if dataList is an array and not empty before rendering table rows
  const renderTableRows = () => {
    if (Array.isArray(dataList) && dataList.length > 0) {
      return dataList.map((client, index) => (
        <tr key={index}>
          <td>{client.Connected_Device}</td>
          <td>{client.IP_Address}</td>
          <td>{client.Mac_Address}</td>
          {/* <td>{client.connection ? client.connection.localIP : "N/A"}</td> */}
          <td>{client.DHCP_Lease}</td>
        </tr>
      ));
    } else {
      return (
        <tr>
          <td colSpan={contentConstant[type].TABLE.length + (isCheckbox ? 1 : 0)}>
            No data available
          </td>
        </tr>
      );
    }
  };

  return (
    <div className="card mt-5 aasan-card">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="table-responsive aasan-table">
              <table className="table">
                <thead>
                  <tr>
                    {/* <th scope="col">
                      {props.isCheckbox && (
                        <CheckboxField
                          name={"all"}
                          id={"all"}
                          value={"all"}
                          type={"checkbox"}
                          onClick={(e) => props.handleAllSelect(e)}
                        />
                      )}
                    </th> */}
                    {contentConstant[props.type].TABLE.map((item) => {
                      return <th key={item} scope="col">{item}</th>;
                    })}
                  </tr>
                </thead>
                <tbody>{renderTableRows()}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;

// Table.js



