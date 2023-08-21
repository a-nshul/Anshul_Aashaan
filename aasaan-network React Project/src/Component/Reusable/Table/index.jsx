import { contentConstant } from "../../Constant/content";
import CheckboxField from "../Form/Checkbox";
export default function Table(props) {
  //console.log("props",props.result)
  console.log("props.dataList:", props.dataList);
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
                    {contentConstant[props.type].TABLE.map((item, index) => (
                      <th key={index} scope="col">
                        {item}
                      </th>
                    ))}
                  </tr>
                </thead>
                
                <tbody>
                  <tr>
                    
                  </tr>
                  {props.dataList ? (
                    <tr>
                      {Object.values(props.dataList).map((data, index) => (
                        <td key={index}>{data}</td>
                      ))}
                    </tr>
                  ) : (
                    <tr>
                      <td colSpan={contentConstant[props.type].TABLE.length + 1}>
                        No data available
                      </td>
                    </tr>
                  )}
</tbody>

              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
