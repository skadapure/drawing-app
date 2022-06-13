# Run locally
npm start

# API Endpoints
 - /images - Returns all the drawing for the user in the below format
  ### Current
  ```
  {
      images: [
        ["key1", "data/image,base64:..."],
        ["key2", "data/image,base64:..."]
      ]
  }
  ```

  ### Expected
  ```
  {
      images: [
        { key: "key1", value: "data/image,base64:..." },
        { key: "key2", value: "data/image,base64:..." }
      ]
  }
```
 - /image - Saves the image to\
  Body of the request - 
  ```
  { 
    image: "data/image, base64;...",
    userId: "user1"
  }
  ```

# API Documentation
No API Documentation like swagger is being implemented here

# Testing
No testing

# Access to s3
The bucket used is not public, so there is a need to replace the bucket name with the one thagt is accessible when running these