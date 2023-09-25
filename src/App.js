import "./App.css"
import Cookies from "js-cookie";
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from './components/right/Form';
import Window from './components/right/Window';
import Left from './components/left/Left';
import Right from "./components/right/Right";




function App() {
  let currentData, modified = [], currAlw, alwModified = [];
  const [dt, setDt] = useState(modified);
  const [alw, setAlw] = useState(alwModified);

  const [open, setOpen] = useState(false);
  const initAlw = {
    salarySystem: "",
    moreAnnual: "",
    generousWelfare: "",
    enhancedEducation: "",
    supportSystem: "",
    reducedWorking: "",
    maternityCare: "",
    companyHousing: "",
    familyAllowance: "",
    employeeStock: "",
    sideJob: "",
    mentorSystem: "",
    careerConsulting: ""
  }
  const [allows, setAllow] = useState(initAlw)

  const initForm = {
    bDescription: "",
    cPhilosophy: "",
    cName: "",
    Industry: "",
    MailID: "",
    pNumber: "",
    Location: "",
    Website: "",
    wHours: "",
    eDate: "",
    itCapital: "",
    Representative: "",
    Branch: "",
    nfEmployees: "",
    sRevenue: "",
    oProfit: "",
    aafEmployees: "",
    Stock: "",
    LinkedinLink: "",
    TwitterLink: "",
    FacebookLink: "",
    InstagramLink: "",
    YoutubeLink: "",
    fOwned: ""

  }
  const [formData, setFormData] = useState(initForm)


  const handleDialog = () => {
    setOpen(() => !open)
    setAllow(initAlw);
  }


  // console.log(dt.length)
  const getForm = () => {
    currentData = Cookies.get("formData")
    if (currentData) {
      console.log(currentData, "cddddddd")
      modified = JSON.parse(currentData);
      // console.log(modified)
      setDt(modified)
    }

  }

  const getAlw = () => {
    currAlw = Cookies.get("Allowances")
    if (currAlw) {
      // console.log(currAlw)
      alwModified = JSON.parse(currAlw);
      // console.log(alwModified)
      setAlw(alwModified)
    }
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Left />
        <Window handleDialog={handleDialog} open={open} data={allows} setData={setAllow} init={initAlw} getAlw={getAlw} />
        <Routes>
          <Route path="/" element={<Right handleDialog={handleDialog} data={allows} dt={dt} alw={alw} getForm={getForm} getAlw={getAlw} />} />
          <Route path="/register" element={<Form data={formData} setData={setFormData} init={initForm} getForm={getForm} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
