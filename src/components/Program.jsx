import React from 'react';
import './Program.css';

const ProgramItem = ({ time, title, description }) => (
    <div className="glass-card program-item">
        <div className="program-time">{time}</div>
        <div className="program-content">
            <h3 className="program-title">{title}</h3>
            <p className="program-desc">{description}</p>
        </div>
    </div>
);

const Program = () => {
    return (
        <section className="program section">
            <div className="container">
                <h2 className="section-title text-center">プログラム構成</h2>
                <div className="timeline">
                    <ProgramItem
                        time="13:00"
                        title="導入・マインドセット"
                        description="教育DXの鍵は「現場の知見」。AI活用で何が変わるのか？"
                    />
                    <ProgramItem
                        time="13:20"
                        title="基礎編（コピペで学ぶGAS体験）"
                        description="スクリプトを「貼って動かす」体験を通じて、仕組みを理解します。"
                    />
                    <ProgramItem
                        time="14:20"
                        title="実践アプリ構築"
                        description="AIと一緒に、あなたのアイデアを実際に「動くアプリ」にします。"
                    />
                    <ProgramItem
                        time="16:40"
                        title="成果発表・まとめ"
                        description="作成したツールの共有と、今後の展望について。"
                    />
                </div>
            </div>
        </section>
    );
};

export default Program;
