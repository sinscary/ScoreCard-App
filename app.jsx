function Application(){
	return (
		<div>
			<h1>Hello from react</h1>
			<p>I was renderend from the Application container</p>
		</div>
	);
}

ReactDOM.render(<Application/>, document.getElementById('container'));