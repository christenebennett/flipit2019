# Endpoints

## Add a new user
`POST` to `/api/users` 
No request body required.

## See all users and user data
`GET` to `/api/users`

## Add emotions before and after
`PUT` to `/api/users/:id`
Request body requires the user id and selected emotion before or selected emotion after.
```
{
    "id": 1,
    "emotionBefore": 3,
}
```
or 
```
{
    "id": 1,
    "emotionAfter": 1,
}
```

## Emotions
Emotions are currently numbers 1 - 4, not strings (i.e. anxious, sleepy, etc.)