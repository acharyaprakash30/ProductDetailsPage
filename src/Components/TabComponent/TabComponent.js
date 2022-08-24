import React from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Accordion from 'react-bootstrap/Accordion';
import './TabStyle.css'

const TabComponent = ({ data }) => {
  console.log("data from tab", data);
  return (
    <>
    <div className="container mb-5">

    <Tabs
      defaultActiveKey="Specifications"
      className="mb-2"
      fill
    >
      <Tab eventKey="description" title="Description">
      <p className="m-5 PoppinsFont">{data.description}</p>
      </Tab>
      <Tab eventKey="Specifications" title="Specifications">

      <div className="d-flex align-items-center justify-content-between">
    <div className="w-100 m-5">
    <p className="technicalDetail PoppinsFont">Other Details</p>
      <table class="table w-100 PoppinsFont table-striped">
    <thead>
      <tr>
        <th scope="col">Item Weight</th>
        <td>29 pounds</td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Dimensions</th>
        <td>38*40*31.5 inches</td>
      </tr>
      <tr>
        <th scope="row">Item model number</th>
        <td>BF292966BR-M52</td>
      </tr>
    </tbody>
      </table>
  </div>
  <div className="w-100 m-5">
    <p className="technicalDetail">Technical Details</p>
      <table class="table w-100 table-striped">
    <thead>
      <tr>
        <th scope="col">Item Weight</th>
        <td>29 pounds</td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Dimensions</th>
        <td>38*40*31.5 inches</td>
      </tr>
      <tr>
        <th scope="row">Item model number</th>
        <td>BF292966BR-M52</td>
      </tr>
    </tbody>
      </table>
  </div>
      </div>
      </Tab>
      <Tab eventKey="Questions/Answers" title="Questions/Answers">
      <div  className="accordionDiv">
      <Accordion>
      <Accordion.Item  eventKey="0">
        <Accordion.Header>is this product is genuine ? </Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>is it waterproof ?</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>can we replace it ?</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
      </Tab>
      <Tab eventKey="Ratings & Reviews" title="Ratings & Reviews">
      <p className="m-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.</p>
      </Tab>
    </Tabs>



    
</div>
    
    </>
  );
};

export default TabComponent;
