import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import Link from "next/link";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaExternalLinkAlt,
} from "react-icons/fa";

import { IFormDrop } from "@/interfaces/FormDrop/IFormDrop";
import { formSchema } from "@/validators/drop";

import { StyledFooter, DivOne, DivTwo, DivTree } from "./style";

const Footer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormDrop>({
    resolver: yupResolver(formSchema),
  });

  return (
    <StyledFooter>
      <DivOne>
        <div className="container-footer">
          <div className="content-left">
            <p className="title">Never miss a drop.</p>
            <p className="paragrafh">
              Sign up for the latest news, drops and collectibles.
            </p>
          </div>
          <form className="content-right" onSubmit={handleSubmit(() => { })}>
            <label className={errors.email ? "error" : "no-error"}>
              {errors.email?.message}
            </label>
            <div>
                 <input className="input-subscribe"
                type="text"
                placeholder="Email Address"
                {...register("email")}
              />
                <button type="submit" className="btn-subscribe">
                  Subscribe Nowﾠ
                  <FaExternalLinkAlt />
                </button>
            </div>
          </form>
        </div>
      </DivOne>
      <DivTwo>
        <div className="content-left">
          <Image
            src={"/logo-letter.webp"}
            width="100"
            height="100"
            sizes="100"
            alt="logo-prey"
          ></Image>
          <p>
            We provide the best vulnerability and security experiences on the
            market.
          </p>
          <ul>
            <li>
              <button id="facebook" title="Facebook">
                <FaFacebookF />
              </button>
            </li>
            <li>
              <button id="twitter" title="Twitter">
                <FaTwitter />
              </button>
            </li>
            <li>
              <button id="instagram" title="Instagram">
                <FaInstagram />
              </button>
            </li>
            <li>
              <button>
                <FaLinkedinIn id="linkedinIn" title="LinkedinIn" />
              </button>
            </li>
          </ul>
        </div>
        <div className="content-right">
          <div>
            <p>Company</p>
            <Link href="/about" className="link">
              About Us
            </Link>
            <Link href="/shop" className="link">
              Our Collectibles
            </Link>
            <Link href="/blog" className="link">
              Our Blog
            </Link>
          </div>
          <div>
            <p>Page Links</p>
            <Link href="/" className="link">
              Home
            </Link>
            <Link href="/about" className="link">
              About
            </Link>
            <Link href="/shop" className="link">
              Shop
            </Link>
            <Link href="/blog" className="link">
              Blog
            </Link>
          </div>
          <div>
            <p>Solution</p>
            <Link href="" className="link">
              Security flaws
            </Link>
            <Link href="" className="link">
              Vulnerabilities
            </Link>
            <Link href="" className="link">
              Infrastruture
            </Link>
            <Link href="" className="link">
              Threat Hunter
            </Link>
            <Link href="" className="link">
              Disaster Planning
            </Link>
          </div>
        </div>
      </DivTwo>
      <DivTree>
        <p>Copyright © {new Date().getFullYear()} YRPrey. All rights reserved.</p>
      </DivTree>
    </StyledFooter>
  );
}

export default Footer;
