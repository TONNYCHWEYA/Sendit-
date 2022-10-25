import React, {Component} from 'react'
import toastr from 'cogo-toast';

class Create extends Component
{
	constructor() {
		super();
		//--- Declare state variable for this component ---//
		this.state = {
			errors    : [],
			orderdate  : '',
			from 	  : '',
			to    : '',
			status  :  ''
		}
		//--- Declare method for this component ---//
		this.baseState = this.state
		this.hasErrorFor = this.hasErrorFor.bind(this);
		this.renderErrorFor = this.renderErrorFor.bind(this);
		this.handleInsertUser = this.handleInsertUser.bind(this);
		this.handleInputFieldChange = this.handleInputFieldChange.bind(this);
	}
	//--- Update state variable value while input field change ---//
	handleInputFieldChange(e) {
		this.setState({
			[e.target.name] : e.target.value
		})
	}
	//--- Insert new user in users state array by props method ---//
	handleInsertUser(e) {
		e.preventDefault()
		const data = {
			id 		  : Math.floor(Math.random() * 100),
			orderdate : this.state.orderdate,
			from : this.state.from,
			to     : this.state.to,
			status  : this.state.status
		}
		if( !this.checkValidation(data) ) {
			this.reset();
			this.props.updateState(data, 0);
			document.getElementById("closeAddModal").click();
			toastr.success('New user added successfully!', {position : 'top-right', heading: 'Done'});
		}
	}
	//--- Validate all input field ---//
    checkValidation(fields) {
    	var error = {};
    	if(fields.orderdate.length === 0) {
    		error.orderdate = ['This field is required!'];
    	}
    	if(fields.from.length === 0) {
    		error.from = ['This field is required!'];
    	}
		if(fields.to.length === 0) {
    		error.to = ['This field is required!'];
    	}
		if(fields.status.length === 0) {
    		error.status = ['This field is required!'];
    	}
		this.setState({
			errors : error
		})
		if(fields.orderdate.length === 0 || fields.from.length === 0 || fields.to.length === 0 || fields.status.length === 0) {
		return true;
		} else {
			return false;
		}
    }
    //--- Reset all state variable while insert new user ---//
    reset() {
        this.setState(this.baseState);
    }
    //--- Check that any validation errors occure for input field ---//
	hasErrorFor(fieldName) {
		return !!this.state.errors[fieldName];
	}
	//--- Render error for specific validation fail input field ---//
	renderErrorFor(fieldName) {
    	if (this.hasErrorFor(fieldName)) {
	        return (
	        	<em className="error invalid-feedback"> {this.state.errors[fieldName][0]} </em>
	        )
      	}
    }

    render() {
      return(
			<div className="modal fade" id="addModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
			  	<div className="modal-dialog" role="document">
			    	<div className="modal-content">
			      		<div className="modal-header">
			        		<h5 className="modal-title">New Order</h5>
			        		<button type="button" className="close" data-dismiss="modal" aria-label="Close">
			          			<span aria-hidden="true">&times;</span>
			        		</button>
			      		</div>
			        <form onSubmit={this.handleInsertUser}>
			      		<div className="modal-body">
						  	<div className="form-group">
			            		<label htmlFor="orderdate" className="col-form-label">Order Date:</label>
			            		<input type="date" className={`form-control form-control-sm ${this.hasErrorFor('orderdate') ? 'is-invalid' : ''}`}
			            		 id="orderdate" name="orderdate" placeholder="Order Date" onChange={this.handleInputFieldChange} value={this.state.orderdate}/>
			            		{this.renderErrorFor('orderdate')}
			         	 	</div>
			          		<div className="form-group">
			            		<label htmlFor="from" className="col-form-label"> From:</label>
			            		<input type="text" className={`form-control form-control-sm ${this.hasErrorFor('from') ? 'is-invalid' : ''}`}
			            		 id="from" name="from" placeholder=" From " onChange={this.handleInputFieldChange} value={this.state.from}/>
			            		{this.renderErrorFor('from')}
			         	 	</div>
			          		<div className="form-group">
			            		<label htmlFor="to" className="col-form-label">To:</label>
			            		<input type="text" className={`form-control form-control-sm ${this.hasErrorFor('to') ? 'is-invalid' : ''}`}
			            		 id="to" name="to" placeholder="to" onChange={this.handleInputFieldChange} value={this.state.to}/>
			            		{this.renderErrorFor('to')}
			          		</div>
							  <div className="form-group">
			            		<label htmlFor="status" className="col-form-label">Status:</label>
			            		<input type="text" className={`form-control form-control-sm ${this.hasErrorFor('status') ? 'is-invalid' : ''}`}
			            		 id="status" name="status" placeholder="Status" onChange={this.handleInputFieldChange} value={this.state.status}/>
			            		{this.renderErrorFor('status')}
			          		</div>
			      		</div>
			      		<div className="modal-footer">
			        		<button type="button" id="closeAddModal" className="btn btn-secondary btn-sm" data-dismiss="modal">Close</button>
			        		<button type="submit" className="btn btn-primary btn-sm">Save User</button>
			      		</div>
			   		</form>
			    	</div>
			  	</div>
			</div>
        )
    }
}
export default Create