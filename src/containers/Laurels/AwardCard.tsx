import React from 'react'

// style
import './AwardCard.css'

interface IProps {
    award: { 
        imgUrl: string;
        title: string;
        subtitle: string;
    };
}

const AwardCard: React.FC<IProps> = ({ award: { imgUrl, title, subtitle } }): JSX.Element => {
    return (
        <div className="app__laurels_awards-card">
            <img src={imgUrl} alt="award" />

            <div className="app__laurels_awards-card_content">
                <p className="p__cormorant" style={{ color: "#dcca87" }}>
                    {title}
                </p>
                <p className="p__cormorant">
                    {subtitle}
                </p>
            </div>
        </div>
    )
}

export default AwardCard