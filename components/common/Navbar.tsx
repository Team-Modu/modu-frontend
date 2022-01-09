import { useRouter } from "next/router";
import { Dispatch, SetStateAction, useCallback, useContext } from "react";
import AccountContext from "./contexts/Account.context";

interface INavBarProps {
  setIsNavOpen: Dispatch<SetStateAction<boolean>>;
}

const Navbar: React.FC<INavBarProps> = ({ setIsNavOpen }) => {
  const { account } = useContext(AccountContext);
  const router = useRouter();
  const handleHeaderClick = useCallback(() => {
    setIsNavOpen((beforeState) => !beforeState);
  }, [setIsNavOpen]);

  const handleOpenApiClick = useCallback(() => {
    if (!account) {
      return alert("로그인 후 사용가능합니다.");
    }
    window.open(process.env.OPEN_API_URI);
  }, [account]);
  return (
    <>
      <div className="nav-items-grid navbar">
        <span></span>
        <span onClick={handleHeaderClick}>기술과 안전</span>
        <span onClick={handleHeaderClick}>서비스</span>
        <button onClick={handleOpenApiClick}>
          <span>Open API</span>
        </button>
      </div>
    </>
  );
};

export default Navbar;
