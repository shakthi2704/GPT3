import React from "react";
import { google, slack, atlassian, dropbox, shopify } from "./imports";
import "./brand.css";

const Brand = () => (
  <div className="gpt3__brand section__padding">
    <div>
      <img src={google} alt="Brand" />
    </div>
    <div>
      <img src={slack} alt="Brand" />
    </div>
    <div>
      <img src={atlassian} alt="Brand" />
    </div>
    <div>
      <img src={dropbox} alt="Brand" />
    </div>
    <div>
      <img src={shopify} alt="Brand" />
    </div>
  </div>
);

export default Brand;
