import React from 'react';
import './Lecturers.css';

const LecturerCard = ({ name, role, university }) => (
    <div className="glass-card lecturer-card">
        <div className="lecturer-info">
            <h3 className="lecturer-name">{name}</h3>
            <p className="lecturer-role">{role}</p>
            <p className="lecturer-univ">{university}</p>
        </div>
    </div>
);

const Lecturers = () => {
    return (
        <section className="lecturers section">
            <div className="container">
                <h2 className="section-title text-center">講師紹介</h2>
                <div className="lecturers-grid">
                    <LecturerCard name="祁答院 隼人" role="分科会 代表" university="日本体育大学" />
                    <LecturerCard name="伊藤 譲" role="" university="日本体育大学" />
                    <LecturerCard name="杉澤 舜" role="" university="日本体育大学" />
                </div>
            </div>
        </section>
    );
};

export default Lecturers;
