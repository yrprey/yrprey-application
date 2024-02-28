import { useContext } from "react";
import { StyledInitialSection } from "./style";
import { Context } from "@/context/context";
import Image from "next/image";

const InitialSection = () => {
  const { router } = useContext(Context);

  return (
    <StyledInitialSection>
      <div className="container">
        <div className="container-left">
          <h1>
            Your Complete <span>Vulnerability</span> Site.
          </h1>
          <p>Find the most beautiful collectibles in one place!</p>
            <button className="btn-initial" onClick={() => router.push("/register")}>
              Request free access
            </button>
        </div>
        <div className="container-right">
          <Image
            className="image"
            src={"/hacker-1.webp"}
            width="100"
            height="100"
            sizes="100"
            alt="padclock"
          ></Image>
        </div>
      </div>
    </StyledInitialSection>
  );
};

export default InitialSection;
