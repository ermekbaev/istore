import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import avatar from "./images/avatar.png";

const pages = [
  { name: "Главная", link: "/", id: 1 },
  { name: "Модели", link: "/models", id: 2 },
  { name: "Авто с пробегом", link: "/mileage", id: 3 },
  { name: "Аренда авто", link: "/rent", id: 4 },
  { name: "Detailing Studio", link: "/detailing", id: 5 },
  { name: "Покупка", link: "/buy", id: 6 },
  { name: "Для бизнеса", link: "/buisness", id: 7 },
  { name: "Сервис", link: "/servises", id: 8 },
];

const auth = [
  { name: "Регистрация", link: "/register", id: 9 },
  { name: "Вход", link: "/login", id: 10 },
];

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex items-center justify-between border-b border-gray-400 py-2">
        <a href="/">
          <h3 className=" w-1/6 text-center">LOGO</h3>
        </a>
        <nav className="flex items-center mr-5">
          <section className="MOBILE-MENU flex lg:hidden">
            <div
              className="HAMBURGER-ICON space-y-2 "
              onClick={() => setIsNavOpen((prev) => !prev)}
            >
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            </div>

            <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
              <div
                className="absolute top-0 right-0 px-8 py-8"
                onClick={() => setIsNavOpen(false)}
              >
                <svg
                  className="h-8 w-8 text-gray-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
              <ul className="flex flex-col items-center justify-between">
                {pages.map((page) => (
                  <li
                    onClick={() => setIsNavOpen(false)}
                    className=" lg:text-sm L:text "
                    key={page.id}
                  >
                    <Link to={page.link}>
                      <span>{page.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
            {pages.map((page) => (
              <li className="" key={page.id}>
                <Link to={page.link}>
                  <span>{page.name}</span>
                </Link>
              </li>
            ))}
          </ul>

          <div
            onClick={() => setIsAuthOpen((prev) => !prev)}
            className="w-1/5 text-right md:w-20 M2:w-16 smallM:w-12"
          >
            <div>
              <button className="mr-6 M2:mr-3 smallM:mr-1.5">
                <img
                  src={avatar}
                  alt="avatar"
                  className="w-14 h-14  M:w-10 M:h-10 M2:w-9 M2:h-9 smallM:w-8 smallM:h-8"
                />
              </button>
            </div>
          </div>
        </nav>
        <style>{`
        .hideMenuNav {
           display: none;
         }
         .showMenuNav {
            display: block;
            position: absolute;
            width: 100%;
            height: 60vh;
            top: 0;
            left: 0;
            background: white;
            z-index: 10;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
         }
         .hideAuth {
            display: none;
         }
         .showAuth {
            float:right;
         }
         `}</style>
      </div>
      <div className="mr-5">
        <ul className={isAuthOpen ? "showAuth" : "hideAuth"}>
          {auth.map((auth) => (
            <li onClick={() => setIsAuthOpen(false)} key={auth.id}>
              <Link to={auth.link}>
                <span>{auth.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
