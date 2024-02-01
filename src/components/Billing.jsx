import "./Billing.css"; 

const Billing = (props) => {
    const toggleChangeHandler = () => {
        props.installmentChangeHandler(props.isYearly); 
    }

    return (
        <div className="billing">
            <div className="billing_flex">
                <p>Monthly Billing</p>
                <div className={`billing_toggle ${props.isYearly ? "billing_yearly" : ""}`} onClick={toggleChangeHandler}>
                    <div className="billing_circle"></div>
                </div>
                <p>Yearly Billing</p>
                <div className="billing_discount">
                    <span className="billing_discount--small">-</span>
                    <span>25%</span>
                    <span className="billing_discount--large"> discount</span>
                </div>
            </div>
        </div>
    )
}

export default Billing; 