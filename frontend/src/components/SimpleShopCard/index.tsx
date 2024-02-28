import Image from "next/image";
import Link from "next/link";

import { StyledCardShopClean } from "./style";

import { ICardShopClean } from "@/interfaces/IChildren/ICardShop";

const CardShopClean = ({ image, title_image, title }: ICardShopClean) => {

  return (
    <StyledCardShopClean>
      <Link href="/shop/collection/red" className="link">
        <div className="card-shop-clean">
        <Image
          className="card-img"
          src={image}
          fill
          alt={title_image}
        ></Image>
        </div>
        <div className="card-details">
          <p className="text-title">{title}</p>
        </div>
      </Link>
    </StyledCardShopClean>
  );
}

export default CardShopClean;
