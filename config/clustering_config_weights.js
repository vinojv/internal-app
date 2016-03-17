{
	"COMPARATOR_FIELDS":{
		"FIELD_LOCATION_CODE":["LOCATION_CODE"],
		"FIELD_LOCATION":["LOCATION"],
		"FIELD_STREET_ADDRESS":["LOCATION_STREET_ADDRESS_1"],
		"FIELD_CITY":["LOCATION_CITY"],
		"FIELD_COUNTRY":["LOCATION_COUNTRY"],
		"FIELD_MODEL_CONCAT":["MODEL_CONCAT_O"],
		"FIELD_OS_PLATFORM_FAMILY":["OS_PLATFORM_FAMILY"],
		"FIELD_OS_PLATFORM":["OS_PLATFORM"],
		"FIELD_OS_MANUFACTURER":["OS_MANUFACTURER"],
		"FIELD_OS_NAME":["OS_NAME_O"],
		"FIELD_DATES":["LAST_ACTIVITY_DATE","SCAN_DATE","LAST_LIFECYCLE_CHANGE_DATE","RECORD_UPDATED_DATE","ASSET_INSTALL_DATE"],
		"FIELD_STATUSES":["CI_OPERATIONAL_STATUS","PHYSICAL_STATUS","OPERATIONAL_PHYSICAL_STATUS"]
	},
	"WEIGHTPROPERTIES":[
		{"NAME":"HIGH","ABBREV":"H","INDEX":0,"FACTOR":0.102},
		{"NAME":"MEDIUM","ABBREV":"M","INDEX":1,"FACTOR":0.360},
		{"NAME":"LOW","ABBREV":"L","INDEX":2,"FACTOR":0.925},
	],
	"WEIGHTPARAMS":["source"],
	"WEIGHTS":[
		{
			"type" : "COMPUTER",	
			"values" :{
				"SERIAL_NUMBER_M" : "HIGH",
				"ASSET_NAME_M" : "HIGH",
				"ASSET_TAG_M" : "HIGH"
			}
		}, 
		{
			"type" : "SERVER",	
			"values" :{
				"SERIAL_NUMBER_M" : "HIGH",
				"ASSET_NAME_M" : "HIGH",
				"ASSET_TAG_M" : "HIGH"
			}
		}, 
		{
			"type" : "CLUSTER",	
			"values" :{
				"SERIAL_NUMBER_M" : "HIGH",
				"ASSET_NAME_M" : "HIGH",
				"ASSET_TAG_M" : "HIGH"
			}
		}, 
		{
			"type" : "COMPUTER",	
			"source": "SCCM",
			"values" :{
				"SERIAL_NUMBER_M" : "HIGH",
				"ASSET_NAME_M" : "MEDIUM",
				"ASSET_TAG_M" : "HIGH"
			}
		}, 
		{
			"type" : "COMPUTER",	
			"source": "DCI",
			"values" :{
				"SERIAL_NUMBER_M" : "HIGH",
				"ASSET_NAME_M" : "HIGH",
				"ASSET_TAG_M" : "LOW"
			}		
		}, 
		{
			"type" : "COMPUTER",	
			"source": "AMEX_VOICE",
			"values" :{
				"SERIAL_NUMBER_M" : "MEDIUM",
				"ASSET_NAME_M" : "HIGH",
				"ASSET_TAG_M" : "HIGH"
			}
		},
		{
			"type" : "RACK",	
			"values" :{
				"ASSET_TAG" : "MEDIUM",
				"NATIVE_RACK_ID" : "LOW",
				"RACK_SERIAL_NUMBER" : "MEDIUM",
				"RACK_NAME" : "HIGH"
			}
		},
		{
			"type" : "DATABASE",	
			"values" :{
				"CLUSTER_NAME" : "LOW",
				"ASSET_NAME" : "MEDIUM",
				"DATABASE_TYPE" : "HIGH",
				"DATABASE_NAME" : "HIGH"	
			}
		},
		{
			"type" : "SOFTWARE",	
			"values" :{
				"SERIAL_NUMBER" : "LOW",
				"ASSET_NAME" : "MEDIUM",
				"ASSET_TAG" : "MEDIUM",
				"OS_NAME" : "HIGH",
				"MANUFACTURER" : "HIGH",
				"LOCATION" : "HIGH"
			}
		},
		{
			"type" : "DB_INSTANCE",	
			"values" :{
				"SERVER_NAME" : "LOW",
				"CLUSTER_NAME" : "LOW",
				"DB_INSTANCE_NAME" : "HIGH",
				"DATABASE_NAME" : "LOW"
			}
		},
		{
			"type" : "NETWOR_DEVICE",	
			"values" :{
				"ASSET_NAME" : "HIGH",
				"ROLE" : "MEDIUM",
				"MODEL" : "MEDIUM",
				"MODEL_MAKE" : "MEDIUM",
				"SERIAL_NUMBER" : "MEDIUM",
				"LOCATION" : "HIGH"
			}
		},
		{
			"type" : "NETWORK_INTERFACE",	
			"values" :{
				"SERIAL_NUMBER" : "MEDIUM",
				"ASSET_NAME" : "HIGH"
			}
		},
		{
			"type" : "USER",	
			"values" :{
				"EMPOYEE_CODE" : "HIGH"
			}
		},
		{
			"type" : "GROUP",	
			"values" :{
				"GROUP_NAME" : "HIGH"
			}
		}
	],
	"SOURCE_ORDER":["SNOW","TIMS","SCCM","MCAFEE","PGP","EMC","FOUNDSTONE",
			"HP_COMPUTER","HP_NETWORK","IBM","IDN","NCIRCLE","POWERBROKER",
			"STRATUS","MSL","DCI","AD","AZURE","PDI","HP_DB","GSS",
			"AMEX_NETWORK","MAC","AMEX_VOICE","AXP_CLOUD","HAOPS"]
}

