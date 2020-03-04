## Disney-Parent BackEnd

# https://disney-parent-api.herokuapp.com/

### EndPoints

### AUTH

## POST /api/auth/register

# Expected
```
{
	"username": "Goofy",
	"email": "goofy@email.com",
	"password": "password",
	"role": "parent"
}
```

# Return
```
{
    "id": 10,
    "username": "Goofy",
    "email": "goofy@email.com",
    "password": "$2a$12$TIO8KLnJVOCHBW8fFYxFZumRKjW5n/XhM/.nGUrrboo6GUly.miBu",
    "role": "parent",
    "about": null,
    "address": null,
    "age": null,
    "children": null,
    "family_size": null,
    "home_park": null
}
```

## POST /api/auth/login

# Expected
```
{
	"email": "goofy@email.com",
	"password": "password",
	"role": "parent"
}
```

# Return
```
{
    "message": "Welcome goofy@email.com!"
}
```


## DELETE /api/auth/logout

# Expected
*You will just need to hit the URL*

# Return
```
See you again soon!
```


### USERS these endpoints are protected

## GET /api/users

# Expected
*You will just need to hit the URL*

# Return
```
[
    {
        "id": 1,
        "username": "Walt Disney",
        "email": "walt@email.com",
        "password": "password",
        "role": "parent",
        "about": "",
        "address": "",
        "age": 0,
        "children": "",
        "family_size": "",
        "home_park": ""
    },
    {
        "id": 2,
        "username": "Ub Iwerks",
        "email": "ub@email.com",
        "password": "password",
        "role": "parent",
        "about": "",
        "address": "",
        "age": 0,
        "children": "",
        "family_size": "",
        "home_park": ""
    },
    {
        "id": 3,
        "username": "Mickey Mouse",
        "email": "mickey@email.com",
        "password": "password",
        "role": "parent",
        "about": "",
        "address": "",
        "age": 0,
        "children": "",
        "family_size": "",
        "home_park": ""
    },
    {
        "id": 4,
        "username": "Oswald Rabbit",
        "email": "oswald@email.com",
        "password": "password",
        "role": "parent",
        "about": "",
        "address": "",
        "age": 0,
        "children": "",
        "family_size": "",
        "home_park": ""
    },
    {
        "id": 5,
        "username": "Child Care",
        "email": "child@email.com",
        "password": "password",
        "role": "volunteer",
        "about": "",
        "address": "",
        "age": 0,
        "children": "",
        "family_size": "",
        "home_park": ""
    },
    {
        "id": 6,
        "username": "Care Taker",
        "email": "care@email.com",
        "password": "password",
        "role": "volunteer",
        "about": "",
        "address": "",
        "age": 0,
        "children": "",
        "family_size": "",
        "home_park": ""
    },
    {
        "id": 7,
        "username": "Baby Sitter",
        "email": "baby@email.com",
        "password": "password",
        "role": "volunteer",
        "about": "",
        "address": "",
        "age": 0,
        "children": "",
        "family_size": "",
        "home_park": ""
    },
    {
        "id": 9,
        "username": "Oswald Rabbit",
        "email": "oswaldrabbit@email.com",
        "password": "$2a$12$78pgN9ZPYS.pdn/31Z/mG.3C.pYhXqmwqpRef37OX.g71c0Hu7SEi",
        "role": "volunteer",
        "about": "I'm a fake person with a fake account",
        "address": "123 fake street",
        "age": 10000,
        "children": "Jack, Jill, Bob",
        "family_size": 3,
        "home_park": "California Adventure"
    },
    {
        "id": 10,
        "username": "Goofy",
        "email": "goofy@email.com",
        "password": "$2a$12$TIO8KLnJVOCHBW8fFYxFZumRKjW5n/XhM/.nGUrrboo6GUly.miBu",
        "role": "parent",
        "about": null,
        "address": null,
        "age": null,
        "children": null,
        "family_size": null,
        "home_park": null
    }
]
```


## GET /api/users/:id

# Expected
*You will just need to hit the URL that ends with the unique id*

# Return
```
{
    "id": 9,
    "username": "Oswald Rabbit",
    "email": "oswaldrabbit@email.com",
    "password": "$2a$12$78pgN9ZPYS.pdn/31Z/mG.3C.pYhXqmwqpRef37OX.g71c0Hu7SEi",
    "role": "volunteer",
    "about": "I'm a fake person with a fake account",
    "address": "123 fake street",
    "age": 10000,
    "children": "Jack, Jill, Bob",
    "family_size": 3,
    "home_park": "California Adventure"
}
```


## PUT /api/users/:id

# Expected
```
{
        "username": "Oswald Rabbit",
        "email": "oswaldrabbit@email.com",
        "password": "$2a$12$78pgN9ZPYS.pdn/31Z/mG.3C.pYhXqmwqpRef37OX.g71c0Hu7SEi",
        "role": "volunteer",
        "about": "I'm a fake person with a fake account",
        "address": "123 fake street",
        "age": 1000,
        "children": "Jack, Jill, Bob",
        "family_size": "3",
        "home_park": "California Adventure"
}
```

# Return
```
{
    "message": "Updated the user!",
    "data": {
        "username": "Oswald Rabbit",
        "email": "oswaldrabbit@email.com",
        "password": "$2a$12$78pgN9ZPYS.pdn/31Z/mG.3C.pYhXqmwqpRef37OX.g71c0Hu7SEi",
        "role": "volunteer",
        "about": "I'm a fake person with a fake account",
        "address": "123 fake street",
        "age": 100,
        "children": "Jack, Jill, Bob",
        "family_size": "3",
        "home_park": "California Adventure"
    }
}
```


## DELETE /api/users/:id

# Expected
*You will just need to hit the URL that ends with the unique id*

# Return
```
{
    "message": "Successfully removed the user 2."
}
```


### REQUEST these endpoints are protected
Both the 'parent_id' and the 'vol_id' are referring to the 'id' of the user.

## GET /api/request

# Expected
*You will just need to hit the URL*

# Return
```
[
    {
        "id": 1,
        "parent_id": 1,
        "vol_id": "",
        "meeting_location": "Tomorrowland Food Court",
        "ride": "Star Tours",
        "time": "",
        "num_children": 5,
        "message": ""
    },
    {
        "id": 2,
        "parent_id": 2,
        "vol_id": 3,
        "meeting_location": "Critter Country",
        "ride": "Splash Mtn.",
        "time": "",
        "num_children": 3,
        "message": "Allergic to peanuts"
    },
    {
        "id": 3,
        "parent_id": 3,
        "vol_id": null,
        "meeting_location": null,
        "ride": "Incredicoaster",
        "time": null,
        "num_children": 2,
        "message": "Naptime"
    }
]
```


## GET /api/request/:id

# Expected
*You will just need to hit the URL that ends with the unique id*

# Return
```
{
    "id": 2,
    "parent_id": 2,
    "vol_id": 3,
    "meeting_location": "Critter Country",
    "ride": "Splash Mtn.",
    "time": "",
    "num_children": 3,
    "message": "Allergic to peanuts"
}
```

## GET /api/request/user/:id

# Expected
*You will just need to hit the URL that ends with the unique user id*

# Return
```
{
    "message": "List of requests for this user",
    "quests": [
        {
            "id": 3,
            "parent_id": 4,
            "vol_id": 7,
            "meeting_location": "Adventureland",
            "ride": "Jungle Cruise",
            "time": "12:15 PM",
            "num_children": 3,
            "message": "Allergic to peanuts"
        },
        {
            "id": 4,
            "parent_id": 4,
            "vol_id": null,
            "meeting_location": "Adventureland",
            "ride": "Jungle Cruise",
            "time": null,
            "num_children": 3,
            "message": null
        }
    ]
}
```



## POST /api/request

# Expected
```
{
    "parent_id": "4",
    "vol_id": null,
    "meeting_location": "Adventureland",
    "ride": "Jungle Cruise",
    "time": null,
    "num_children": 3,
    "message": null
}
```

# Return
```
{
    "id": 4,
    "parent_id": 4,
    "vol_id": null,
    "meeting_location": "Adventureland",
    "ride": "Jungle Cruise",
    "time": null,
    "num_children": 3,
    "message": null
}
```


## PUT /api/request/:id

# Expected
```
{
    "parent_id": 4,
    "vol_id": 7,
    "meeting_location": "Adventureland",
    "ride": "Jungle Cruise",
    "time": "12:15 PM",
    "num_children": 3,
    "message": "Allergic to peanuts"
}
```

# Return
```
{
    "message": "Updated the request!",
    "data": {
    "parent_id": 4,
    "vol_id": 7,
    "meeting_location": "Adventureland",
    "ride": "Jungle Cruise",
    "time": "12:15 PM",
    "num_children": 3,
    "message": "Allergic to peanuts"
}
}
```


## DELETE /api/request/:id

# Expected
*You will just need to hit the URL that ends with the unique id*

# Return
```
{
    "message": "Successfully removed request."
}
```