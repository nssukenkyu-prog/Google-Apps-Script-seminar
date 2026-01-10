import React from 'react';
import { Check } from 'lucide-react';
import './Checklist.css';

const Checklist = () => {
    return (
        <section className="checklist section">
            <div className="container">
                <h2 className="section-title text-center">必須の持ち物・環境</h2>
                <p className="text-center checklist-intro">※これらがないとご参加いただけません</p>

                <div className="glass-card checklist-box">
                    <ul className="checklist-items">
                        <li>
                            <Check className="check-icon" size={24} color="var(--color-success)" />
                            <div className="check-content">
                                <strong>ノートPC（Windows / Mac）</strong>
                                <p>※タブレット・スマホは不可</p>
                            </div>
                        </li>
                        <li>
                            <Check className="check-icon" size={24} color="var(--color-success)" />
                            <div className="check-content">
                                <strong>Googleアカウント</strong>
                                <p>※個人のGmailアカウント（推奨）</p>
                            </div>
                        </li>
                        <li>
                            <Check className="check-icon" size={24} color="var(--color-success)" />
                            <div className="check-content">
                                <strong>生成AI 有料版アカウント</strong>
                                <p>Gemini Advanced または ChatGPT Plus <span className="tag-required">必須</span></p>
                            </div>
                        </li>
                        <li>
                            <Check className="check-icon" size={24} color="var(--color-success)" />
                            <div className="check-content">
                                <strong>クレジットカード</strong>
                                <p>※OpenAI API利用登録のため（当日持参）</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Checklist;
