import React from "react";
import dummyData from "../../Dummydata";
import Progress from "../../../Components/Admin/Progress";

const PartnerProducts = () => {
  return (
    <div className="row">
      {dummyData?.OtherProdCrad?.map((item) => (
        <div class="container card AdProdCard">
          <div className="cardHead">
            <img
              class="card-img-top-center"
              src={item.image}
              alt="Card image cap"
              style={{ width: "50px", height: "30px" }}
            />
            <p>{item.title}</p>
          </div><hr style={{border:"1px solid grey"}}/>
          <div class="card-body">
            <div className="cardBodyToggle">
              <h5 class="card-title AdProdManTitle">&12345</h5>
              <div className="toggle-switch prodMantoggle-switch">
                <input
                  type="checkbox"
                  className="checkbox"
                  name="toggleProd"
                  id="toggleProd"
                />
                <label className="label ProdManLabel" htmlFor="toggleProd">
                  <span className="inner ProdManInner" />
                  <span className="switch ProdManSwitch" />
                </label>
              </div>
            </div>
            <p class="card-text AdProdMantext">Last Modified: 15/12/2021</p>
            <div className="ProdcardBottom">
              <div className="pt-3 ">
                <span class="fa fa-star checked m-2"></span>
                <span class="fa fa-star checked m-2"></span>
                <span class="fa fa-star checked m-2"></span>
                <span class="fa fa-star checked m-2"></span>
                <span class="fa fa-star checked m-2"></span>
              </div>
              <button
                type="button"
                className={`fa fa-caret-down dropdown-toggle-split ProdCardBut`}
                data-bs-toggle="dropdown"
                aria-expanded="false"
              ></button>
              <div className="dropdown-menu" style={{ width: "100%" }}>
                <div className="pt-3 AdProdStar">
                  <span class="fa fa-star checked m-2"></span>
                  <span class="fa fa-star checked m-2"></span>
                  <span class="fa fa-star checked m-2"></span>
                  <span class="fa fa-star checked m-2"></span>
                  <span class="m-2 AdProdMantext">4 out of 5</span>
                </div>
                <p class="m-2 AdProdMantext">1,25,689 Global Rating</p>
                {dummyData?.ProdManCard?.map((item) => (
                  <div className="ProdManFooter row">
                    <p className="heading">{item.title}</p>
                    <div className="ProdManProg">
                      <Progress
                        ProgressclassName={"ProdManProgress"}
                        progressmain={"ProdCardMain"}
                      />
                    </div>
                    <small className="footer">{item.per}</small>
                  </div>
                ))}
                <hr />
                <center>
                  <a className="AdProdSeeReview">See all Customer Review's</a>
                </center>
              </div>
              <p className="AdProdMantextCount">1,245</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PartnerProducts;
