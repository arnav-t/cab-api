#  :poultry_leg: CASA: **CA**b **S**haring **A**pi
API for cab sharing posts. Currently work in progress.
# Running locally
## Set up
[Docker](https://docs.docker.com/install/linux/docker-ce/ubuntu/) and [Docker Compose](https://docs.docker.com/compose/install/) are required to run the app using Docker containers.
```bash
git clone https://github.com/arnav-t/cab-api.git
cd cab-api
```
## Running app
```bash
sudo docker-compose up
```
## Stopping app
```bash
sudo docker-compose down
```
# Methods
## Getting all offers (GET to `/api`)
Send a get request to `/api` to fetch all cab offers.     
Response data: 
* `success`: `true` if the operation was successful, `false` otherwise.
* `data`: All data entries. Returned only if `success` is `true`.
## Getting all offers matching a given time (GET to `/api/search`)
Send a get request as `/api/search?time={time}` with the query parameter `time` set to the wanted time (in JSON format for Javascript dates e.g `2018-01-01T23:28:56.782Z`).     
Response data:
```javascript
{
    "success": true,
    "data": [
        {
            "_id": "5c07f648e86cc02018806f51",
            "name": "Test Person",
            "phone": "9988776655",
            "email": "test@gmail.com",
            "source": "IIT Kharagpur",
            "dest": "Kolkata Airport",
            "slot": {
                "_id": "5c07f648e86cc02018806f52",
                "startTime": "2010-01-01T23:28:56.782Z",
                "endTime": "2012-12-05T10:50:09.142Z"
            },
            "desc": "This field is optional, please like and subscribe to my cab!",
            "__v": 0
        }
    ]
}
```
* `success`: `true` if the query was successful, `false` otherwise.
* `data`: The matching data entries. Returned only if `success` is `true`.
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
## Updating an offer (PUT to `/api/update/{id}`)
Send a put request in the following format to `/api/update/{id}`, where `id` is the unique identifier returned during creation of the offer.
```javascript
{
	"name" : "New Guy"
}
```
Response data:
```javascript
{
    "success": true,
    "data": {
        "_id": "5c07cb45ba3c9d03ba43940f",
        "name": "New Guy",
        "phone": "9988776655",
        "email": "test@gmail.com",
        "source": "IIT Kharagpur",
        "dest": "Kolkata Airport",
        "slot": {
            "_id": "5c07cb45ba3c9d03ba439410",
            "startTime": "2014-01-01T23:28:56.782Z",
            "endTime": "2018-12-05T10:50:09.142Z"
        },
        "desc": "This field is optional, please like and subscribe to my cab!",
        "__v": 0
    }
}
```
* `success`: `true` if the data was updated in the database successfully, `false` otherwise.
* `data`: The updated data entry. Returned only if `success` is `true`.
