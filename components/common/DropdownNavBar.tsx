interface IDropdownNavBarProps {
  isNavOpen: boolean;
}

const DropdownNavBar: React.FC<IDropdownNavBarProps> = ({ isNavOpen }) => {
  return (
    <div
      className={`dropdown-navbar-container ${
        isNavOpen ? "grid transition ease-linear" : "hidden"
      } nav-top`}
    >
      <div className="logo-container"></div>
      <div className="navbar-container text-sm text-gray-500">
        <div className="full-content nav-items-grid">
          <span>메인</span>
          <span>기술과 안전</span>
          <span>서비스</span>
        </div>
      </div>
      <div className="profile-container">내 프로필</div>
    </div>
  );
};

export default DropdownNavBar;
