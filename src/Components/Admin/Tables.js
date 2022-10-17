import React from "react";
import dummyData from "../../containers/Dummydata";
// import { useNavigate } from "react-router-dom";

const Tables = ({ column, data }) => {
  // console.log(column, "TableheadData", data);
  // const navigate = useNavigate();

  return (
    <div>
      <table class="table world_table">
        <thead>
          <tr>
            {" "}
            {column?.map((item, index) => (
              <TableHead item={item} />
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => (
            <TableBody item={item} column={column} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

const TableHead = ({ item }) => <th>{item.heading}</th>;

const TableBody = ({ item, column }) => (
  <tr>
    {column.map((columnItem, index) => {
      if (columnItem.value.includes(".")) {
        const itemSplit = columnItem.value.split("."); ////['adress','city' nothing but for acesss object in object]
        return <td>{item[itemSplit[0]][itemSplit[1]]}</td>;
      } else if (columnItem.value === "image") {
        return (
          <td>
            <img src={item[`${columnItem.value}`]} alt="No IMage" />
            {/* {console.log(item[`${columnItem.value}`])} */}
          </td>
        );
      } else if (columnItem.value === "status") {
        return (
          <td>
            <i
              class={`fa fa-square-o ${
                item[`${columnItem.value}`] === "Active"
                  ? "tableStatusAct"
                  : "tableStatusInA"
              }`}
              data-bs-toggle="modal"
              href="#exampleModalToggle"
              role="button"
            ></i>
            <div>
              {dummyData &&
                dummyData.openmodaldata.map((data) => (
                  <div
                    class="modal fade  open-modal "
                    id="exampleModalToggle"
                    aria-hidden="true"
                    aria-labelledby="exampleModalToggleLabel"
                    tabindex="-1"
                  >
                    <div
                      class="modal-dialog modal-xl modal-dialog-centered open-modal"
                      style={{ color: "#666666;" }}
                    >
                      <div class="modal-content open-modal">
                        <div class="modal-header">
                          <h1
                            class="modal-title fs-6 mx-2"
                            id="exampleModalToggleLabel"
                          >
                            {data.ComplaintNumber}
                            <span style={{ fontSize: "13px" }}>
                              {data.number}
                            </span>
                            {data.Complaintdate}
                            <span style={{ fontSize: "13px" }}>
                              {data.date}
                            </span>
                          </h1>
                          <div className="logo-wipro-hrms">
                            <img className="wipro-logo" src={data.img} />
                            <img
                              className="Nectarhrms-logo"
                              src={data.imgnectar}
                            />
                          </div>

                          <button
                            style={{ color: "#FB5606 " }}
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                            // onClick={() => navigate("/progressboard")}
                          >
                            X
                          </button>
                        </div>
                        <div class="modal-body open-modal mb-5">
                          <div className="mx-4">
                            {data.IssueCommented}

                            <p className="issue-commented-text">
                              {data.IssueCommented2}
                            </p>
                          </div>

                          <div className="mx-5">
                            <div class="vtl">
                              <div class={data.className}>
                                <p class="date">{data.NectarSupport}</p>
                                <p class="txt">{data.NectarSupportdata}</p>
                              </div>
                              <div class={data.className2}>
                                <p class="date">{data.User}</p>
                                <p class="txt">{data.userdata}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="open-modal">
                          <div className="modal-footer open-modal">
                            <br></br>
                            <div class="col-md-4 mx-5">
                              <label
                                for="inputState"
                                style={{ fontSize: "12px" }}
                                class="form-label"
                              >
                                {data.complaintticket}
                              </label>
                              <select
                                id="inputState development-team"
                                className="form-select"
                              >
                                <option selected>{data.developmentteam}</option>
                                <option>{data.option}</option>
                              </select>
                            </div>
                            <div class="col-md-3">
                              <label
                                for="inputState"
                                class="form-label"
                                style={{ fontSize: "12px" }}
                              >
                                {data.setAssignee}
                              </label>
                              <select
                                id="inputState type-assignee"
                                class="form-select "
                              >
                                <option selected>{data.namefollowed}</option>
                                <option>...</option>
                              </select>
                            </div>
                            <div class="col-md-3 mx-3">
                              <label
                                for="inputState"
                                class="form-label"
                                style={{ fontSize: "12px" }}
                              >
                                {data.setpriority}
                              </label>
                              <select id="inputState high" class="form-select ">
                                <option selected>{data.high}</option>
                                <option>{data.option2}</option>
                              </select>
                            </div>
                            <div class="col-md-3 mx-5">
                              <label
                                for="inputState"
                                class="form-label"
                                style={{ fontSize: "12px" }}
                              >
                                {data.moveticket}
                              </label>
                              <select
                                id="inputState move-ticket"
                                class="form-select "
                              >
                                <option selected>
                                  {data.moveticketprogress}{" "}
                                </option>
                                <option>{data.moveticketprogress}</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
            {item[`${columnItem.value}`]}{" "}
          </td>
        );
      }
      {
        return <td>{item[`${columnItem.value}`]} </td>;
      }
    })}
  </tr>
);

export default Tables;
