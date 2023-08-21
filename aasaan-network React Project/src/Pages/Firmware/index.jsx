import React from "react";
import Header from "../../Component/Reusable/Header";
import Button from "../../Component/Reusable/Form/Button";
import { contentConstant } from "../../Component/Constant/content";
function Firmware() {
  return (
    <div className={"privateBody"}>
      <div className="row">
        <div className="col-sm-10">
          <Header type={"FIRMWARE"} />
        </div>
        <div className="col-sm-2">
          <Button type="submit" name={"Update Firmware"} />
        </div>
      </div>

      <div className="mt-5">
        <div className="card">
          <div className="card-body">
            <table className="table">
              <tbody>
                <tr>
                  <th>Firmware Version</th>
                  <th>Up Time</th>
                </tr>

                <tr>
                  <td>1.1.1.1</td>
                  <td>2 Days, 4 Hours, 36 Mins</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Firmware;

