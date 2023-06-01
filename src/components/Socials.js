import React from "react";
import {
  ImFacebook,
  ImTwitter,
  ImPinterest,
  ImInstagram,
  ImYoutube,
} from "react-icons/im";

const Socials = () => {
  return (
    <div className="hidden xl:flex ml-24">
      <ul className="flex gap-x-4">
        <li>
          <a href="https://www.facebook.com" target="_blanck">
            <ImFacebook />
          </a>
        </li>
        <li>
          <a href="https://www.twitter.com" target="_blanck">
            <ImTwitter />
          </a>
        </li>
        <li>
          <a href="https://www.pinterest.com" target="_blanck">
            <ImPinterest />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com" target="_blanck">
            <ImInstagram />
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com" target="_blanck">
            <ImYoutube />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
