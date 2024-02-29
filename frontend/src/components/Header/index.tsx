import React, { useContext, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Context } from "@/context/context";
import axios from "axios";
import { FaBars, FaTimes } from "react-icons/fa";

import StatusApi from "@/components/StatusApi";
import Sidebar from "@/components/Sidebar";

import { HeaderContainer, DivHeader } from "./style";

const Header = () => {
  const {
    router,
    tokenLocal,
    isMobile,
    setUser,
    isSideBarVisible,
    showSideBar,
  } = useContext(Context);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const onProfile = async (data: any) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API}/profile`,
        data,
      );
      if (response.data.results[0].status === 200) {
        setUser(JSON.stringify(response.data.results[0]));
      }
    } catch (error) {
      error;
    }
  };

  const onLogout = async (data: any) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API}/logout`,
        data,
      );
      if (response.data.results[0].status === 200) {
        const responseData = response?.data?.results[0];
        window.location.href = responseData.msg;
      }
    } catch (error) {
      error;
    }
  };

  return (
    <>
      <HeaderContainer scrolled={scrolled}>
        <DivHeader>
          <div className="content">
            <div>
              <Link href="/">
                <Image
                  src={"/logo-letter.webp"}
                  width={130}
                  height={30}
                  sizes="100"
                  alt="logo-letter"
                  className="logo-header"
                ></Image>
              </Link>
            </div>
            {isMobile ? (
              <>
                {!isSideBarVisible ? (
                  <>
                    <FaBars className="menu-mobile" onClick={showSideBar} />
                  </>
                ) : (
                  <>
                    <FaTimes className="menu-mobile" onClick={showSideBar} />
                  </>
                )}
              </>
            ) : (
              <>
                <nav>
                  <Link href="/" className="link">
                    Homepage
                  </Link>
                  <Link href="/about" className="link">
                    About us
                  </Link>
                  <Link href="/shop" className="link">
                    Shop
                  </Link>
                  <Link href="/blog" className="link">
                    Blog
                  </Link>
                </nav>
                {tokenLocal ? (
                  <div className="login-register">
                    <button
                      className="login"
                      onClick={() => {
                        onLogout({ token: tokenLocal, url: "/" });
                        localStorage.clear();
                      }}
                    >
                      Logout
                    </button>
                    <button
                      className="btn-register"
                      onClick={() => {
                        onProfile({ token: tokenLocal });
                        router.push("/profile");
                      }}
                    >
                      My account
                    </button>
                  </div>
                ) : (
                  <div className="login-register">
                    <button
                      className="login"
                      onClick={() => router.push("/login")}
                    >
                      Login
                    </button>
                    <button
                      className="btn-register"
                      onClick={() => router.push("/register")}
                    >
                      Get started
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </DivHeader>
      </HeaderContainer>
      {!isMobile && <StatusApi />}
      {isSideBarVisible && isMobile && <Sidebar />}
    </>
  );
};

export default Header;
