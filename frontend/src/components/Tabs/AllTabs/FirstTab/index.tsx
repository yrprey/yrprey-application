import React from "react";
import { StyledFirstTab } from "./style";
import { BsCheck2Circle } from "react-icons/bs";
import Link from "next/link";

const FirstTab = () => {

  return (
    <StyledFirstTab>
      <p>
        At YTPREY, we have a dedicated team of cybersecurity experts, each
        with extensive experience in different areas of the field. Our founding
        members have decades of combined experience in pentesting, vulnerability
        research, incident response, and security consulting for a variety of
        industries, including government, finance, healthcare, and technology...
        <Link href="/about" className="link">
          View more
        </Link>
      </p>
      <div className="topic">
        <div>
          <p>
            <BsCheck2Circle className="icon" />
            ﾠTrusted Partner
          </p>
          <p>
            <BsCheck2Circle className="icon" />
            ﾠProduct Security
          </p>
        </div>
        <div>
          <p>
            <BsCheck2Circle className="icon" />
            ﾠSystem Security
          </p>
          <p>
            <BsCheck2Circle className="icon" />
            ﾠOpertional Security
          </p>
        </div>
      </div>
    </StyledFirstTab>
  );
};
export default FirstTab;
