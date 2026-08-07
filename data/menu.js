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
  {
    title: "Robot",
    children: [{ title: "X24 Robot", path: "/robot/x24-robot" }],
  },
  {
    title: "FAQ",
    children: [
      { title: "Auto Withdraw", path: "/faq/auto-withdraw" },
      { title: "Tips Withdraw", path: "/faq/tips-withdrawal" },
    ],
  },
  {
    title: "Register",
    children: [
      { title: "IDR Register", path: "/register/idr" },
      { title: "Global Register", path: "/register/global" },
    ],
  },
];
