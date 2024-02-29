import Link from "next/link";
import { Context } from "@/context/context";
import { StyledSidebar, Overlay, ContainerSidebar } from "./style";
import { useContext } from "react";
import axios from "axios";
import StatusApi from "../StatusApi";

const Sidebar = () => {
  const { router, tokenLocal, setUser, showSideBar } = useContext(Context);

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
      <StyledSidebar>
        <Overlay onClick={showSideBar} />
        <ContainerSidebar>
          <nav>
            <Link href="/" className="link" onClick={showSideBar}>
              Homepage
            </Link>
            <Link href="/about" className="link" onClick={showSideBar}>
              About us
            </Link>
            <Link href="/shop" className="link" onClick={showSideBar}>
              Shop
            </Link>
            <Link href="/blog" className="link" onClick={showSideBar}>
              Blog
            </Link>
            {tokenLocal && (
              <>
                <Link
                  href="/transactions"
                  className="link"
                  onClick={showSideBar}
                >
                  My transactions
                </Link>
              </>
            )}
          </nav>
          {tokenLocal ? (
            <div className="login-register">
              <StatusApi />
              <button
                className="login"
                onClick={() => {
                  onLogout({ token: tokenLocal, url: "/" });
                  localStorage.clear();
                  showSideBar();
                }}
              >
                Logout
              </button>
              <button
                className="btn-register"
                onClick={() => {
                  onProfile({ token: tokenLocal });
                  router.push("/profile");
                  showSideBar();
                }}
              >
                My account
              </button>
            </div>
          ) : (
            <div className="login-register">
              <StatusApi />
              <button
                className="login"
                onClick={() => {
                  showSideBar();
                  router.push("/login");
                }}
              >
                Login
              </button>
              <button
                className="btn-register"
                onClick={() => {
                  showSideBar();
                  router.push("/register");
                }}
              >
                Get started
              </button>
            </div>
          )}
        </ContainerSidebar>
      </StyledSidebar>
    </>
  );
};

export default Sidebar;
