import {
  Danger,
  I3Square,
  MessageQuestion,
  Notification,
  RowVertical,
  User,
  UserAdd,
  Video,
  Warning2,
} from "iconsax-react";
import React from "react";

const navLinks = [
  {
    linkTitle: "Dashboard",
    route: "/",
    Icon: <RowVertical color="var(--white)" />,
    cName: "nav-text",
  },
  {
    linkTitle: "WOW Users",
    route: "/users",
    Icon: <User color="var(--white)" />,
    cName: "nav-text",
  },
  {
    linkTitle: "Video clips",
    route: "/video",
    Icon: <Video color="var(--white)" />,
    cName: "nav-text",
  },
  {
    linkTitle: "Reported Content",
    route: "/content",
    Icon: <Danger color="var(--white)" />,
    cName: "nav-text",
  },
  {
    linkTitle: "Category",
    route: "/category",
    Icon: <I3Square color="var(--white)" />,
    // Icon: <FaIcons.FaEnvelopeOpenText />,
    cName: "nav-text",
  },
  {
    linkTitle: "info Page",
    route: "/info",
    Icon: <Warning2 color="var(--white)" />,
    cName: "nav-text",
  },
  {
    linkTitle: "FAO",
    route: "/faq",
    Icon: <MessageQuestion color="var(--white)" />,
    cName: "nav-text",
  },
  {
    linkTitle: "Push  Notification",
    route: "/notification",
    Icon: <Notification color="var(--white)" />,
    cName: "nav-text",
  },
  {
    linkTitle: "Internal User",
    route: "/internal-user",
    Icon: <UserAdd color="var(--white)" />,
    cName: "nav-text",
  },
];

export default navLinks;
