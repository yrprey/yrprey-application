import React from "react";
import { StyledThirdTab } from "./style";
import { BsCheck2Circle } from "react-icons/bs";
import Link from "next/link";

const ThirdTab = () => {
  return (
    <StyledThirdTab>
      <p>
        We understand the importance of transparency and ethics in all our activities.
        Our application is provided solely for educational and penetration testing purposes.
        We encourage our users to adhere to strict ethical standards and to respect privacy 
        and system integrity...
        <Link href="/about" className="link">
          View more
        </Link>
      </p>
      <div className="topic">
        <div>
          {" "}
          <p>
            <BsCheck2Circle className="icon" />
            ﾠProduct Security
          </p>
          <p>
            <BsCheck2Circle className="icon" />
            ﾠTrusted Partner
          </p>
        </div>

        <div>
          {" "}
          <p>
            <BsCheck2Circle className="icon" />
            ﾠOpertional Security
          </p>
          <p>
            <BsCheck2Circle className="icon" />
            ﾠSystem Security
          </p>
        </div>
      </div>
    </StyledThirdTab>
  );
};
export default ThirdTab;
