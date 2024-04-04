import React from "react";
import "./../Faqs/Faqs.css";
import faqImg from "./../../Assets/Images/d 10 1.png";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { qstnAns } from "../../utils/data";
import QstnAnswer from "./QstnAnswer";

const Faqs = () => {
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div id="faqs" className="faqs">
      <div className="row">
        <div className="col-md-6 col-sm-12 faq-left">
          <div className="faq-header text-white">
            <h1 className="heading">Have any question?</h1>
            <p className="text">
              Curious about 3dotlink? Explore our frequently asked questions to
              find answers
            </p>
            <Box sx={{ width: "100%" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="wrapped label tabs example"
              >
                <Tab value="one" label="General" wrapped />
                <Tab value="two" label="Pre ICO" />
                <Tab value="three" label="Token" />
                <Tab value="four" label="Client" />
                <Tab value="five" label="Legal" />
              </Tabs>
            </Box>
            <div style={{marginTop:"2rem"}}>
            {
                qstnAns.map((value,index)=>(
                <QstnAnswer 
                key={index}
                question={value.qstn}
                answer={value.ans}/>
                ))
            }
            </div>
           
          </div>
        </div>
        <div className="col-md-6 col-sm-12 faq-right">
          <img src={faqImg} alt="" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default Faqs;
