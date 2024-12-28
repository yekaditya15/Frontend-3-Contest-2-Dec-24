import React from "react";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="logo">
        <img
          src="https://s3-alpha-sig.figma.com/img/6c30/5666/5f8945b573189c004e90e2728a92eb63?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mR~BZogC-BEmdI9A6J6uvRjoUkPQuc7fBUaXljkM-xJTZ2ew9f-xrWaqgHnMiX5bxtDxBgjUwdZqQFPASWCVZ-ubj6H0XXwQHhBZeW2d9poDanp5u5Upbnt-G11GXsbbcXmlMAWC71YJ4PK3DbJ94syiqz~3tQqVxtnWYIAn~BVIeToSujIPwJlPaIiwh0S9knyq0NEYOmhSeXpweAsoF1iUTWpDmexSET9fOkrQ602~EM5gHCcpM8PzHxvickrXtdRyG-uExKV3kGJ-Y24l1sFipUxHiz3ilbciRfyWUJBXXzT0TJ3VuFnNPXGTxj0Zn4i~JTZUiCc~efSd0P6rPQ__"
          alt="Restaurant Logo"
          className="logo-image"
        />
        <h2>Your Restaurant Menu</h2>
        <p>
          <span style={{ color: "red" }}>Your Slogan</span>
        </p>
      </div>
      <nav>
        <h3>Quick Links</h3>
        <ul className="numbered">
          <li>Home</li>
          <li>Your Orders</li>
          <li>Wallet</li>
          <li>Profile</li>
          <li>Logout</li>
        </ul>
        <h3>More About Us</h3>
        <ul className="numbered">
          <li>Our Blog</li>
          <li>Upcoming Dishes</li>
          <li>Our Story</li>
          <li>Social Media Links</li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
