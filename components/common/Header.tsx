import { faUserCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Account } from "api/account";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import AccountContext from "./contexts/Account.context";
import DropdownNavBar from "./DropdownNavBar";
import Logo from "./Logo";
import Navbar from "./Navbar";

const Header = () => {
  const router = useRouter();
  const { account, setAccount } = useContext(AccountContext);
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

  const handleLoginClick = () => {
    router.push("/login");
  };

  const handleLogoutClick = async () => {
    const response = await Account.logout();
    if (response.status === 201) {
      setAccount(null);
      router.replace("/");
    }
  };

  const handleProfileClick = async () => {
    router.push("/profile");
  };
  return (
    <>
      <header className="header">
        <div className="logo-container">
          <Logo />
        </div>
        <div className="navbar-container text-base text-gray-700">
          <Navbar setIsNavOpen={setIsNavOpen} />
        </div>
        <div className="profile-container text-base text-gray-500">
          {account ? (
            <div className="flex items-center justify-end">
              <button className="text-xl mr-5" onClick={handleProfileClick}>
                <FontAwesomeIcon icon={faUserCircle} />
              </button>
              <button onClick={handleLogoutClick}>로그아웃</button>
            </div>
          ) : (
            <button
              className="font-medium text-base text-gray-500"
              onClick={handleLoginClick}
            >
              로그인
            </button>
          )}
        </div>
      </header>
      <DropdownNavBar isNavOpen={isNavOpen} />
    </>
  );
};

export default Header;
