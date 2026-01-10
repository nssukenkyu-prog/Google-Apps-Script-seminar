import React from 'react';
import { AlertTriangle, ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-glow"></div>
            <div className="container hero-container">
                <div className="hero-content">
                    <div className="hero-tag">
                        <AlertTriangle className="tag-icon" size={18} /> まだ、手作業で消耗してるの？
                    </div>
                    <h1 className="hero-title">
                        <span className="text-gradient">「アイデアを形にする」</span><br />
                        <span className="text-white">若手教員のための<br />Google Apps Script入門講座</span>
                    </h1>
                    <p className="hero-subtitle">
                        ～明日からの業務が劇的に変わるアプリ開発体験～
                    </p>
                    <div className="hero-cta">
                        <button className="btn btn-primary btn-lg">
                            今すぐ申し込む
                            <ArrowRight className="btn-icon" size={24} />
                        </button>
                        <p className="hero-note">※ 先着20名限定 / 枠が埋まり次第終了</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
