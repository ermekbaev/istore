import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="bg-red-700 w-96 h-1"></div>
      <div className="pt-20 px-16 pb-20 ">
        <div className="flex">
          <div className="w-3/12 pr-10.5">
            <h3 className="text-white text-2xl cursor-pointer capitalize">
              MONKEYNFT
            </h3>
            <p className="text-slate-400 text-base py-6 ">
              The largest NFT Marketplace. Unique and <br></br> authentic
              digital creations. Made possible <br></br> by blockchain
              technology.
            </p>
            <ul className="flex text-slate-400 cursor-pointer">
              <li className="pr-2">
                <a>logo</a>
              </li>
              <li className="pr-2">
                <a>logo</a>
              </li>
              <li className="pr-2">
                <a>logo</a>
              </li>
              <li className="pr-2">
                <a>logo</a>
              </li>
              <li className="pr-2">
                <a>logo</a>
              </li>
            </ul>
          </div>
          <div className="flex justify-between w-9/12 pl-14 pt-4 text-base cursor-pointer">
            <div>
              <ul>
                <li className="text-lg mb-[7px]">My Account</li>
                <li className="text-slate-400 py-[5px]">Profile</li>
                <li className="text-slate-400 py-[5px]">Collections</li>
                <li className="text-slate-400 py-[5px]">Favourites</li>
                <li className="text-slate-400 py-[5px]">Settings</li>
              </ul>
            </div>
            <div>
              <ul>
                <li className="text-lg mb-[7px]">Marketplace</li>
                <li className="text-slate-400 py-[5px]">Explore</li>
                <li className="text-slate-400 py-[5px]">All NFT</li>
                <li className="text-slate-400 py-[5px]">Collectible</li>
                <li className="text-slate-400 py-[5px]">All World</li>
              </ul>
            </div>{" "}
            <div>
              <ul>
                <li className="text-lg mb-[7px]">Resources</li>
                <li className="text-slate-400 py-[5px]">Help Center</li>
                <li className="text-slate-400 py-[5px]">Partners</li>
                <li className="text-slate-400 py-[5px]">Blog</li>
                <li className="text-slate-400 py-[5px]">Newsletter</li>
              </ul>
            </div>
            <div>
              <ul>
                <li className="text-lg mb-[7xp]">Company</li>
                <li className="text-slate-400 py-[5px]">About Us</li>
                <li className="text-slate-400 py-[5px]">Careers</li>
                <li className="text-slate-400 py-[5px]">Support</li>
                <li className="text-slate-400 py-[5px]">Rankings</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-between pt-[90px] text-basic text-slate-400">
          <p>2023 © Copyright DMONKEY. All Rights Reserved</p>
          <div>
            <ul className="flex">
              <li className="pr-16">Terms Of Service</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
