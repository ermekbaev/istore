import React from "react";

const Footer = () => {
  return (
    <div className="bg-white">
      <div className="bg-red-700 w-80 h-1"></div>
      <div className="pt-20 px-4 md:px-16 pb-20 ">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-3/12 pr-10.5">
            <h3 className="text-black text-2xl cursor-pointer capitalize">
              MONKEYNFT
            </h3>
            <p className="text-gray-700 text-base py-6 ">
              The largest NFT Marketplace. Unique and authentic digital
              creations. Made possible by blockchain technology.
            </p>
            <ul className="flex text-gray-700 cursor-pointer">
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
          <div className="flex justify-between md:w-9/12 pl-4 md:pl-14 pt-4 text-base cursor-pointer">
            <div>
              <ul>
                <li className="text-lg text-black mb-7 md:mb-0">My Account</li>
                <li className="text-gray-700 py-5">Profile</li>
                <li className="text-gray-700 py-5">Collections</li>
                <li className="text-gray-700 py-5">Favourites</li>
                <li className="text-gray-700 py-5">Settings</li>
              </ul>
            </div>
            <div>
              <ul>
                <li className="text-lg text-black mb-7 md:mb-0">Marketplace</li>
                <li className="text-gray-700 py-5">Explore</li>
                <li className="text-gray-700 py-5">All NFT</li>
                <li className="text-gray-700 py-5">Collectible</li>
                <li className="text-gray-700 py-5">All World</li>
              </ul>
            </div>
            <div>
              <ul>
                <li className="text-lg text-black mb-7 md:mb-0">Resources</li>
                <li className="text-gray-700 py-5">Help Center</li>
                <li className="text-gray-700 py-5">Partners</li>
                <li className="text-gray-700 py-5">Blog</li>
                <li className="text-gray-700 py-5">Newsletter</li>
              </ul>
            </div>
            <div>
              <ul>
                <li className="text-lg text-black mb-7 md:mb-0">Company</li>
                <li className="text-gray-700 py-5">About Us</li>
                <li className="text-gray-700 py-5">Careers</li>
                <li className="text-gray-700 py-5">Support</li>
                <li className="text-gray-700 py-5">Rankings</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-between pt-[90px] text-basic text-gray-700">
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
