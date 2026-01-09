import React from 'react';
import './Flow.css';

const Step = ({ number, title, content, note, link, linkText }) => (
    <div className="step-card">
        <div className="step-number">STEP {number}</div>
        <h3 className="step-title">{title}</h3>
        <p className="step-content">{content}</p>
        {note && <p className="step-note">{note}</p>}
        {link && (
            <a href={link} target="_blank" rel="noreferrer" className="btn btn-outline step-btn">
                {linkText}
            </a>
        )}
        {number !== 3 && <div className="step-arrow">▼</div>}
    </div>
);

const Flow = () => {
    return (
        <section className="flow section">
            <div className="container">
                <h2 className="section-title text-center">申し込み～参加までの流れ</h2>
                <div className="flow-container">
                    <Step
                        number={1}
                        title="申し込み（決済）"
                        content="Stripe決済画面へ移動し、受講料をお支払いください。"
                        note="※クレジットカード等が利用可能です"
                        link="https://buy.stripe.com/test_dummy"
                        linkText="申し込み・決済へ進む"
                    />
                    <Step
                        number={2}
                        title="アンケート回答【必須】"
                        content="決済完了後、Googleフォームにて「作りたいアプリのアイデア」をご回答ください。"
                        note="※この回答をもとに、当日用のAIプロンプトを準備します"
                        link="https://docs.google.com/forms/d/e/1FAIpQLSdzMuaQcz7XeyIJaKjyT5-rdiCIGSdEJiCWv8rhdVSueSLFxQ/viewform?usp=dialog"
                        linkText="アンケートに回答する"
                    />
                    <Step
                        number={3}
                        title="申し込み完了"
                        content="当日は会場（日本体育大学医療専門学校）へお越しください。"
                        note="※開始5分前までにご集合ください"
                    />
                </div>
            </div>
        </section>
    );
};

export default Flow;
