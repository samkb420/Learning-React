import React from 'react'



function ContactCard(props) {
	return(

		<div className="col-md-6 mt-2">


		<div className="card">
		<div className="card-body">
		<h4 className="card-title "><i className="fa fa-gg"></i>{props.name}</h4>
		<p className="card-text "><i className="fa fa-gg"></i>{props.phone}</p>
		<p className="card-text "><i className="fa fa-gg"></i>{props.email}</p>
		<p className="card-text "><i className="fa fa-thumbs-up"></i>{props.likes}</p>

		
		

		</div>

		</div>


		</div>
		



		)
}

export default ContactCard;