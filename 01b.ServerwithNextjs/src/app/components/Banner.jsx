import Link from "next/link";
import logo from "../../assets/GloboLogo.png"
import {logo as logoClass} from "./Banner.module.css"

const Banner = ({ children }) => {
  return (
    <>
      <link rel="stylesheet" href="title.css" precedence="first" />
      <header className="row mb-4">
        <div className="col-5">
          <Link href={"/"}>
            <img src={logo.src} className={logoClass} alt="logo" />
          </Link>
        </div>
        <div className="col-7 mt-5 subtitleStyle">
          {children}
        </div>
      </header>
    </>
  );
}

export default Banner;