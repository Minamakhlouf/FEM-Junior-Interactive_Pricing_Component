import {useState} from "react"; 
import Prices from "./Prices"
import Billing from "./Billing"
import Features from "./Features";
import "./Output.css"

const options = [
    {
        pageviews: "10K", 
        payment: 8, 
        installments: "month"
    },
    {
        pageviews: "50K", 
        payment: 12, 
        installments: "month"
    },
    {
        pageviews: "100K", 
        payment: 16, 
        installments: "month"
    },
    {
        pageviews: "500K", 
        payment: 24, 
        installments: "month"
    },
    {
        pageviews: "1M", 
        payment: 36, 
        installments: "month"
    },
]

const Output = () => {
    const [option, setOption] = useState(2); 
    const [isYearly, setIsYearly] = useState(false); 

    const optionChangeHandler = (value) => {
        setOption(value); 
    }

    const installmentChangeHandler = (value) => {
        if (value === true) {
            setIsYearly(false); 
            options.forEach((option) => {
                option.installments = "month"; 
                option.payment = (option.payment / .75) / 12; 
            })
        } else {
            setIsYearly(true); 
            options.forEach((option) => {
                option.installments = "year"; 
                option.payment = (option.payment*12) *.75; 
            })
        }
    }

    return (
        <div className="output">
            <Prices option={option} options={options[option]} onOptionChange={optionChangeHandler}/>
            <Billing isYearly={isYearly} installmentChangeHandler={installmentChangeHandler}/>
            <Features/>
        </div>
    )
}

export default Output; 