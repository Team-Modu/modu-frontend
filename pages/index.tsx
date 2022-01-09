import { useAuth } from "hooks/useAuth";
import type { NextPage } from "next";
import About from "../components/main/About";
import Intro from "../components/main/Intro";

const IndexPage: NextPage = () => {
  // useEffect(() => {
  //   window.addEventListener('wheel', (e) => {
  //     e.preventDefault()
  //   }, {passive: false})
  // }, [])
  const isAccountLoading = useAuth();
  if (isAccountLoading) {
    return <div>Loading</div>;
  }
  return (
    <div>
      <div className="max-screen scroll-smoothr relative">
        <div className="main-background"></div>
        <Intro />
      </div>
      <About />
    </div>
  );
};

export default IndexPage;
