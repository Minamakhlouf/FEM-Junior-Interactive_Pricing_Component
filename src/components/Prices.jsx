import "./Prices.css"
//import iconSlider from "../assets/icon-slider.svg"; 

const Prices = (props) => {

    const onChangeHandler = (e) => {
        props.onOptionChange(e.target.value)
    }

    return (
        <div className="prices">
            <div className="prices_views">{props.options.pageviews} PAGEVIEWS</div>
            <div className="prices_cost">${props.options.payment}.00<span className="prices_span">/{props.options.installments}</span></div>
            <input onChange={onChangeHandler} className="prices_slider" type="range" min="0" max="4" step="1" value={props.option}/>
        </div>
    )
}; 

export default Prices; 