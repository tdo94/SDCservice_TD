# CRUD API 

# CREATE

```POST   
/api/products

Request:
Content-Type: 'json/application'
Body: 
{
  "name": String,
  "category": String,
  "manufacturer": String,
  "primary_image": String,
  "review_one_star_count": Number,
  "review_two_star_count": Number,
  "review_three_star_count": Number,
  "review_four_star_count": Number,
  "review_five_star_count": Number,
  "review_count": Number,
  "question_count": Number,
  "price": Number,
  "total_price": Number,
  "stock": Number,
  "is_prime": Boolean,
  "description": String
}
```
PROPERTIES:
```
name:           Product's name
category:       A single category to which this product associated
manufacture:    This product's origin/ seller
primary_image:  primary image of the product
price:          Price of the product
description:    Product's description
```
```
Response:
status: 201 OK
{
  "id": Number,
  "unique_id": Number,
}
```
PROPERTIES:
```
id:            product's id in the database
unique_id:     created product's id upon creation
```
```

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
      "review_one_star_count": Number (i.e: 852),
      "review_two_star_count": Number (i.e: 556),
      "review_three_star_count": Number (i.e: 986),
      "review_four_star_count": Number (i.e: 613),
      "review_five_star_count": Number (i.e: 424),
      "review_count": Number (i.e: 3431),
      "question_count": Number (i.e: 436),
      "price": Number (i.e: 67),
      "is_prime": Boolean,
      "description": String (i.e: "Product's description")
    }

    Errors:
    status: 404 Not Found
```
```
PROPERTIES:
id:                       Product's id in the database
unique_id:                Created product's id upon creation
name:                     Product's name
category:                 A single category to which this product associated
manufacture:              This product's origin/ seller
primary_image:            Link to primary image of the product
review_one_star_count:    Number of review that gave 1 star to the product
review_two_star_count:    Number of review that gave 2 star to the product
review_three_star_count:  Number of review that gave 3 star to the product
review_four_star_count:   Number of review that gave 4 star to the product
review_five_star_count:   Number of review that gave 5 star to the product
review_count:             Total number of reviews
question_count:           Total number of questions about this product
is_prime:                 True/false on whether or not this product is qualified for Prime
price:                    Price of the product
description:              Product's description
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
  "review_one_star_count": Number,
  "review_two_star_count": Number,
  "review_three_star_count": Number,
  "review_four_star_count": Number,
  "review_five_star_count": Number,
  "review_count": Number,
  "question_count": Number,
  "price": Number,
  "total_price": Number,
  "stock": Number,
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
