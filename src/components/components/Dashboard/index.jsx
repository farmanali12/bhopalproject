import React from "react";
import Navbar from "../Navbar/Navbar";
import StatsView from "./Stats";

export default function Dashboard() {
  return (
    <div>
      <Navbar />
      <StatsView />
    </div>
  );
}
