import LocalHospitalRoundedIcon from "@mui/icons-material/LocalHospitalRounded";
import ConnectWithoutContactRoundedIcon from "@mui/icons-material/ConnectWithoutContactRounded";
import VaccinesRoundedIcon from "@mui/icons-material/VaccinesRounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import SickRoundedIcon from "@mui/icons-material/SickRounded";
import ReportRoundedIcon from "@mui/icons-material/ReportRounded";
import ScienceRoundedIcon from "@mui/icons-material/ScienceRounded";
import Inventory2RoundedIcon from "@mui/icons-material/Inventory2Rounded";
import ContactEmergencyRoundedIcon from "@mui/icons-material/ContactEmergencyRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";

const color = "primary";

const menu = [
  {
    id: 1,
    name: "Dispensary",
    icon: <LocalHospitalRoundedIcon color={color} />,
    slug: "#",
  },
  {
    id: 2,
    name: "Social Service",
    icon: <ConnectWithoutContactRoundedIcon color={color} />,
    slug: "#",
  },
  {
    id: 3,
    name: "Doctor",
    icon: <VaccinesRoundedIcon color={color} />,
    slug: "#",
  },
  {
    id: 4,
    name: "Appointment",
    icon: <CalendarMonthRoundedIcon color={color} />,
    slug: "#",
  },
  {
    id: 5,
    name: "Patient",
    icon: <SickRoundedIcon color={color} />,
    slug: "patient/searchpatient",
  },
  {
    id: 6,
    name: "Reports",
    icon: <ReportRoundedIcon color={color} />,
    slug: "#",
  },
  {
    id: 7,
    name: "Laboratory",
    icon: <ScienceRoundedIcon color={color} />,
    slug: "#",
  },
  {
    id: 8,
    name: "Inventory",
    icon: <Inventory2RoundedIcon color={color} />,
    slug: "#",
  },
  {
    id: 9,
    name: "Emergency",
    icon: <ContactEmergencyRoundedIcon color={color} />,
    slug: "#",
  },
  {
    id: 10,
    name: "Settings",
    icon: <SettingsRoundedIcon color={color} />,
    slug: "#",
  },
];

export default menu;
