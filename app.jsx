function Application(props){
	return (
		<div className="scoreboard">
			<div className="header">
				<h1>{props.title}</h1>
			</div>

			<div className="players">
				<div className="player">
					<div className="player-name">
						Nitesh Sharma
					</div>
					<div className="player-score">
						<div className="counter">
							<button className="counter-action decrement"> - </button>
							<div className="counter-score"> 31 </div>
							<button className="counter-action increment"> + </button>
						</div>
					</div>
				</div>
			</div>
			<div className="players">
				<div className="player">
					<div className="player-name">
						Arun Sharma
					</div>
					<div className="player-score">
						<div className="counter">
							<button className="counter-action decrement"> - </button>
							<div className="counter-score"> 30 </div>
							<button className="counter-action increment"> + </button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

Application.propTypes={
	title: React.PropTypes.string,
};

Application.defaultProps={
	title: "ScoreBoard",
}

ReactDOM.render(<Application />, document.getElementById('container'));