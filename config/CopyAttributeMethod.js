// [1] function to set CAN_PROCESS attribute, from child to parent object. 

var copyCanProcess = function(childObjects, parentObject){

	var isNullCanProcess = false;
	var isCanProcessCC = false;
	var countOneCanProcess = 0;
	for(var i = 0; i < childObjects.size() ; i++) {

		if(childObjects.get(i).get('CAN_PROCESS') == 1)
			countOneCanProcess++;	
		if(childObjects.get(i).get('CAN_PROCESS') == null)
			isNullCanProcess = true;
		if(childObjects.get(i).get('CAN_PROCESS_COMMODITY_CODE') == 1)
			isCanProcessCC = true;	
	}

	if(countOneCanProcess >= 1){
		parentObject.get(0).set('CAN_PROCESS',1);
		if(isCanProcessCC) parentObject.get(0).set('CAN_PROCESS_COMMODITY_CODE',1);
		else if(!isNullCanProcess) parentObject.get(0).set('CAN_PROCESS_COMMODITY_CODE',0);
		else parentObject.get(0).set('CAN_PROCESS_COMMODITY_CODE',null);
		}
	else if(!isNullCanProcess){
		parentObject.get(0).set('CAN_PROCESS',0);
		parentObject.get(0).set('CAN_PROCESS_COMMODITY_CODE',0);
	}
	else{
		parentObject.get(0).set('CAN_PROCESS',null);
		parentObject.get(0).set('CAN_PROCESS_COMMODITY_CODE',null);
	}

};

//------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------

// SHIPPING_ADDRESS, SHIPPING_PROVIDER, SHIP_TO_ADDRESS_CODE, 
// SHIP_TO_STOCKROOM, SHIP_TO_STOCKROOM_REF, SHIP_TO_STOCKROOM_REF_GUID

// [2] function to set SHIPPING and STOCKROOM attributes, from child to parent object. 

var copyShippingStockroom = function(childObjects, parentObject){

	var foundMainShipping = false;


	for(var i = 0; i < childObjects.size() ; i++) {

		var foundSubStockroom = false;
		//var foundSubShipping = false;


		if(childObjects.get(i).get('SHIP_TO_STOCKROOM_REF') != null)
			foundSubStockroom = true;

		/*if((childObjects.get(i).get('SHIPPING_ADDRESS') != null) || (childObjects.get(i).get('SHIPPING_PROVIDER') != null) || 
			(childObjects.get(i).get('SHIP_TO_ADDRESS_CODE') != null))
			foundSubShipping = true;*/			

		
		if(foundSubStockroom == true){
			//parentObject.get(0).set('SHIP_TO_STOCKROOM',childObjects.get(i).get('SHIP_TO_STOCKROOM'));
			parentObject.get(0).set('PO_STOCKROOM_REFERENCE',childObjects.get(i).get('SHIP_TO_STOCKROOM_REF'));
			parentObject.get(0).set('PO_STOCKROOM_REFERENCE_GUID',childObjects.get(i).get('SHIP_TO_STOCKROOM_REF_GUID'));
			//parentObject.get(0).set('SHIPPING_ADDRESS',childObjects.get(i).get('SHIPPING_ADDRESS'));
			//parentObject.get(0).set('SHIPPING_PROVIDER',childObjects.get(i).get('SHIPPING_PROVIDER'));
			//parentObject.get(0).set('SHIP_TO_ADDRESS_CODE',childObjects.get(i).get('SHIP_TO_ADDRESS_CODE'));
			break;
		}

		/*if(foundMainShipping  == false) {
			if(foundSubShipping == true){
				parentObject.get(0).set('SHIP_TO_STOCKROOM',childObjects.get(i).get('SHIP_TO_STOCKROOM'));
				parentObject.get(0).set('SHIP_TO_STOCKROOM_REF',childObjects.get(i).get('SHIP_TO_STOCKROOM_REF'));
				parentObject.get(0).set('SHIP_TO_STOCKROOM_REF_GUID',childObjects.get(i).get('SHIP_TO_STOCKROOM_REF_GUID'));
				parentObject.get(0).set('SHIPPING_ADDRESS',childObjects.get(i).get('SHIPPING_ADDRESS'));
				parentObject.get(0).set('SHIPPING_PROVIDER',childObjects.get(i).get('SHIPPING_PROVIDER'));
				parentObject.get(0).set('SHIP_TO_ADDRESS_CODE',childObjects.get(i).get('SHIP_TO_ADDRESS_CODE'));
				foundMainShipping = true;
			}
		}*/				
	}	
};

