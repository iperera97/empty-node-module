/*

====== true =====
"" (an empty string)
0 (0 as an integer)
0.0 (0 as a float)
"0" (0 as a string)
NULL
FALSE
[] | {} (empty)

*/

class DataType {

	constructor(data){

		this.data = data;
	}//constructor

	isObjectOrArray(){

		if( Object.keys(this.data).length === 0 ) return true;
		else return false;
	}//check object | arr

	number(){

		if( this.data === 0 ) return true;
		else return false;
	}//check number
	
	string(){

		let stringData = this.data.trim();
		
		if( stringData === "" ) return true;
		else if(stringData === "0") return true;
		else return false;
	}//check string

	boolean(){

		if( this.data === false ) return true;
		else return false;
	}//check boolean

}

function empty(data){
let type, result;
	
	//if datatype was null
	//debug that error
	if( data === null ) type = null;
	else type = typeof data;
	
	//init dataTyper
	let dataTyper = new DataType( data );

	//route by datatypes
	if( type === "object" ) result = dataTyper.isObjectOrArray();
	else if( type === "number" ) result = dataTyper.number();
	else if( type === "string" ) result = dataTyper.string();
	else if( type === null ) result = true;
	else if( type === "boolean" ) result = dataTyper.boolean();

	//final result
	return result;
}


module.exports = empty;