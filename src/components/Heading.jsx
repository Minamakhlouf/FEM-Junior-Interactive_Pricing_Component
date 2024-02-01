import "./Heading.css"; 
import pattern from "../assets/pattern-circles.svg"; 

const Heading = () => {
    return (
        <header className="heading">
            <h1 className="heading_title">Simple, traffic-based pricing</h1>
            <p className="heading_text">Sign-up for our 30-day trial. No credit card required</p>
            <div className="heading_pattern"><img src={pattern} alt="" role="presentation"/></div>
        </header>
    )
}

export default Heading; 