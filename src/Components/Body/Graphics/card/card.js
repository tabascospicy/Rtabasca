import React,{Component} from "react";
import "./card.scss";
class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carga:0
    };
  }
  componentDidMount() {
     const timer = setInterval(()=>{
        this.setState((state, props) => {
          return {carga: state.carga + 1};
        });
        //console.log(this.state.carga,this.props.percent);
      if(this.state.carga===this.props.percent){
        clearInterval(timer);
      }
    },(this.props.percent/240)*100)
  }
  render(){
     return (
      <div className="card">
        <div className="box">
          <div className="percent">
            <svg>
              <circle cy="40%" cx="40%" r="47%"></circle>
              <circle cy="40%" cx="40%" r="47%"></circle>
            </svg>
            <div className="number">
              <h2>
                {this.state.carga}<span>%</span>
              </h2>
            </div>
          </div>
          
            <h2 className="card-text">{this.props.mastery}</h2>
        </div>
      </div>
    );
  }
}

export default Card;
