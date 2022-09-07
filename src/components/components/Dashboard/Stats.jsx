/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { ReceiveSquare } from "iconsax-react";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import "../styles/stats-view.css";
import StatsTable from "./StatsTable";

export default function StatsView() {
  const [stats, setStats] = useState({});
  const [listData, setListData] = useState([]);
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(1);
  const [itemsPerPage,] = useState(15);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    axios
      .get(
        "https://admindevapi.wowtalent.live/api/admin/dashboard/installstatasticcount?fromdate=2022-07-01&todate=2022-07-14"
      )
      .then((response) => {
        setStats(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(
        "https://admindevapi.wowtalent.live/api/admin/dashboard/installstatasticlist?fromdate=2021-04-01&todate=2022-07-01"
      )
      .then((response) => {
        setListData(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(listData.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(listData.length / itemsPerPage));
  }, [listData, itemOffset, itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % listData.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  var statsData = [
    {
      key: "App Installed",
      value: stats ? stats.totalInstall : "NA",
      icon: "",
    },
    {
      key: "Active Installs",
      value: stats ? stats?.activeinstall : "NA",
      icon: "",
    },
    {
      key: "Churn Rate",
      value: stats ? stats?.churn : "NA",
      icon: "",
    },
    {
      key: "App Un-installed",
      value: stats ? stats?.totaluninstall : "NA",
      icon: "",
    },
    {
      key: "Alive App Users",
      value: stats ? stats?.aliveappusers : "NA",
      icon: "",
    },
    {
      key: "Alive Churn Rate",
      value: stats ? stats?.alivechurn : "NA",
      icon: "",
    },
  ];

  return (
    <div>
      <div id="stats-list">
        <div className="stats-view-container">
          <div className="all-stats-container">
            {stats ? (
              statsData.map((data) => (
                <div className="single-stats-container">
                  <div className="single-stats-icon">
                    <ReceiveSquare size={30} />
                  </div>
                  <div className="single-stats-data">
                    <p className="single-stats-value">{data.value}</p>
                    <p className="single-stats-key">{data.key}</p>
                  </div>
                </div>
              ))
            ) : (
              <p>Loading</p>
            )}
          </div>
        </div>
      </div>
      {listData.length === 0 ? (
        <p>Loading</p>
      ) : (
        <div id="table-list">
          <StatsTable tableData={currentItems} />
          <div className="pagination-container">
            <ReactPaginate
              previousLabel={"←"}
              nextLabel={"→"}
              pageCount={pageCount}
              pageRangeDisplayed={2}
              onPageChange={handlePageClick}
              containerClassName={"pagination"}
              previousLinkClassName={"pagination__link"}
              nextLinkClassName={"pagination__link"}
              disabledClassName={"pagination__link--disabled"}
              activeClassName={"pagination__link--active"}
            />
          </div>
        </div>
      )}
    </div>
  );
}
