const tripsData = [
    {
      "destination": "Miami",
      "check_in_date": "2024-08-20",
      "check_out_date": "2024-08-22",
      "guests": {
        "adults": 2,
        "children": 0,
        "children_ages": [5]
      },
      "hotels": [
        {
          "id": 1,
          "name": "The Palms Hotel & Spa",
          "address": "3025 Collins Ave, Miami Beach, FL 33140",
          "image": "https://www.ca.kayak.com/news/wp-content/uploads/sites/186/2023/08/THEME_HOTEL_SIGN_FIVE_STARS_FACADE_BUILDING_GettyImages-1320779330-3.jpg",
          "galleryImages": [
            {
              "url": "https://www.ca.kayak.com/news/wp-content/uploads/sites/186/2023/08/THEME_HOTEL_SIGN_FIVE_STARS_FACADE_BUILDING_GettyImages-1320779330-3.jpg",
              "description": "Vista de la piscina"
            },
            {
              "url": "https://www.ca.kayak.com/news/wp-content/uploads/sites/186/2023/08/THEME_HOTEL_SIGN_FIVE_STARS_FACADE_BUILDING_GettyImages-1320779330-3.jpg",
              "description": "Habitación Deluxe"
            },
            {
              "url": "https://www.ca.kayak.com/news/wp-content/uploads/sites/186/2023/08/THEME_HOTEL_SIGN_FIVE_STARS_FACADE_BUILDING_GettyImages-1320779330-3.jpg",
              "description": "Restaurante del hotel"
            },
            {
              "url": "https://www.ca.kayak.com/news/wp-content/uploads/sites/186/2023/08/THEME_HOTEL_SIGN_FIVE_STARS_FACADE_BUILDING_GettyImages-1320779330-3.jpg",
              "description": "Vista al mar desde la habitación"
            },
            {
              "url": "https://www.ca.kayak.com/news/wp-content/uploads/sites/186/2023/08/THEME_HOTEL_SIGN_FIVE_STARS_FACADE_BUILDING_GettyImages-1320779330-3.jpg",
              "description": "Lobby del hotel"
            },
            {
              "url": "https://www.ca.kayak.com/news/wp-content/uploads/sites/186/2023/08/THEME_HOTEL_SIGN_FIVE_STARS_FACADE_BUILDING_GettyImages-1320779330-3.jpg",
              "description": "Spa del hotel"
            },
            {
              "url": "https://www.ca.kayak.com/news/wp-content/uploads/sites/186/2023/08/THEME_HOTEL_SIGN_FIVE_STARS_FACADE_BUILDING_GettyImages-1320779330-3.jpg",
              "description": "Área de juegos"
            },
            {
              "url": "https://www.ca.kayak.com/news/wp-content/uploads/sites/186/2023/08/THEME_HOTEL_SIGN_FIVE_STARS_FACADE_BUILDING_GettyImages-1320779330-3.jpg",
              "description": "Centro de fitness"
            },
            {
              "url": "https://www.ca.kayak.com/news/wp-content/uploads/sites/186/2023/08/THEME_HOTEL_SIGN_FIVE_STARS_FACADE_BUILDING_GettyImages-1320779330-3.jpg",
              "description": "Salón de eventos"
            },
            {
              "url": "https://www.ca.kayak.com/news/wp-content/uploads/sites/186/2023/08/THEME_HOTEL_SIGN_FIVE_STARS_FACADE_BUILDING_GettyImages-1320779330-3.jpg",
              "description": "Cafetería del hotel"
            }
          ],
          "description": "Un oasis tropical con servicios de primera clase y vistas impresionantes.",
          "room_cost_per_night": 250,
          "pool": true,
          "restaurant": true,
          "wifi": {
            "available": true,
            "quality": "high"
          },
          "gym": true,
          "spa": true,
          "parking": {
            "available": true,
            "cost_per_day": 20
          },
          "check_in_time": "3:00 PM",
          "check_out_time": "11:00 AM",
          "breakfast_included": true,
          "distance_to_beach": "0.2 miles",
          "distance_to_airport": "10 miles",
          "pet_friendly": {
            "allowed": true,
            "weight_limit_lbs": 25,
            "additional_fee": 50
          },
          "room_types": [
            {
              "type": "Standard",
              "cost_per_night": 250,
              "bed_type": "Queen",
              "view": "city",
              "images": [
                "https://www.ca.kayak.com/news/wp-content/uploads/sites/186/2023/08/THEME_HOTEL_SIGN_FIVE_STARS_FACADE_BUILDING_GettyImages-1320779330-3.jpg",
                "https://www.ca.kayak.com/news/wp-content/uploads/sites/186/2023/08/THEME_HOTEL_SIGN_FIVE_STARS_FACADE_BUILDING_GettyImages-1320779330-3.jpg",
                "https://www.ca.kayak.com/news/wp-content/uploads/sites/186/2023/08/THEME_HOTEL_SIGN_FIVE_STARS_FACADE_BUILDING_GettyImages-1320779330-3.jpg",
                "https://www.ca.kayak.com/news/wp-content/uploads/sites/186/2023/08/THEME_HOTEL_SIGN_FIVE_STARS_FACADE_BUILDING_GettyImages-1320779330-3.jpg"
              ]
            },
            {
              "type": "Deluxe",
              "cost_per_night": 350,
              "bed_type": "King",
              "view": "ocean",
              "images": [
                "https://www.ca.kayak.com/news/wp-content/uploads/sites/186/2023/08/THEME_HOTEL_SIGN_FIVE_STARS_FACADE_BUILDING_GettyImages-1320779330-3.jpg",
                "https://www.ca.kayak.com/news/wp-content/uploads/sites/186/2023/08/THEME_HOTEL_SIGN_FIVE_STARS_FACADE_BUILDING_GettyImages-1320779330-3.jpg",
                "https://www.ca.kayak.com/news/wp-content/uploads/sites/186/2023/08/THEME_HOTEL_SIGN_FIVE_STARS_FACADE_BUILDING_GettyImages-1320779330-3.jpg",
                "https://www.ca.kayak.com/news/wp-content/uploads/sites/186/2023/08/THEME_HOTEL_SIGN_FIVE_STARS_FACADE_BUILDING_GettyImages-1320779330-3.jpg"
              ]
            }
          ],
          "languages_spoken": ["English", "Spanish", "French"],
          "cancellation_policy": "Free cancellation up to 24 hours before check-in",
          "rating": 4.5,
          "extras": [
            {
              "id": 1,
              "name": "Desayuno",
              "price": 15
            },
            {
              "id": 2,
              "name": "Transporte al aeropuerto",
              "price": 30
            },
            {
              "id": 3,
              "name": "Acceso al gimnasio",
              "price": 10
            }
          ]
        },
        {
          "id": 2,
          "name": "Ocean Drive Hotel",
          "address": "123 Ocean Drive, Miami Beach, FL 33139",
          "image": "https://www.ca.kayak.com/news/wp-content/uploads/sites/186/2023/08/THEME_HOTEL_SIGN_FIVE_STARS_FACADE_BUILDING_GettyImages-1320779330-3.jpg",
          "galleryImages": [
            {
              "url": "https://www.ca.kayak.com/news/wp-content/uploads/sites/186/2023/08/THEME_HOTEL_SIGN_FIVE_STARS_FACADE_BUILDING_GettyImages-1320779330-3.jpg",
              "description": "Vista de la piscina"
            },
            {
              "url": "https://www.ca.kayak.com/news/wp-content/uploads/sites/186/2023/08/THEME_HOTEL_SIGN_FIVE_STARS_FACADE_BUILDING_GettyImages-1320779330-3.jpg",
              "description": "Habitación Deluxe"
            },
            {
              "url": "https://www.ca.kayak.com/news/wp-content/uploads/sites/186/2023/08/THEME_HOTEL_SIGN_FIVE_STARS_FACADE_BUILDING_GettyImages-1320779330-3.jpg",
              "description": "Restaurante del hotel"
            },
            {
              "url": "https://www.ca.kayak.com/news/wp-content/uploads/sites/186/2023/08/THEME_HOTEL_SIGN_FIVE_STARS_FACADE_BUILDING_GettyImages-1320779330-3.jpg",
              "description": "Vista al mar desde la habitación"
            }
          ],
          "description": "Hotel con vistas espectaculares y acceso directo a la playa.",
          "room_cost_per_night": 180,
          "pool": true,
          "restaurant": true,
          "wifi": {
            "available": true,
            "quality": "medium"
          },
          "gym": true,
          "spa": false,
          "parking": {
            "available": false,
            "cost_per_day": 0
          },
          "check_in_time": "4:00 PM",
          "check_out_time": "10:00 AM",
          "breakfast_included": false,
          "distance_to_beach": "0.1 miles",
          "distance_to_airport": "15 miles",
          "pet_friendly": {
            "allowed": true,
            "weight_limit_lbs": 15,
            "additional_fee": 30
          },
          "room_types": [
            {
              "type": "Standard",
              "cost_per_night": 180,
              "bed_type": "Queen",
              "view": "city",
              "images": [
                "https://www.ca.kayak.com/news/wp-content/uploads/sites/186/2023/08/THEME_HOTEL_SIGN_FIVE_STARS_FACADE_BUILDING_GettyImages-1320779330-3.jpg",
                "https://www.ca.kayak.com/news/wp-content/uploads/sites/186/2023/08/THEME_HOTEL_SIGN_FIVE_STARS_FACADE_BUILDING_GettyImages-1320779330-3.jpg"
              ]
            },
            {
              "type": "Ocean View",
              "cost_per_night": 250,
              "bed_type": "King",
              "view": "ocean",
              "images": [
                "https://www.ca.kayak.com/news/wp-content/uploads/sites/186/2023/08/THEME_HOTEL_SIGN_FIVE_STARS_FACADE_BUILDING_GettyImages-1320779330-3.jpg",
                "https://www.ca.kayak.com/news/wp-content/uploads/sites/186/2023/08/THEME_HOTEL_SIGN_FIVE_STARS_FACADE_BUILDING_GettyImages-1320779330-3.jpg"
              ]
            }
          ],
          "languages_spoken": ["English", "Spanish"],
          "cancellation_policy": "Free cancellation up to 48 hours before check-in",
          "rating": 2.7,
          "extras": [
            {
              "id": 1,
              "name": "Servicio a la habitación",
              "price": 20
            },
            {
              "id": 2,
              "name": "Alquiler de bicicletas",
              "price": 15
            }
          ]
        },
        {
          "id": 3,
          "name": "Beachfront Budget Hotel",
          "address": "456 Collins Ave, Miami Beach, FL 33139",
          "image": "https://www.ca.kayak.com/news/wp-content/uploads/sites/186/2023/08/THEME_HOTEL_SIGN_FIVE_STARS_FACADE_BUILDING_GettyImages-1320779330-3.jpg",
          "galleryImages": [
            {
              "url": "https://www.ca.kayak.com/news/wp-content/uploads/sites/186/2023/08/THEME_HOTEL_SIGN_FIVE_STARS_FACADE_BUILDING_GettyImages-1320779330-3.jpg",
              "description": "Vista de la piscina"
            },
            {
              "url": "https://www.ca.kayak.com/news/wp-content/uploads/sites/186/2023/08/THEME_HOTEL_SIGN_FIVE_STARS_FACADE_BUILDING_GettyImages-1320779330-3.jpg",
              "description": "Habitación sencilla"
            }
          ],
          "description": "Hotel económico justo en la playa, ideal para viajeros con presupuesto limitado.",
          "room_cost_per_night": 120,
          "pool": false,
          "restaurant": false,
          "wifi": {
            "available": true,
            "quality": "low"
          },
          "gym": false,
          "spa": false,
          "parking": {
            "available": false,
            "cost_per_day": 0
          },
          "check_in_time": "5:00 PM",
          "check_out_time": "9:00 AM",
          "breakfast_included": false,
          "distance_to_beach": "0.05 miles",
          "distance_to_airport": "20 miles",
          "pet_friendly": {
            "allowed": false
          },
          "room_types": [
            {
              "type": "Standard",
              "cost_per_night": 120,
              "bed_type": "Queen",
              "view": "city",
              "images": [
                "https://www.ca.kayak.com/news/wp-content/uploads/sites/186/2023/08/THEME_HOTEL_SIGN_FIVE_STARS_FACADE_BUILDING_GettyImages-1320779330-3.jpg"
              ]
            }
          ],
          "languages_spoken": ["English"],
          "cancellation_policy": "No refunds for cancellations",
          "rating": 1.5,
          "extras": []
        }
      ]
    },
    {
      "destination": "Chicago",
      "check_in_date": "2024-10-01",
      "check_out_date": "2024-10-07",
      "guests": {
        "adults": 1,
        "children": 0
      },
      "hotels": [
        {
          "id": 4,
          "name": "The Langham, Chicago",
          "address": "330 N Wabash Ave, Chicago, IL 60611",
          "image": "https://www.ca.kayak.com/news/wp-content/uploads/sites/186/2023/08/THEME_HOTEL_SIGN_FIVE_STARS_FACADE_BUILDING_GettyImages-1320779330-3.jpg",
          "galleryImages": [
            {
              "url": "https://www.ca.kayak.com/news/wp-content/uploads/sites/186/2023/08/THEME_HOTEL_SIGN_FIVE_STARS_FACADE_BUILDING_GettyImages-1320779330-3.jpg",
              "description": "Vista del lobby"
            },
            {
              "url": "https://www.ca.kayak.com/news/wp-content/uploads/sites/186/2023/08/THEME_HOTEL_SIGN_FIVE_STARS_FACADE_BUILDING_GettyImages-1320779330-3.jpg",
              "description": "Habitación Deluxe"
            }
          ],
          "description": "Hotel de lujo en el corazón de Chicago con vistas espectaculares al río.",
          "room_cost_per_night": 450,
          "pool": true,
          "restaurant": true,
          "wifi": {
            "available": true,
            "quality": "high"
          },
          "gym": true,
          "spa": true,
          "parking": {
            "available": true,
            "cost_per_day": 40
          },
          "check_in_time": "3:00 PM",
          "check_out_time": "12:00 PM",
          "breakfast_included": true,
          "distance_to_airport": "18 miles",
          "pet_friendly": {
            "allowed": true,
            "weight_limit_lbs": 20,
            "additional_fee": 75
          },
          "room_types": [
            {
              "type": "Standard",
              "cost_per_night": 450,
              "bed_type": "King",
              "view": "city",
              "images": [
                "https://www.ca.kayak.com/news/wp-content/uploads/sites/186/2023/08/THEME_HOTEL_SIGN_FIVE_STARS_FACADE_BUILDING_GettyImages-1320779330-3.jpg"
              ]
            },
            {
              "type": "Deluxe",
              "cost_per_night": 550,
              "bed_type": "King",
              "view": "river",
              "images": [
                "https://www.ca.kayak.com/news/wp-content/uploads/sites/186/2023/08/THEME_HOTEL_SIGN_FIVE_STARS_FACADE_BUILDING_GettyImages-1320779330-3.jpg"
              ]
            }
          ],
          "languages_spoken": ["English", "Spanish", "Mandarin"],
          "cancellation_policy": "Free cancellation up to 24 hours before check-in",
          "rating": 4.9,
          "extras": [
            {
              "id": 1,
              "name": "Desayuno",
              "price": 30
            },
            {
              "id": 2,
              "name": "Transporte al aeropuerto",
              "price": 50
            }
          ]
        },
        {
          "id": 5,
          "name": "The Peninsula Chicago",
          "address": "108 E Superior St, Chicago, IL 60611",
          "image": "https://www.ca.kayak.com/news/wp-content/uploads/sites/186/2023/08/THEME_HOTEL_SIGN_FIVE_STARS_FACADE_BUILDING_GettyImages-1320779330-3.jpg",
          "galleryImages": [
            {
              "url": "https://www.ca.kayak.com/news/wp-content/uploads/sites/186/2023/08/THEME_HOTEL_SIGN_FIVE_STARS_FACADE_BUILDING_GettyImages-1320779330-3.jpg",
              "description": "Piscina en la azotea"
            },
            {
              "url": "https://www.ca.kayak.com/news/wp-content/uploads/sites/186/2023/08/THEME_HOTEL_SIGN_FIVE_STARS_FACADE_BUILDING_GettyImages-1320779330-3.jpg",
              "description": "Habitación Deluxe"
            }
          ],
          "description": "Elegancia y confort en el centro de Chicago.",
          "room_cost_per_night": 500,
          "pool": true,
          "restaurant": true,
          "wifi": {
            "available": true,
            "quality": "high"
          },
          "gym": true,
          "spa": true,
          "parking": {
            "available": true,
            "cost_per_day": 45
          },
          "check_in_time": "3:00 PM",
          "check_out_time": "12:00 PM",
          "breakfast_included": true,
          "distance_to_airport": "17 miles",
          "pet_friendly": {
            "allowed": true,
            "weight_limit_lbs": 25,
            "additional_fee": 50
          },
          "room_types": [
            {
              "type": "Standard",
              "cost_per_night": 500,
              "bed_type": "King",
              "view": "city",
              "images": [
                "https://www.ca.kayak.com/news/wp-content/uploads/sites/186/2023/08/THEME_HOTEL_SIGN_FIVE_STARS_FACADE_BUILDING_GettyImages-1320779330-3.jpg"
              ]
            },
            {
              "type": "Deluxe",
              "cost_per_night": 600,
              "bed_type": "King",
              "view": "lake",
              "images": [
                "https://www.ca.kayak.com/news/wp-content/uploads/sites/186/2023/08/THEME_HOTEL_SIGN_FIVE_STARS_FACADE_BUILDING_GettyImages-1320779330-3.jpg"
              ]
            }
          ],
          "languages_spoken": ["English", "Spanish", "French"],
          "cancellation_policy": "Free cancellation up to 48 hours before check-in",
          "rating": 4.8,
          "extras": [
            {
              "id": 1,
              "name": "Desayuno buffet",
              "price": 35
            },
            {
              "id": 2,
              "name": "Acceso al spa",
              "price": 100
            }
          ]
        },
        {
          "id": 6,
          "name": "W Chicago - Lakeshore",
          "address": "644 N Lake Shore Dr, Chicago, IL 60611",
          "image": "https://www.ca.kayak.com/news/wp-content/uploads/sites/186/2023/08/THEME_HOTEL_SIGN_FIVE_STARS_FACADE_BUILDING_GettyImages-1320779330-3.jpg",
          "galleryImages": [
            {
              "url": "https://www.ca.kayak.com/news/wp-content/uploads/sites/186/2023/08/THEME_HOTEL_SIGN_FIVE_STARS_FACADE_BUILDING_GettyImages-1320779330-3.jpg",
              "description": "Vista del lago desde la habitación"
            },
            {
              "url": "https://www.ca.kayak.com/news/wp-content/uploads/sites/186/2023/08/THEME_HOTEL_SIGN_FIVE_STARS_FACADE_BUILDING_GettyImages-1320779330-3.jpg",
              "description": "Habitación con vista a la ciudad"
            }
          ],
          "description": "Moderno hotel con impresionantes vistas al lago Michigan.",
          "room_cost_per_night": 320,
          "pool": true,
          "restaurant": true,
          "wifi": {
            "available": true,
            "quality": "high"
          },
          "gym": true,
          "spa": false,
          "parking": {
            "available": true,
            "cost_per_day": 35
          },
          "check_in_time": "3:00 PM",
          "check_out_time": "11:00 AM",
          "breakfast_included": false,
          "distance_to_airport": "20 miles",
          "pet_friendly": {
            "allowed": true,
            "weight_limit_lbs": 30,
            "additional_fee": 60
          },
          "room_types": [
            {
              "type": "Standard",
              "cost_per_night": 320,
              "bed_type": "Queen",
              "view": "city",
              "images": [
                "https://www.ca.kayak.com/news/wp-content/uploads/sites/186/2023/08/THEME_HOTEL_SIGN_FIVE_STARS_FACADE_BUILDING_GettyImages-1320779330-3.jpg"
              ]
            },
            {
              "type": "Lake View",
              "cost_per_night": 400,
              "bed_type": "King",
              "view": "lake",
              "images": [
                "https://www.ca.kayak.com/news/wp-content/uploads/sites/186/2023/08/THEME_HOTEL_SIGN_FIVE_STARS_FACADE_BUILDING_GettyImages-1320779330-3.jpg"
              ]
            }
          ],
          "languages_spoken": ["English", "Spanish"],
          "cancellation_policy": "Free cancellation up to 24 hours before check-in",
          "rating": 4.2,
          "extras": [
            {
              "id": 1,
              "name": "Desayuno",
              "price": 25
            },
            {
              "id": 2,
              "name": "Alquiler de botes",
              "price": 75
            }
          ]
        }
      ]
    }
  ];
  
  export default tripsData;
  