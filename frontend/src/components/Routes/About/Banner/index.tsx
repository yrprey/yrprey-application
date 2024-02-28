import Image from "next/image";
import Counter from "../Counter";
import { StyledBannerSection } from "./style";

const Banner = () => {

  return (
    <StyledBannerSection>
      <Image className="img-banner-about" src={'/banner-about.webp'} alt="banner-main" width={10000}
        height={10000}
      />
    </StyledBannerSection>
  );
}

export default Banner;
