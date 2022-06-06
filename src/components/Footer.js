import React from "react";

const Footer = () => {
  return (
    <div className="py-3 mt-3 bg-light text-center">
      <footer>
        <span>
          &copy; {new Date().getFullYear()}{" "}
          <a
            href="https://github.com/deri-kurniawan"
            target="_blank"
            rel="noreferrer"
          >
            D-Notes
          </a>{" "}
          All right reserved.
        </span>
      </footer>
    </div>
  );
};

export default Footer;
