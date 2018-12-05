# CASA: **CA**b **S**haring **A**pi
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
Response data: 
```javascript
{
    "success": true,
    "data": {
        "_id": "5c07af534f1376756a341507",
        "name": "Cab Guy",
        "phone": "9988776655",
        "email": "test@gmail.com",
        "source": "IIT Kharagpur",
        "dest": "Kolkata Airport",
        "slot": {
            "_id": "5c07af534f1376756a341508",
            "startTime": "2014-01-01T23:28:56.782Z",
            "endTime": "2018-12-05T10:50:09.142Z"
        },
        "desc": "This field is optional, please like and subscribe to my cab!",
        "__v": 0
    }
}
```
* `success`: `true` if the data was added to the database successfully, `false` otherwise.
* `data`: The data added to the database. Returned only if `success` is `true`.
* `error`: Error message. Returned only if `success` is `false`.
## Deleting an offer (DELETE to `/api/delete/{id}`)
Send a delete request to `/api/delete/{id}`, where `id` is the unique identifier returned during creation of the offer.
Response data:
```javascript
{
    "success": true,
    "data": {
        "_id": "5c07c02b1795b50213b920fa",
        "name": "Cab Bro",
        "phone": "9988776655",
        "email": "test@gmail.com",
        "source": "IIT Kharagpur",
        "dest": "Kolkata Airport",
        "slot": {
            "_id": "5c07c02b1795b50213b920fb",
            "startTime": "2014-01-01T23:28:56.782Z",
            "endTime": "2018-12-05T10:50:09.142Z"
        },
        "desc": "This field is optional, please like and subscribe to my cab!",
        "__v": 0
    }
}
```
* `success`: `true` if the data was deleted from the database successfully, `false` otherwise.
* `data`: The data deleted from the database. Returned only if `success` is `true`.
