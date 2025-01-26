import {  FaFacebookF, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import qzone1 from '../../../assets/swimming.png'
import qzone2 from '../../../assets/class.png'
import qzone3 from '../../../assets/playground.png'
const RightSideNav = () => {
  return (
    <div>
      <div className="p-4 space-y-3 mb-6">
        <h2 className="text-2xl">Login with</h2>
        <button className="btn btn-outline w-full">
          <FaGoogle></FaGoogle>
          Google
        </button>
        <button className="btn btn-outline w-full">
          <FaGithub></FaGithub>
          Github
        </button>
      </div>

      {/* 2 */}
      <div className="p-4  mb-6">
        <h2 className="text-2xl mb-3">Find Us On</h2>
        <a href="" className="p-4 flex items-center border-2 rounded-t-lg">
            <FaFacebookF className="mr-3"></FaFacebookF>
            Facebook
        </a>
        <a href="" className="p-4 flex items-center  border-x">
            <FaTwitter className="mr-3"></FaTwitter>
            Twitter
        </a>
        <a href="" className="p-4 flex items-center border-2 rounded-b-lg">
            <FaInstagram className="mr-3"></FaInstagram>
            Instagram
        </a>
      </div>

      {/* 3 */}
      <div className="p-4 space-y-3 mb-6 bg-gray-200">
        <h2 className="text-2xl">Q-Zone</h2>
        <img src={qzone1} alt="" />
        <img src={qzone2} alt="" />
        <img src={qzone3} alt="" />
      </div>
    </div>
  );
};

export default RightSideNav;
