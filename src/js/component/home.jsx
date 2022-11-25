import React from "react";

//include images into your bundle
import Jumpbotron from "./jumbotron";
import NavBar from "./navbar";
import Footer from "./footer";
import CardsContainer from "./cardsContainer";


//create your first component
const Home = () => {
	return (
		<div className="bg-light">
			<NavBar />
			<div className="container">
				<Jumpbotron />
				<CardsContainer />
			</div>
			<Footer />
		</div>
	);
};

export default Home;
