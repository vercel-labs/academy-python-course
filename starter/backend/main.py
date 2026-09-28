from fastapi import FastAPI

app = FastAPI()

items = [
    {"id": 1, "name": "Fernwood Sectional", "category": "Seating", "price": 2499.00, "in_stock": True},
    {"id": 2, "name": "Knotted Oak Coffee Table", "category": "Tables", "price": 849.00, "in_stock": True},
    {"id": 3, "name": "Garrison Bookshelf", "category": "Storage", "price": 629.00, "in_stock": False},
    {"id": 4, "name": "The Long Table", "category": "Tables", "price": 1199.00, "in_stock": True},
    {"id": 5, "name": "Pivot Desk Chair", "category": "Seating", "price": 449.00, "in_stock": True},
    {"id": 6, "name": "Ember Side Table", "category": "Tables", "price": 299.00, "in_stock": True},
    {"id": 7, "name": "Stacked Nightstand", "category": "Storage", "price": 389.00, "in_stock": False},
    {"id": 8, "name": "Canvas Floor Lamp", "category": "Lighting", "price": 219.00, "in_stock": True},
]


@app.get("/api")
def home():
    return {"message": "Hazel Home Furniture API"}


@app.get("/api/items")
def get_items():
    return items
