# Cab Sharing API
API for cab sharing posts. Currently work in progress.
# Methods
## Adding a new offer (POST to `/api/add`)
Post JSON data to `/api/add` with the following format to add a new cab sharing offer.
```javascript
{
	"name" : "Cab Guy",
	"phone" : "9988776655",
	"email" : "test@gmail.com",
	"source" : "IIT Kharagpur",
	"dest" : "Kolkata Airport",
	"slot" : {
		"startTime" : "2014-01-01T23:28:56.782Z",
		"endTime" : "2018-12-05T10:50:09.142Z"
	},
	"desc" : "This field is optional, please like and subscribe to my cab!"
}
```
