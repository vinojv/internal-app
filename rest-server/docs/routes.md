# Routes

## Authentication

1.  **POST  /auth/login**  
    REQ:  
    ```js
    {
        username: String,
        password: String
    }
    ```
    RES:
    ```js
    {
        username: String
    }
    ```
    
2.  **GET   /auth/login**  
    RES:  
    `200 OK`
    
3.  **POST  /auth/signup**  
    REQ:  
    ```js
    {
        username: String,
        password: String
    }
    ```
    RES:  
    ```js
    {
        username: String,
        password: String
    }
    ```
    
## Empoloyees
1.  **POST /employees
    REQ:
    {
        name: String,
        designation: String,
        exprience: String,
        Photo: Blob/String,
        expertice: String
    }
    RES:
    {
        name: String,
        designation: String,
        exprience: String,
        Photo: Blob/String,
        expertice: String
    }

2. put  /employees:id
    REQ:
    {
        name: String,
        designation: String,
        exprience: String,
        Photo: Blob/String,
        expertice: String
    }

3.get /employees
    RES:
    [
      {
        name: String,
        designation: String,
        exprience: String,
        Photo: Blob/String,
        expertice: String
      }
    ]