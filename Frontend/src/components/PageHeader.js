import React, { useEffect } from "react";
import { FaTicketAlt } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import "../styles/pagetop.css";

const PageHeader = ({
  onLoginClick,
  onProfileClick,
  isAdminLogged,
  isUserLogged,
}) => {
  useEffect(() => {
    console.log("inside page header", isUserLogged);
  }, [isUserLogged]);
  return (
    <header role="banner">
      <div className="banner">
        <div className="header-left">
          <a href="/" className="">
            <img
              alt="Adelaide Fringe: 21 Feb - 23 Mar 2025"
              src="https://d2cudhp9dwbqkd.cloudfront.net/release-20250307/assets/logo-mobile-1aaaebd6.svg"
              height="100px"
              width="170px"
            />
          </a>
          <span className="vertical-line"></span>
          <a href="http://banksa.com.au" className="">
            <img
              alt="Principal BankSA"
              src="https://d2cudhp9dwbqkd.cloudfront.net/release-20250307/assets/partners/banksa-header-fd500590.svg"
            />
          </a>
        </div>

        <div className="header-right">
          <a
            className=""
            href="/fringetix"
            style={{
              backgroundColor: "orange",
              padding: "10px",
              borderRadius: "5px",
              marginRight: "10px",
              alignItems: "center",
              textDecoration: "none",
            }}
          >
            <FaTicketAlt
              aria-label="Ticket"
              size={32} // Adjust the size as needed
              title="Ticket Icon"
              style={{ marginRight: "8px", color: "black" }}
            />
            <span className="span">Explore Shows</span>
          </a>

          <a className="a" href="/">
            <img
              alt="Planner"
              src="https://d2cudhp9dwbqkd.cloudfront.net/release-20250307/assets/icons/planner-2cc68321.svg"
              width={27}
              height={27}
            />
            <span data-visible="desktop" className="span">
              Planner
            </span>
          </a>

          <a className="a" href="" onClick={(e) => e.preventDefault()}>
            <img
              alt="MyFringe"
              src="https://d2cudhp9dwbqkd.cloudfront.net/release-20250307/assets/header/profile-eb465928.svg"
              width={27}
              height={27}
            />
            {isAdminLogged || isUserLogged ? (
              <span
                data-visible="desktop"
                className="span"
                onClick={onProfileClick}
              >
                My Fringe
              </span>
            ) : (
              <span
                data-visible="desktop"
                className="span"
                onClick={onLoginClick}
              >
                Log In
              </span>
            )}
          </a>

          <turbo-frame src="https://adelaidefringe.com.au/cart" target="_top">
            <a id="header-shop" className="a" href="/">
              <img
                alt="Cart"
                src="https://d2cudhp9dwbqkd.cloudfront.net/release-20250307/assets/header/cart-49591a37.svg"
                width={27}
                height={27}
              />
              <span className="button__count" hidden="hidden">
                0
              </span>
            </a>
          </turbo-frame>
        </div>

        <span className="horizontal-line"></span>
        <div className="section-container">
          <div className="nav-links">
            <a className="tags" href="/">
              What's On
            </a>
            <a className="tags" href="/">
              Info
            </a>
            <a className="tags" href="/">
              Fringe Feed
            </a>
            <a className="tags" href="/">
              Support Us
            </a>
            <a className="tags" href="/">
              Shop
            </a>
          </div>

          <div className="search-container">
            <span className="vertical-line"></span>
            <p className="tags">
              Search shows
              <IoSearchSharp
                size={30}
                style={{ marginBottom: "10px", marginLeft: "5px" }}
              />
            </p>
          </div>
        </div>

        <span className="horizontal-line"></span>
      </div>
    </header>
  );
};

export default PageHeader;
