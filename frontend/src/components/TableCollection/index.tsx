import React from "react";
import { FaCheckCircle, FaEthereum } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { Context } from "@/context/context";
import { useContext } from "react";
import { FaCartPlus } from "react-icons/fa";

import { StyledTableCollection } from "./style";

const TableCollection = () => {
  const { isMobile } = useContext(Context);

  return (
    <StyledTableCollection>
      <div className="content-table">
        <div className="scope-container">
          <div className="scope-content">
            <p>Collections</p>
            <p>Owners</p>
            <p>Items</p>
          </div>
        </div>
        <ul className="table-content">
          <li>
            <div className="card-table">
              <div className="collection-details">
                <p>1</p>
                <div>
                  <Image
                    className="img"
                    src={"/potion-red.webp"}
                    width="100"
                    height="100"
                    sizes="100"
                    alt="image"
                  ></Image>
                </div>
                <h4>
                  YRPrey Club Redﾠ
                  <FaCheckCircle className="checked" />
                </h4>
                <span>
                  <FaEthereum className="eth" />
                </span>
              </div>
              <p className="card-table-static">1</p>
              <p className="card-table-static">6</p>
            </div>
            {
              isMobile ? <>
                <Link href="/shop/collection/red" className="btn-top-collections">
                  <button className="btn-top-collections">
                    <FaCartPlus />
                  </button>
                </Link>
              </> : <>
                <Link href="/shop/collection/red" className="btn-top-collections">
                  <button className="btn-top-collections">
                    Purchase
                  </button>
                </Link>
              </>
            }
          </li>
          <li>
            <div className="card-table">
              <div className="collection-details">
                <p>2</p>
                <div>
                  <Image
                    className="img"
                    src={"/potion-blue.webp"}
                    width="100"
                    height="100"
                    sizes="100"
                    alt="image"
                  ></Image>
                </div>
                <h4>
                  YRPrey Club Blueﾠ
                  <FaCheckCircle className="checked" />
                </h4>
                <span>
                  <FaEthereum className="eth" />
                </span>
              </div>
              <p className="card-table-static">1</p>
              <p className="card-table-static">6</p>
            </div>
            {
              isMobile ? <>
                <Link href="/shop/collection/blue" className="btn-top-collections">
                  <button className="btn-top-collections">
                    <FaCartPlus />
                  </button>
                </Link>
              </> : <>
                <Link href="/shop/collection/blue" className="btn-top-collections">
                  <button className="btn-top-collections">
                    Purchase
                  </button>
                </Link>
              </>
            }
          </li>
          <li>
            <div className="card-table">
              <div className="collection-details">
                <p>3</p>
                <div>
                  <Image
                    className="img"
                    src={"/potion-white.webp"}
                    width="100"
                    height="100"
                    sizes="100"
                    alt="image"
                  ></Image>
                </div>
                <h4>
                  YRPrey Club Whiteﾠ
                  <FaCheckCircle className="checked" />
                </h4>
                <span>
                  <FaEthereum className="eth" />
                </span>
              </div>
              <p className="card-table-static">1</p>
              <p className="card-table-static">6</p>
            </div>
            {
              isMobile ? <>
                <Link href="/shop/collection/white" className="btn-top-collections">
                  <button className="btn-top-collections">
                    <FaCartPlus />
                  </button>
                </Link>
              </> : <>
                <Link href="/shop/collection/white" className="btn-top-collections">
                  <button className="btn-top-collections">
                    Purchase
                  </button>
                </Link>
              </>
            }
          </li>
          <li>
            <div className="card-table">
              <div className="collection-details">
                <p>4</p>
                <div className="container-img">
                  <Image
                    className="img"
                    src={"/potion-cian.webp"}
                    width="100"
                    height="100"
                    sizes="100"
                    alt="image"
                  ></Image>
                </div>
                <h4>
                  YRPrey Club Cianﾠ
                  <FaCheckCircle className="checked" />
                </h4>
                <span>
                  <FaEthereum className="eth" />
                </span>
              </div>
              <p className="card-table-static">1</p>
              <p className="card-table-static">6</p>
            </div>
            {
              isMobile ? <>
                <Link href="/shop/collection/cian" className="btn-top-collections">
                  <button className="btn-top-collections">
                    <FaCartPlus />
                  </button>
                </Link>
              </> : <>
                <Link href="/shop/collection/cian" className="btn-top-collections">
                  <button className="btn-top-collections">
                    Purchase
                  </button>
                </Link>
              </>
            }
          </li>
          <li>
            <div className="card-table">
              <div className="collection-details">
                <p>5</p>
                <div>
                  <Image
                    className="img"
                    src={"/potion-beige.webp"}
                    width="100"
                    height="100"
                    sizes="100"
                    alt="image"
                  ></Image>
                </div>
                <h4>
                  YRPrey Club Beigeﾠ
                  <FaCheckCircle className="checked" />
                </h4>
                <span>
                  <FaEthereum className="eth" />
                </span>
              </div>
              <p className="card-table-static">1</p>
              <p className="card-table-static">6</p>
            </div>
            {
              isMobile ? <>
                <Link href="/shop/collection/beige" className="btn-top-collections">
                  <button className="btn-top-collections">
                    <FaCartPlus />
                  </button>
                </Link>
              </> : <>
                <Link href="/shop/collection/beige" className="btn-top-collections">
                  <button className="btn-top-collections">
                    Purchase
                  </button>
                </Link>
              </>
            }
          </li>
        </ul>
      </div>
    </StyledTableCollection>
  );
};
export default TableCollection;
