# vizyul_backend

## How to run
### Dev  
`npm run start:dev`
### Production
`npm run build`

#### PORT=3000

## Endpoints

### Upload File. 

POST `/api/file`  
   
  Upload a file 

  Header:  
  
  ```
  "Content-Type": "application/json"
  ```

  Body:  


  ```
  "file": File Object // as Form Data
  ```

  or 

  ```
  {
    "file": "data:image/jpeg;base64...."
  }
  ```

  Response:

  ```
  {
    "status": true,
    "data": {
        "file_name": "949b4d70-a48d-11e8-a12f-dd03f72627a4.png",
        "url": "http://localhost:3000/api/file/949b4d70-a48d-11e8-a12f-dd03f72627a4.png"
    }
  }
  ```
   