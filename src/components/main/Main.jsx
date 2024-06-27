import { useContext } from "react";
import { assets } from "../../assets/assets";
import "./Main.css";
import { Context } from "../context/context";
const Main = () => {
	const {
		onSent,
		recentPrompt,
		showResults,
		loading,
		resultData,
		setInput,
		input,
	} = useContext(Context);

	const handleCardClick = (promptText) => {
		setInput(promptText);
	};
	return (
		<div className="main">
			<div className="nav">
				<p>Gemini</p>
				<img src={assets.user_icon} alt="" />
			</div>
			<div className="main-container">
				{!showResults ? (
					<>
						<div className="greet">
							<p>
								<span>Hello , Shashi </span>
							</p>
							<p>How Can i Help You Today?</p>
						</div>
						<div className="cards"> 
							<div
								className="card"
								onClick={() =>
									handleCardClick("Suggest Some Place To Visit In Karnatka")
								}
							>
								<p>Suggest Some Place To Visit In Kharagpur </p>
								<img src={assets.compass_icon} alt="" />
							</div>
							<div
								className="card"
								onClick={() =>
									handleCardClick(
										"Brainstorm team bonding activities for our work retreat"
									)
								}
							>
								<p>Brainstorm team bonding activities for our work retreat </p>
								<img src={assets.message_icon} alt="" />
							</div>
							<div
								className="card"
								onClick={() =>
									handleCardClick("What is your view on rise of Artificial Intelligence?")
								}
							>
								<p>What is your view on rise of Artificial Intelligence?</p>
								<img src={assets.bulb_icon} alt="" />
							</div>
							<div
								className="card"
								onClick={() => {
									handleCardClick(
										"What is Software Development and what is it's scope in 20th century? "
									);
								}}
							>
								<p>What is Software Development and what is it's scope in 20th century?</p>
								<img src={assets.code_icon} alt="" />
							</div>
						</div>
					</>
				) : (
					<div className="result">
						<div className="result-title">
							<img src={assets.user_icon} alt="" />
							<p>{recentPrompt}</p>
						</div>
						<div className="result-data">
							<img src={assets.gemini_icon} alt="" />
							{loading ? (
								<div className="loader">
									<hr />
									<hr />
									<hr />
								</div>
							) : (
								<p dangerouslySetInnerHTML={{ __html: resultData }}></p>
							)}
						</div>
					</div>
				)}

				<div className="main-bottom">
					<div className="search-box">
						<input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here' />
						<div>
							<img src={assets.gallery_icon} alt="" />
							<img src={assets.mic_icon} alt="" />
							{input ? <img onClick={() => onSent()} src={assets.send_icon} alt="" /> : null}
						</div>
					</div>
					<p className="bottom-info">
						Gemini may display inaccurate info, including about people, so double check it's responses. Your privacy and Gemini Apps
					</p>
				</div>
			</div>
		</div>
	);
};

export default Main;
