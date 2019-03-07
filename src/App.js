import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Image from "./components/Image";
import Img from "./components/Img.json";

import bournemouth from "./clubimgs/bou.png";
import arsenal from "./clubimgs/ars.png";
import brightonandhovealbion from "./clubimgs/bha.png";
import burnley from "./clubimgs/bur.png";
import cardiffcity from "./clubimgs/car.png";
import chelsea from "./clubimgs/che.png";
import crystalpalace from "./clubimgs/cry.png";
import everton from "./clubimgs/eve.png";
import fulham from "./clubimgs/ful.png";
import huddersfieldtown from "./clubimgs/hud.png";
import leicestercity from "./clubimgs/lei.png";
import liverpool from "./clubimgs/liv.png";
import manchestercity from "./clubimgs/mci.png";
import manchesterunited from "./clubimgs/mun.png";
import newcastleunited from "./clubimgs/new.png";
import southampton from "./clubimgs/sou.png";
import tottenhamhotspur from "./clubimgs/tot.png";
import watford from "./clubimgs/wat.png";
import westhamunited from "./clubimgs/whu.png";
import wolverhamptonwanderers from "./clubimgs/wol.png";

import "./App.css";

class App extends Component {
  
  state = {
    picked: [],
    correct: 0,
    topscore: 0,
    message: 'Click an image to begin'
  };

  shuffleArray = () => {
    let imgArray = Img;
    for (let i = imgArray.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [imgArray[i], imgArray[j]] = [imgArray[j], imgArray[i]];
    }
    return imgArray
  }

  pickImg = (name) => {
    console.log("Clicked!");
    let picked = this.state.picked;
    
    if (picked.indexOf(name) === -1) {
      this.setState({
        picked: picked.concat(name),
        correct: this.state.correct + 1,
        topscore: this.state.correct + 1 > this.state.topscore ? this.state.correct + 1 : this.state.topscore,
        message: "Correct!" 
      })
      this.shuffleArray();
    }
    else {
      this.setState({
        message: "Already Selected - Game Over!",
        correct: 0,
        picked: []
      })
    }
  }
  
  imgSwitch = (name) => {
    switch (name) {
      case "bournemouth":
        return `${bournemouth}`
      case "arsenal":
        return `${arsenal}`
      case "brightonandhovealbion":
        return `${brightonandhovealbion}`
      case "burnley":
        return `${burnley}`
      case "cardiffcity":
        return `${cardiffcity}`
      case "chelsea":
        return `${chelsea}`
      case "crystalpalace":
        return `${crystalpalace}`
      case "everton":
        return `${everton}`
      case "fulham":
        return `${fulham}`
      case "huddersfieldtown":
        return `${huddersfieldtown}`
      case "leicestercity":
        return `${leicestercity}`
      case "liverpool":
        return `${liverpool}`
      case "manchestercity":
        return `${manchestercity}`
      case "manchesterunited":
        return `${manchesterunited}`
      case "newcastleunited":
        return `${newcastleunited}`
      case "southampton":
        return `${southampton}`
      case "tottenhamhotspur":
        return `${tottenhamhotspur}`
      case "watford":
        return `${watford}`
      case "westhamunited":
        return `${westhamunited}`
      case "wolverhamptonwanderers":
        return `${wolverhamptonwanderers}`
      default:
        return `${wolverhamptonwanderers}`
    }
  }

  render() {
    return (
      <div className="App">
        <Navbar correct={this.state.correct} topscore={this.state.topscore} message={this.state.message}/>
        <Header />
        <Main>
          {this.shuffleArray(Img).map(image => (
            <Image src={this.imgSwitch(image.name)} name={image.name} key={image.name} pickImg={this.pickImg}  />
          ))}
        </Main>
        <Footer />

      </div>
    );
  }

}

export default App;
