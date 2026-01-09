import React from 'react';
import './Overview.css';

const OverviewItem = ({ label, value, icon, link }) => (
    <div className="overview-item">
        <div className="overview-icon">{icon}</div>
        <div className="overview-content">
            <h4 className="overview-label">{label}</h4>
            {link ? (
                <a href={link} target="_blank" rel="noreferrer" className="overview-value link">
                    {value} <span className="text-sm">↗</span>
                </a>
            ) : (
                <p className="overview-value">{value}</p>
            )}
        </div>
    </div>
);

const Overview = () => {
    return (
        <section className="overview section">
            <div className="container">
                <h2 className="section-title text-center">開催概要</h2>
                <div className="overview-grid">
                    <OverviewItem
                        icon="📅"
                        label="日時"
                        value="2026年3月18日（水） 13:00 ～ 17:00"
                    />
                    <OverviewItem
                        icon="📍"
                        label="会場"
                        value="日本体育大学医療専門学校（東京都世田谷区用賀2-2-7）"
                        link="https://maps.google.com/?q=日本体育大学医療専門学校"
                    />
                    <OverviewItem
                        icon="👥"
                        label="定員"
                        value="20名（先着順）"
                    />
                    <OverviewItem
                        icon="💰"
                        label="受講料"
                        value="3,000円"
                    />
                    <OverviewItem
                        icon="🎯"
                        label="対象"
                        value="柔道整復師・教員（※今回は学会員以外も参加可能！）"
                    />
                </div>
            </div>
        </section>
    );
};

export default Overview;
