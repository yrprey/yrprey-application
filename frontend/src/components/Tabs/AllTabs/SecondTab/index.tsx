import React from "react";
import { StyledSecondTab } from "./style";
import { BsCheck2Circle } from "react-icons/bs";
import Link from "next/link";

const SecondTab = () => {
  return (
    <StyledSecondTab>
      <p>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using Content here, content here, making it
        look like readable English. Many desktop publishing packages and web
        page edito...
        <Link href="/about" className="link">
          View more
        </Link>
      </p>
      <div className="topic">
        <div>
          {" "}
          <p>
            <BsCheck2Circle className="icon" />
            ﾠSystem Security
          </p>
          <p>
            <BsCheck2Circle className="icon" />
            ﾠOpertional Security
          </p>
        </div>
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
      </div>
    </StyledSecondTab>
  );
};
export default SecondTab;
