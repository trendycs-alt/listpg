// This single file drives the entire site navigation.
// Add, remove, or rename a menu item here and it updates everywhere automatically.

export const menu = [
  { title: "Home", path: "/" },
{
  title: "Payment Gateway",
  children: [
    { title: "IDR Market", path: "/payment-gateway/idr" },
    { title: "Global Market", path: "/payment-gateway/global" },
  ],
},
  { title: "BOT X24", path: "/BOTX24" },
  {
    title: "Auto WD",
    children: [
      { title: "Guideline", path: "/autowd/guideline" },
      { title: "Terms and Conditions", path: "/autowd/termsandconditions" },
    ],
  },
  {
    title: "Register",
    children: [
      { title: "Register ( IDR )", path: "https://docs.google.com/forms/d/e/1FAIpQLSfoIt1sc3wzYZzx0_CPGlnwO5VuE942NW__kkujOafHzsdIrA/viewform" },
      { title: "Register ( GLOBAL )", path: "https://docs.google.com/forms/d/e/1FAIpQLSdK5thxl0GAO09hbLPhPi8DpyGKUOFDyNVISGc9DeC8omc9zQ/viewform" },
    ],
  },
];
