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
  "secondary_image": String,
  "price": Number,
  "is_prime": Boolean,
  "description": String
}
```
PROPERTIES:
```
name:             Product's name
category:         A single category to which this product associated
manufacture:      This product's origin/ seller
primary_image:    Primary image of the product
secondary_image:  Secondary image of the product
price:            Price of the product
description:      Product's description
```
```
Response:
status: 201 OK
{
  "id": Number,
}
```
PROPERTIES:
```
id:            Product's id in the database
```
```

Error:
status: 400 Bad Request
Field(s) is missing
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
      "id":78,
      "name":"Amazon Product 78",
      "category":"toys",
      "manufacturer":"Adams LLC",
      "question_count":852,
      "price":573,
      "is_prime":true,
      "description":"Product 78's description",
      "review_one_star_count":514,
      "review_two_star_count":733,
      "review_three_star_count":481,
      "review_four_star_count":661,
      "review_five_star_count":604,
      "review_count":2993,
      "primary_image":"http://lorempixel.com/640/480/city",
      "secondary_image":"http://lorempixel.com/640/480/fashion"
    }

    Errors:
    status: 404 Not Found
    No such product
```
```
PROPERTIES:
id:                       Product's id in the database
name:                     Product's name
category:                 A single category to which this product associated
manufacture:              This product's origin/ seller
primary_image:            Link to primary image of the product
secondary_image:          Link to secondary image of the product
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

--For 5 products with the most number of reviews:
```
    GET    /api/products

    Response:
    status: 200 OK
    [
      {
        "id": Number,
        "name": String,
        "category": String,
        "manufacturer": String,
        ...
      },
      {
        "id": Number,
        "name": String,
        "category": String,
        "manufacturer": String,
        ...
      },
      {
        "id": Number,
        "name": String,
        "category": String,
        "manufacturer": String,
        ...
      },
      {
        "id": Number,
        "name": String,
        "category": String,
        "manufacturer": String,
        ...
      },
      {
        "id": Number,
        "name": String,
        "category": String,
        "manufacturer": String,
        ...
      }
    ]

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
  "secondary_image": String,
  "review_one_star_count": Number,
  "review_two_star_count": Number,
  "review_three_star_count": Number,
  "review_four_star_count": Number,
  "review_five_star_count": Number,
  "review_count": Number,
  "question_count": Number,
  "price": Number,
  "total_price": Number,
  "is_prime": Boolean,
  "description": String
}
```
** All field needed for update. Update data can be the same with the previous record.

```
Response:
status: 200 OK
{
  "id": Number,
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
{
  "row Deleted":3
}

Error:
status: 204 No Content
```
Delete action will remove the product with the given id from the database
The return response will tell you how many lines got deleted from all combined tables.
