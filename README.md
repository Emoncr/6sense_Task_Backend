# API Documentation for 6sense Task

## Base URL

The base URL for all endpoints is: `https://sixsense-task-backend.onrender.com`

## Endpoints

### 1. Create a User

- **API**: `Base_Url/api/user/create`
- **Method**: `POST`
- **Request Body**:
  ```json
  {
      "firstName": "updated",
      "lastName": "Emon",
      "email": "biplobemon75945@gmail.com",
      "phone": "+880 1883049802"  
  }

### 2. Get All Users

- **API**: `Base_Url/api/users`
- **Method**: `GET`
- **Response Example**:
  ```json
  {
      "success": true,
      "result": [
          {
              "_id": "65f256a26ea7cb11861429fa",
              "firstName": "updated user name",
              "status": "blocked"
          },
          {
              "_id": "65f256fd197a23a344dd4fc7",
              "firstName": "Biplob Hasan",
              "status": "active"
          },
          {
              "_id": "65f25a27e7fe28c29127a78c",
              "firstName": "Biplob Hasan",
              "status": "active"
          },
          {
              "_id": "65f25ddfcf359b16c919b7b6",
              "firstName": "Biplob Hasan",
              "status": "active"
          }
      ]
  }


### 3. Get User Details

- **API**: `Base_Url/api/user/details/{userID}`
- **Method**: `GET`
- **Response Example**:
  ```json
  {
      "success": true,
      "result": {
          "_id": "65f256fd197a23a344dd4fc7",
          "firstName": "Biplob Hasan",
          "lastName": "Emon",
          "email": "biplobemo75945@gmail.com",
          "phone": "+880 1883049802",
          "status": "active",
          "createdAt": "2024-03-14T01:46:37.356Z",
          "updatedAt": "2024-03-14T01:46:37.356Z",
          "__v": 0
      }
  }



### 4. Update User Information without Email

- **API**: `Base_Url/api/user/update/{userID}`
- **Method**: `PATCH`
- **Request Body**:
  ```json
  {
      "firstName": "updated user name"
  }


### 5. Update User Status

- **API**: `Base_Url/api/user/status/update/{userID}`
- **Method**: `PATCH`
- **Request Body**:
  ```json
  {
      "status": "blocked"
  }
- OR
- **Request Body**:
  ```json
  {
      "status": "active"
  }


### 6. Delete User From List
- **API**: `Base_Url/api/user/delete/{userID}`
- **Method**: `DELETE`
- **Response Example**:
  ```json
  {
      "success": true,
      "deletedUser": {
          "_id": "65f256fd197a23a344dd4fc7",
          "firstName": "Biplob Hasan",
          "lastName": "Emon",
          "email": "biplobemo75945@gmail.com",
          "phone": "+880 1883049802",
          "status": "active",
          "createdAt": "2024-03-14T01:46:37.356Z",
          "updatedAt": "2024-03-14T01:46:37.356Z",
          "__v": 0
      }
  }


  
