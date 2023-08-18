import React, {useState} from "react";
import "../src/Pricelist.css";

function PriceList() {

        const [price, setPrice] = useState("$19.99");
      
        const [price2, setPrice2] = useState("$24.99");
      
        const [price3, setPrice3] = useState("$39.99");
      
        const [isChecked, setIsChecked] = useState(true);
      
       
      
        const toggle = () => {
      
          setIsChecked(!isChecked);
      
          if (price === "$19.99" && price2 === "$24.99" && price3 === "$39.99") {
      
            setPrice("$199.99");
      
            setPrice2("$249.99");
      
            setPrice3("$399.99");
      
          } else {
      
            setPrice("$19.99");
      
            setPrice2("$24.99");
      
            setPrice3("$39.99");
      
          }
      
        };
  return (
    <>
      <div>
        <div class="container">
          <div class="row">
            <div class=" top">
              <p class="price">Our Pricing</p>

              <div class="ann">
                <p>Monthly</p>
                <label class="toggle">
                  <input type="checkbox" onChange={toggle} clicked></input>
                  <span class="slider"></span>
                </label>
                 <p>Annually</p>
              </div>
            </div>
            <div class="col-sm-3" id="a">
              <ul id="inner">
                <li id="pro">Basic</li>
                <li>
                  <span id="num">{price}</span>
                </li>
                <li>500 GB Storage</li>
                <li>2 Users Allowed</li>
                <li>Send up to 3</li>
              </ul>

              <button type="button" class="btn btn-primary btn-lg" id="btn">
                Learn more
              </button>
            </div>
            <div class="col-sm-3" id="b">
              <ul class="guy" id="inner">
                <li id="pro">Professional</li>
                <li>
                  <span id="num">{price2}</span>
                </li>
                <li>1 TB Storage</li>
                <li>5 Users Allowed</li>
                <li>Send up to 10 GB</li>
              </ul>
              <button type="button" class="btn btn-primary btn-lg" id="btn1">
                Learn more
              </button>
            </div>
            <div class="col-sm-3" id="a">
              <ul id="inner">
                <li id="pro">Basic</li>
                <li>
                  <span id="num">{price3}</span>
                </li>
                <li>500 GB Storage</li>
                <li>2 Users Allowed</li>
                <li>Send up to 3</li>
              </ul>
              <button type="button" class="btn btn-primary btn-lg" id="btn">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PriceList;
