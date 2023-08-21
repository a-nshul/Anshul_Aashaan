import React from "react";
import { contentConstant } from "../../Constant/content";
import CheckboxField from "../Form/Checkbox";
function Table(props) {
  const { dataList, type, isCheckbox } = props;
  const handleUpdateClick=()=>{
   alert("updated data ")
  }
  // Check if dataList is an array and not empty before rendering table rows
  const renderTableRows = () => {
    if (Array.isArray(dataList) && dataList.length > 0) {
      return dataList.map((row, index) => (
                <tr key={index}>
                <td>{row.SSID}</td>
                <td>{row.Active_Clients}</td>
                {/* <td>{row["apGroups"]}</td> */}
                <td>{row.Security}</td>
                <td>{row.Experience_dBm}</td>
                <td>{row.Channel}</td>
                {/* <td>{row.experience}</td> */}
                {/* //<td>{row.manage}</td> */}
                <td>
                <button
                  className="btn btn-primary"
                  onClick={() => handleUpdateClick(row)}
                >
                  Update
                </button>
              </td>
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




