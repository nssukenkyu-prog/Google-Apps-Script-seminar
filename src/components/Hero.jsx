import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-overlay"></div>
            <div className="container hero-container">
                <div className="hero-content">
                    <span className="hero-tag">日本柔道整復接骨医学会 柔道整復学教育分科会 主催</span>
                    <h1 className="hero-title">
                        「アイデアを形にする」<br />
                        若手教員のための<br />
                        <span className="text-accent">Google Apps Script</span>入門講座
                    </h1>
                    <p className="hero-subtitle">
                        ～明日からの業務が劇的に変わるアプリ開発体験～
                    </p>
                    <div className="hero-cta">
                        <a href="https://buy.stripe.com/test_dummy" className="btn btn-primary btn-lg">
                            講座に申し込む（¥3,000）
                        </a>
                        <p className="hero-note">※Stripe決済ページへ移動します</p>
                    </div>
                </div>
                <div className="hero-visual">
                    {/* Image will be set via CSS background or img tag here */}
                </div>
            </div>
        </section>
    );
};

export default Hero;
