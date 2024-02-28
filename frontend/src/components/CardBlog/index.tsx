import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

import { ICardBlog } from "@/interfaces/ICardBlog/ICardBlog";

import { StyledCard } from "./style";

const Card = ({
  background_color,
  details_color,
  link_color,
  title,
  text_details,
  route,
  image,
}: ICardBlog) => {
  
  return (
    <StyledCard
      background_color={background_color}
      details_color={details_color}
      link_color={link_color}
    >
      <div className="content-up">
        <Image
          className="image"
          src={image}
          fill
          alt="image"
        ></Image>
      </div>
      <div className="content-down">
        <div>
          <p className="title">{title}</p>
          <p className="details">{text_details}</p>
        </div>
        <Link className="link" href={route}>
          Read Moreㅤ
          <FaArrowRight />
        </Link>
      </div>
    </StyledCard>
  );
}

export default Card;
