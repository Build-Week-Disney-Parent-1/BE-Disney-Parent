## Disney-Parent BackEnd

### https://disney-parent-api.herokuapp.com/

# EndPoints

# AUTH

## POST /api/auth/register

### Expected
```
{
	"username": "Goofy",
	"email": "goofy@email.com",
	"password": "password",
	"role": "parent"
}
```

### Return
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

### Expected
```
{
	"email": "goofy@email.com",
	"password": "password",
	"role": "parent"
}
```

### Return
```
{
    "message": "Welcome Goofy!",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOjEsInVzZXJuYW1lIjoiR29vZnkiLCJpYXQiOjE1ODM0NjM4OTQsImV4cCI6MTU4MzQ4NTQ5NH0.tfivlTD8hNZ5lEhUY3e6cgFU9MeVrWddFzCV9Rr0-E8"
}
```


# USERS these endpoints are protected and need to have a token submitted in the Header under Authorization

## GET /api/users

### Expected
*You will just need to hit the URL with the auth token in the Header*

### Return
```
[
    {
        "username": "Goofy",
        "email": "goofy@email.com",
        "role": "parent",
        "about": "fake person, fake account",
        "address": "123 fake street",
        "age": 120,
        "children": "Max",
        "family_size": 2,
        "home_park": "Disneyland Anaheim"
    },
    {
        "username": "Oswald",
        "email": "oswald@email.com",
        "role": "volunteer",
        "about": null,
        "address": null,
        "age": null,
        "children": null,
        "family_size": null,
        "home_park": null
    },
    {
        "username": "Jane Doe",
        "email": "JaneDoe@gmail.com",
        "role": "parent",
        "about": null,
        "address": null,
        "age": null,
        "children": null,
        "family_size": null,
        "home_park": null
    },
    {
        "username": "John Doe",
        "email": "johndoe@gmail.com",
        "role": "parent",
        "about": null,
        "address": null,
        "age": null,
        "children": null,
        "family_size": null,
        "home_park": null
    },
    {
        "username": "Test",
        "email": "test@gmail.com",
        "role": "parent",
        "about": null,
        "address": null,
        "age": null,
        "children": null,
        "family_size": null,
        "home_park": null
    },
    {
        "username": "Test2",
        "email": "test2@gmail.com",
        "role": "parent",
        "about": null,
        "address": null,
        "age": null,
        "children": null,
        "family_size": null,
        "home_park": null
    },
    {
        "username": "Test3",
        "email": "Test@gmail.com",
        "role": "parent",
        "about": null,
        "address": null,
        "age": null,
        "children": null,
        "family_size": null,
        "home_park": null
    },
    {
        "username": "Test4",
        "email": "Test4@gmail.com",
        "role": "parent",
        "about": null,
        "address": null,
        "age": null,
        "children": null,
        "family_size": null,
        "home_park": null
    },
    {
        "username": "Mickey",
        "email": "mickey@email.com",
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

### Expected
*You will just need to hit the URL that ends with the unique id with the auth token in the Header*

### Return
```
{
    "username": "John Doe",
    "email": "johndoe@gmail.com",
    "role": "parent",
    "about": null,
    "address": null,
    "age": null,
    "children": null,
    "family_size": null,
    "home_park": null
}
```


## PUT /api/users/:id

### Expected
```
{
    "username": "John Doe",
    "email": "johndoe@gmail.com",
    "role": "parent",
    "about": "I'm a fake person, with a fake account",
    "address": "123 Fake Street",
    "age": 100,
    "children": "Jack, Jill, Bobby",
    "family_size": 3,
    "home_park": "Disneyland Park"
}
```

### Return
```
{
    "message": "Updated the user!",
    "data": {
        "username": "John Doe",
        "email": "johndoe@gmail.com",
        "role": "parent",
        "about": "I'm a fake person, with a fake account",
        "address": "123 Fake Street",
        "age": 100,
        "children": "Jack, Jill, Bobby",
        "family_size": 3,
        "home_park": "Disneyland Park"
    }
}
```


## DELETE /api/users/:id

### Expected
*You will just need to hit the URL that ends with the unique id*

### Return
```
{
    "message": "Successfully removed the user 2."
}
```


# REQUEST these endpoints are protected and need to have a token submitted in the Header under Authorization
Both the 'parent_id' and the 'vol_id' are referring to the 'id' of the user.

## GET /api/request

### Expected
*You will just need to hit the URL with the auth token in the Header*

### Return
```
[
    {
        "id": 2,
        "parent_id": 4,
        "vol_id": null,
        "meeting_location": "Adventureland",
        "ride": "Jungle Cruise",
        "time": null,
        "num_children": 3,
        "message": null,
        "accepted": false
    },
    {
        "id": 3,
        "parent_id": 3,
        "vol_id": null,
        "meeting_location": "Critter Country",
        "ride": "Splash Mountain",
        "time": null,
        "num_children": 1,
        "message": null,
        "accepted": false
    },
    {
        "id": 4,
        "parent_id": 4,
        "vol_id": null,
        "meeting_location": "Tomorrowland",
        "ride": "Star Tours",
        "time": null,
        "num_children": 5,
        "message": null,
        "accepted": false
    }
]
```


## GET /api/request/:id

### Expected
*You will just need to hit the URL that ends with the unique id with the auth token in the Header*

### Return
```
{
    "id": 2,
    "parent_id": 4,
    "vol_id": null,
    "meeting_location": "Adventureland",
    "ride": "Jungle Cruise",
    "time": null,
    "num_children": 3,
    "message": null,
    "accepted": false
}
```

## GET /api/request/user/:id

### Expected
*You will just need to hit the URL that ends with the unique user id with the auth token in the Header*

### Return
```
{
    "message": "List of requests for this user",
    "quests": [
        {
            "id": 2,
            "parent_id": 4,
            "vol_id": null,
            "meeting_location": "Adventureland",
            "ride": "Jungle Cruise",
            "time": null,
            "num_children": 3,
            "message": null,
            "accepted": false
        },
        {
            "id": 4,
            "parent_id": 4,
            "vol_id": null,
            "meeting_location": "Tomorrowland",
            "ride": "Star Tours",
            "time": null,
            "num_children": 5,
            "message": null,
            "accepted": false
        }
    ]
}
```



## POST /api/request

### Expected
```
{
    "parent_id": "4",
    "vol_id": null,
    "meeting_location": "Adventureland",
    "ride": "Jungle Cruise",
    "time": null,
    "num_children": 3,
    "message": null,
    "accepted": 0
}
```

### Return
```
    {
        "id": 2,
        "parent_id": 4,
        "vol_id": null,
        "meeting_location": "Adventureland",
        "ride": "Jungle Cruise",
        "time": null,
        "num_children": 3,
        "message": null,
        "accepted": false
    }
```


## PUT /api/request/:id

### Expected
```
{
    "parent_id": 4,
    "vol_id": 7,
    "meeting_location": "Adventureland",
    "ride": "Jungle Cruise",
    "time": "12:15 PM",
    "num_children": 3,
    "message": "Allergic to peanuts",
    "accepted": 1
}
```

### Return
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
    "message": "Allergic to peanuts",
    "accepted": true
}
}
```


## DELETE /api/request/:id

### Expected
*You will just need to hit the URL that ends with the unique id*

### Return
```
{
    "message": "Successfully removed request."
}
```
