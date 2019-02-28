# CRUD API 

# CREATE
```POST   
/api/products

Request:
Content-Type: 'json/application'
Body: 
{
  "id": Number,
  "unique_id": Number,
  "name": String,
  "category": String,
  "manufacturer": String,
  "primary_image": String,
  "review_one_star_count": Numer,
  "review_two_star_count": Numer,
  "review_three_star_count": Numer,
  "review_four_star_count": Numer,
  "review_five_star_count": Numer,
  "review_count": Numer,
  "question_count": Numer,
  "price": Numer,
  "total_price": Numer,
  "stock": Numer,
  "is_prime": Boolean,
  "description": String
}

Response:
status: 201 OK
{
  "id": Number,
  "unique_id": Number,
}

Error:
status: 400 Bad Request
```

# READ
PRODUCT INFO: 
--For a single product 
```
    GET    /api/products/:id

    id    :    Product's id. Type: Number

    Response:
    status: 200 OK
    {
      "id": Number (i.e: 1),
      "unique_id": Number (i.e: 1),
      "name": String (i.e: "Product 1"),
      "category": String (i.e: "electronics"),
      "manufacturer": String (i.e: "Bogisich Inc"),
      "primary_image": String (i.e: "https://s3.us-east-2.amazonaws.com/product-summary-component/electronics1.jpg"),
      "review_one_star_count": Numer (i.e: 852),
      "review_two_star_count": Numer (i.e: 556),
      "review_three_star_count": Numer (i.e: 986),
      "review_four_star_count": Numer (i.e: 613),
      "review_five_star_count": Numer (i.e: 424),
      "review_count": Numer (i.e: 3431),
      "question_count": Numer (i.e: 436),
      "price": Numer (i.e: 67),
      "total_price": Numer (i.e: 77),
      "stock": Numer (i.e: 951),
      "is_prime": Boolean,
      "description": String (i.e: "Product's description")
    }

    Errors:
    status: 404 Not Found
```

--For all products 
```
    GET    /api/products

    Response:
    status: 200 OK
    [
      {
        "id": Number,
        "unique_id": Number,
        "name": String,
        "category": String,
        "manufacturer": String,
        ...
      },
      {
        "id": Number,
        "unique_id": Number,
        "name": String,
        "category": String,
        "manufacturer": String,
        ...
      },
      {
        "id": Number,
        "unique_id": Number,
        "name": String,
        "category": String,
        "manufacturer": String,
        ...
      }
    ]

    Errors:
    status: 404 Not Found
```
REVIEWS:
--All reviews for a certain product id
```
    GET    /api/productreview/:id

    id    :    Product's id. Type: Number

    Response:
    status: 200 OK
    {
      "rating": Number,
      "total_reviews": Number,
      "no_one_start_reviews": Number,
      "no_two_start_reviews": Number,
      "no_three_start_reviews": Number,
      "no_four_start_reviews": Number,
      "no_five_start_reviews": Number,
    }

    Errors:
    status: 404 Not Found
```

# UPDATE
```
PUT    /api/products/:id

id    :    Product's id. Type: Number

Request:
Content-Type: 'json/application'
Body: 
{
  "name": String,
  "category": String,
  "manufacturer": String,
  "primary_image": String,
  "review_one_star_count": Numer,
  "review_two_star_count": Numer,
  "review_three_star_count": Numer,
  "review_four_star_count": Numer,
  "review_five_star_count": Numer,
  "review_count": Numer,
  "question_count": Numer,
  "price": Numer,
  "total_price": Numer,
  "stock": Numer,
  "is_prime": Boolean,
  "description": String
}
```
** All fields not needed, only put in the information to be updated
```
Response:
status: 200 OK
{
  "id": Number,
  "unique_id": Number,
  "name": String,
  "category": String,
  "manufacturer": String,
  ...
}
Returned data is the updated item.

Errors:
status: 204 No Content
(can't find item to update)
```
PUT will replace the existing data with the newly provided data

# DELETE
```
DELETE    /api/products/:id

id    :    Product's id. Type: Number

Response: 
status: 200 OK

Error:
status: 204 No Content
```
Delete action will remove the product with the given id from the database
