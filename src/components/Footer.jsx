import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-org">
                        <h3>日本柔道整復接骨医学会<br />柔道整復学教育分科会</h3>
                    </div>
                    <div className="footer-policy">
                        <h4>キャンセルポリシー</h4>
                        <p>申し込み後の返金不可（代理出席は可）。</p>
                    </div>
                </div>
                <div className="footer-copyright text-center">
                    <p>&copy; 2026 日本柔道整復接骨医学会 柔道整復学教育分科会</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
