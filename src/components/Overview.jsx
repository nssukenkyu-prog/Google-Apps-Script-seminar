import React from 'react';
import { Calendar, MapPin, Users, Banknote, Target, ExternalLink } from 'lucide-react';
import './Overview.css';

const OverviewItem = ({ label, value, Icon, link }) => (
    <div className="glass-card overview-card">
        <div className="overview-icon-wrapper">
            <Icon size={28} color="white" />
        </div>
        <div className="overview-content">
            <h4 className="overview-label">{label}</h4>
            {link ? (
                <a href={link} target="_blank" rel="noreferrer" className="overview-value link">
                    {value} <ExternalLink className="arrow-icon" size={16} />
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
                        Icon={Calendar}
                        label="日時"
                        value="2026年3月18日（水） 13:00 ～ 17:00"
                    />
                    <OverviewItem
                        Icon={MapPin}
                        label="会場"
                        value="日本体育大学医療専門学校"
                        link="https://maps.google.com/?q=日本体育大学医療専門学校"
                    />
                    <OverviewItem
                        Icon={Users}
                        label="定員"
                        value="20名（先着順）"
                    />
                    <OverviewItem
                        Icon={Banknote}
                        label="受講料"
                        value="3,000円"
                    />
                    <OverviewItem
                        Icon={Target}
                        label="対象"
                        value="柔道整復師・教員"
                    />
                </div>
            </div>
        </section>
    );
};

export default Overview;
