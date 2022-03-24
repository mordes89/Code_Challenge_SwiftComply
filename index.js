const xml2csv = require("xml2csv");

xml2csv(
   {
      xmlPath: './files/Facility.xml',
      csvPath: './newCSV.csv',
      rootXMLElement: 'T_Facility',
      headerMap: [         
         ['Facility_ID', 'property_id', 'integer'],
         ['Facility_Account_Number', 'account_number', 'integer'],
         ['Facility_Name', 'name', 'string'],
         ['Service_Address_Street_Name', 'address1', 'string'],
         ['address2', 'address2', 'string'],
         ['Service_Address_City', 'city', 'string'],
         ['Service_Address_State', 'state_prov', 'string'],
         ['country_code', 'country_code', 'string'],
         ['Service_Address_Zip_Code', 'postal_code', 'string'],
         ['Facility_Contact_Mgr_ID', 'primary_contact_id', 'string'],
         ['Site_Contact_Name_2', 'notes', 'string'],
         ['survey_compliance', 'survey_compliance', 'string'],
         ['Facility_Survey_Date_Last', 'last_survey', 'date'],
         ['Facility_Survey_Date_Next', 'next_survey', 'date'], 
      ]
   },
   function (err, result) {
      if (err) {
         console.log(err);
      } else {
         console.log(result);
      } 
   }
 )