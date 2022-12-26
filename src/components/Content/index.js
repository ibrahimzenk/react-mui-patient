import { Routes, Route } from "react-router-dom";
import Patient from "../../pages/Patient";
import Dashboard from "../../pages/Patient/Dashboard";
import SearchPatient from "../../pages/Patient/SearchPatient";
import RegisterPatient from "../../pages/Patient/RegisterPatient";
import BasicInfo from "../../pages/Patient/RegisterPatient/BasicInfo";
import Address from "../../pages/Patient/RegisterPatient/Address";
import Guarantor from "../../pages/Patient/RegisterPatient/Guarantor";
import Insurance from "../../pages/Patient/RegisterPatient/Insurance";
import KinEmergencyContact from "../../pages/Patient/RegisterPatient/KinEmergencyContact";
import ProfilePic from "../../pages/Patient/RegisterPatient/ProfilePic";

function Content() {
  return (
    <Routes>
      <Route path="/patient" element={<Patient />}>
        <Route index={true} element={<SearchPatient />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="searchpatient" element={<SearchPatient />} />
        <Route path="registerpatient" element={<RegisterPatient />}>
          <Route index={true} element={<BasicInfo />} />
          <Route path="basicinfo" element={<BasicInfo />} />
          <Route path="address" element={<Address />} />
          <Route path="guarantor" element={<Guarantor />} />
          <Route path="insurance" element={<Insurance />} />
          <Route path="kinemergencycontact" element={<KinEmergencyContact />} />
          <Route path="profilepic" element={<ProfilePic />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default Content;
