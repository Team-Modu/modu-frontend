import Link from "next/link";

const Logo = () => {
  return (
    <span>
      <Link href={"/"}>
        <a>
          <span className="title-font font-light text-color1">modu</span>
          <span className="title-font font-bold ml-0.5 text-color1">bus</span>
        </a>
      </Link>
    </span>
  );
};

export default Logo;
