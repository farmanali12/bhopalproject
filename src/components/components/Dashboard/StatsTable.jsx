import { Android, Apple } from "iconsax-react";
import React from "react";
import "../styles/stats-table.css";

export default function StatsTable({ tableData }) {
  const platformData = (android, ios) => {
    return (
      <div className="platform-div">
        <div>
          <Android size={20} />
          <p>{android}</p>
        </div>

        <div>
          <Apple size={20} />
          <p>{ios}</p>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="table-view-container">
        <table>
          <thead>
            <th scope="col">Date</th>
            <th scope="col">Day Installs</th>
            <th scope="col">Platform</th>
            <th scope="col">Day Uninstalls</th>
            <th scope="col">Platform</th>
            <th scope="col">Churn Rate</th>
            <th scope="col">Churn Platform</th>
          </thead>
          <tbody>
            {tableData.map((data) => (
              <tr>
                <td data-label="Date">
                  {new Date(data.created_At).toLocaleDateString()}
                </td>
                <td data-label="Total Install">{data.totalinstall}</td>
                <td data-label="Platform">
                  {platformData(data.android_install, data.ios_install)}
                </td>
                <td data-label="Period">{data.totaluninstall}</td>
                <td data-label="Platform">
                  {platformData(data.android_uninstall, data.ios_uninstall)}
                </td>
                <td data-label="Churn rate">{data.totalchurn}</td>
                <td data-label="Churn Platform">
                  {platformData(
                    data.android_churn === "Infinity"
                      ? "ထ"
                      : data.android_churn + "%",
                    data.ios_churn === "Infinity" ? "ထ" : data.ios_churn + "%"
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
