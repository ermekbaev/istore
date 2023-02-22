import React from "react";

const Footer = () => {
  return (
    <div class="bg-white">
      <div class="bg-red-700 w-80 h-1"></div>
      <div class="pt-20 px-4 md:px-16 pb-20 ">
        <div class="flex flex-col md:flex-row">
          <div class="md:w-3/12 pr-10.5">
            <h3 class="text-black text-2xl cursor-pointer capitalize">
              MONKEYNFT
            </h3>
            <p class="text-gray-700 text-base py-6 ">
              The largest NFT Marketplace. Unique and authentic digital
              creations. Made possible by blockchain technology.
            </p>
            <ul class="flex text-gray-700 cursor-pointer">
              <li class="pr-2">
                <a>logo</a>
              </li>
              <li class="pr-2">
                <a>logo</a>
              </li>
              <li class="pr-2">
                <a>logo</a>
              </li>
              <li class="pr-2">
                <a>logo</a>
              </li>
              <li class="pr-2">
                <a>logo</a>
              </li>
            </ul>
          </div>
          <div class="flex justify-between md:w-9/12 pl-4 md:pl-14 pt-4 text-base cursor-pointer">
            <div>
              <ul>
                <li class="text-lg text-black mb-7 md:mb-0">My Account</li>
                <li class="text-gray-700 py-5">Profile</li>
                <li class="text-gray-700 py-5">Collections</li>
                <li class="text-gray-700 py-5">Favourites</li>
                <li class="text-gray-700 py-5">Settings</li>
              </ul>
            </div>
            <div>
              <ul>
                <li class="text-lg text-black mb-7 md:mb-0">Marketplace</li>
                <li class="text-gray-700 py-5">Explore</li>
                <li class="text-gray-700 py-5">All NFT</li>
                <li class="text-gray-700 py-5">Collectible</li>
                <li class="text-gray-700 py-5">All World</li>
              </ul>
            </div>
            <div>
              <ul>
                <li class="text-lg text-black mb-7 md:mb-0">Resources</li>
                <li class="text-gray-700 py-5">Help Center</li>
                <li class="text-gray-700 py-5">Partners</li>
                <li class="text-gray-700 py-5">Blog</li>
                <li class="text-gray-700 py-5">Newsletter</li>
              </ul>
            </div>
            <div>
              <ul>
                <li class="text-lg text-black mb-7 md:mb-0">Company</li>
                <li class="text-gray-700 py-5">About Us</li>
                <li class="text-gray-700 py-5">Careers</li>
                <li class="text-gray-700 py-5">Support</li>
                <li class="text-gray-700 py-5">Rankings</li>
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
