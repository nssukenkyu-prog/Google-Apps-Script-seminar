import React from 'react';
import './Scope.css';

const Scope = () => {
    return (
        <section className="scope section">
            <div className="container">
                <h2 className="section-title text-center">制作物のイメージ</h2>

                <div className="scope-comparison">
                    <div className="scope-box can-do">
                        <h3 className="scope-header">⭕ 作れるもの</h3>
                        <ul className="scope-list">
                            <li>フォームデータの自動保存</li>
                            <li>メールの自動送信システム</li>
                            <li>簡単な計算・判定ツール</li>
                        </ul>
                        <div className="scope-tag">マイクロツール</div>
                    </div>

                    <div className="scope-box cannot-do">
                        <h3 className="scope-header">❌ 作れないもの</h3>
                        <ul className="scope-list">
                            <li>大規模な業務管理システム</li>
                            <li>高度なセキュリティが必要なアプリ</li>
                            <li>複雑なデータベース構築</li>
                        </ul>
                        <div className="scope-tag">大規模システム</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Scope;
