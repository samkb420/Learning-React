import React from 'react'

function TimeNow(){
	const date = new Date(2020,4,26,20)
	const hours = date.getHours()
	let timeofDay 

	if(hours < 12){
		timeofDay = "Good Morning"
	}
	else if(hours >= 12 && hours < 17) {
		timeofDay = "Good afternoon"


	}
	else{
		timeofDay = "Good Night"
	}
// css maping
	const styles ={color:"red",
	backgroundColor:"blue"}

	return (

		<div className="col-md-6 mt-2">


		<div className="card">
		<div className="card-body">
		<h4 className="card-title "><i className="fa fa-gg"></i>Time card</h4>

		<p style={styles} className="card-text "><i className="fa fa-gg"></i>{timeofDay}</p>
		
		
		

		</div>

		</div>


		</div>

		)
}



export default TimeNow;