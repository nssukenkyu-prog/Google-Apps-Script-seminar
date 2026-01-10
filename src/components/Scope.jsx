import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';
import './Scope.css';

const Scope = () => {
    return (
        <section className="scope section">
            <div className="container">
                <h2 className="section-title text-center">制作物のイメージ</h2>

                <div className="scope-comparison">
                    <div className="glass-card scope-box can-do">
                        <div className="scope-header-wrapper">
                            <span className="scope-icon"><CheckCircle2 size={32} /></span>
                            <h3 className="scope-header">作れるもの</h3>
                        </div>
                        <ul className="scope-list">
                            <li>フォームデータの自動保存</li>
                            <li>メールの自動送信システム</li>
                            <li>簡単な計算・判定ツール</li>
                        </ul>
                        <div className="scope-tag">マイクロツール</div>
                    </div>

                    <div className="glass-card scope-box cannot-do">
                        <div className="scope-header-wrapper">
                            <span className="scope-icon"><XCircle size={32} /></span>
                            <h3 className="scope-header">行わないもの</h3>
                        </div>
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
