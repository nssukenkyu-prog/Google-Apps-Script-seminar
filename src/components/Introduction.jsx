import React from 'react';
import './Introduction.css';

const Introduction = () => {
    return (
        <section className="intro section">
            <div className="container">

                <div className="intro-cards-container">
                    <div className="intro-card pain-card">
                        <h3 className="card-title text-center">こんな悩みありませんか？</h3>
                        <ul className="pain-list">
                            <li>
                                <span className="icon">🤔</span>
                                <p>教育DXと言われるが、<br />何から始めればいいかわからない</p>
                            </li>
                            <li>
                                <span className="icon">💬</span>
                                <p>生成AIを使っているが、<br />チャットや文章作成以外に使いたい</p>
                            </li>
                            <li>
                                <span className="icon">😫</span>
                                <p>プログラミングは難しそうで<br />自分には無理だと思っている</p>
                            </li>
                        </ul>
                    </div>

                    <div className="connection-arrow">
                        <span>⬇</span>
                        <p>その悩み、<br /><strong>AI×プログラミング</strong>で解決します</p>
                    </div>

                    <div className="intro-card solution-card">
                        <h3 className="card-title text-center text-primary">この講座の価値</h3>
                        <div className="solution-content">
                            <p className="main-message">
                                コードを書くのは<br />
                                <span className="text-accent underline">AI（Gemini/ChatGPT）</span>です。
                            </p>
                            <p className="sub-message">
                                プログラミング未経験でも大丈夫。<br />
                                たった4時間で、あなたの業務を楽にする<br />
                                「自分だけのアプリ」を作って持ち帰れます。
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Introduction;
