import React from "react";
import { Link } from "react-router-dom";
import "../style/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-nav">
        <Link to="/notice/12345">
          <span className="footer-nav-item">이용 약관</span>
        </Link>
        <Link to="/customer-service">
          <span className="footer-nav-item">고객센터</span>
        </Link>
        <Link to="/notice/54321">
          <span className="footer-nav-item">당나번공 정책</span>
        </Link>
        <Link to="/notice/00000">
          <span className="footer-nav-item">회사 소개</span>
        </Link>
        <Link to="/notice/01234">
          <span className="footer-nav-item">개인 정보</span>
        </Link>
      </div>
      <br />
      <div>
        <span className="contact-phone">010-1234-5678</span>
        <div className="contact-box">
          <span className="contact-info">대표: 이준혁</span>
          <span className="contact-info">이메일: email@dang.com</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
