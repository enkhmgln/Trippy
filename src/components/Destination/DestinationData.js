import React,{ Component } from "react";
import "./DestinationStyles.css";

class DestinationData extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="des-text w-2/5 text-start text-lg md:w-full">
        <h2 className="pb-4">{this.props.heading}</h2>
        <p className="text-lg">{this.props.text}</p>
        </div>
        <div className="image relative w-3/6 flex justify-between z-[-99] md:w-full md:my-7 ">
          <img className="img-dest"  alt="Images" src={this.props.img1}/>
          <img className="img-dest-2" alt="Images" src={this.props.img2}/>
        </div>

      </div>
    );
  }
}

export default DestinationData;
