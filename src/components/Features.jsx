import "./Features.css"
import check from "../assets/icon-check.svg"; 

const Features = () => {
    return (
        <div className="features">
            <div className="features_list">
                <div className="features_item">
                    <img src={check} alt="Checkmark" role="presentation" />
                    <p>Unlimited websites</p>
                </div>
                <div className="features_item">
                    <img src={check} alt="Checkmark" role="presentation" />
                    <p>100% data ownership</p>
                </div>
                <div className="features_item">
                    <img src={check} alt="Checkmark" role="presentation" />
                    <p>Email reports</p>
                </div>
            </div>
            <button className="features_button">Start my trial</button>
        </div>
    )
}

export default Features; 