const tripsData = [
  {
    "destination": "Orlando, Florida",
    "guests": { "adults": 2, "children": 1 },
    "hotels": [
      {
        "id": 1,
        "name": "The Palms Hotel & Spa",
        "address": "3025 Collins Ave, Miami Beach, FL 33140",
        "image": "https://images.trvl-media.com/lodging/1000000/10000/4800/4745/9ac9ac8c.jpg?impolicy=resizecrop&rw=1200&ra=fit",
          "galleryImages": [
            {
              "url": "https://images.trvl-media.com/lodging/1000000/10000/4800/4745/9ac9ac8c.jpg?impolicy=resizecrop&rw=1200&ra=fit",
              "description": "Image 1"
            },
            {
              "url": "https://images.trvl-media.com/lodging/1000000/10000/4800/4745/98c0f3da.jpg?impolicy=resizecrop&rw=1200&ra=fit",
              "description": "Image 2"
            },
            {
              "url": "https://images.trvl-media.com/lodging/1000000/10000/4800/4745/f8185ba9.jpg?impolicy=resizecrop&rw=1200&ra=fit",
              "description": "Image 3"
            },
            {
              "url": "https://images.trvl-media.com/lodging/1000000/10000/4800/4745/ea03bbe9.jpg?impolicy=resizecrop&rw=1200&ra=fit",
              "description": "Image 4"
            },
            {
              "url": "https://images.trvl-media.com/lodging/1000000/10000/4800/4745/592ff049.jpg?impolicy=resizecrop&rw=1200&ra=fit",
              "description": "Image 5"
            },
            {
              "url": "https://images.trvl-media.com/lodging/1000000/10000/4800/4745/365708e8.jpg?impolicy=resizecrop&rw=1200&ra=fit",
              "description": "Image 6"
            },
            {
              "url": "https://images.trvl-media.com/lodging/1000000/10000/4800/4745/9c80a84b.jpg?impolicy=resizecrop&rw=1200&ra=fit",
              "description": "Image 7"
            },
            {
              "url": "https://images.trvl-media.com/lodging/1000000/10000/4800/4745/2a2d0835.jpg?impolicy=resizecrop&rw=1200&ra=fit",
              "description": "Image 8"
            },
            {
              "url": "https://images.trvl-media.com/lodging/1000000/10000/4800/4745/7941842f.jpg?impolicy=resizecrop&rw=1200&ra=fit",
              "description": "Image 9"
            },
            {
              "url": "https://images.trvl-media.com/lodging/1000000/10000/4800/4745/b8406ddf.jpg?impolicy=resizecrop&rw=1200&ra=fit",
              "description": "Image 10"
            },
            {
              url: "https://images.trvl-media.com/lodging/1000000/10000/4800/4745/96c4b3b0.jpg?impolicy=resizecrop&rw=1200&ra=fit",
              description: "Sunny Getaway"
            },
            {
              url: "https://images.trvl-media.com/lodging/1000000/10000/4800/4745/63f42055.jpg?impolicy=resizecrop&rw=1200&ra=fit",
              description: "Cozy Retreat"
            },
            {
              url: "https://images.trvl-media.com/lodging/1000000/10000/4800/4745/6de998e9.jpg?impolicy=resizecrop&rw=1200&ra=fit",
              description: "Lush Escape"
            },
            {
              url: "https://images.trvl-media.com/lodging/1000000/10000/4800/4745/9533ac11.jpg?impolicy=resizecrop&rw=1200&ra=fit",
              description: "Urban Oasis"
            },
            {
              url: "https://images.trvl-media.com/lodging/1000000/10000/4800/4745/c7b5ec9e.jpg?impolicy=resizecrop&rw=1200&ra=fit",
              description: "Beachfront Paradise"
            },
            {
              url: "https://images.trvl-media.com/lodging/1000000/10000/4800/4745/3f0c3a3f.jpg?impolicy=resizecrop&rw=1200&ra=fit",
              description: "Mountain Hideaway"
            },
            {
              url: "https://images.trvl-media.com/lodging/1000000/10000/4800/4745/6ac8eab7.jpg?impolicy=resizecrop&rw=1200&ra=fit",
              description: "Serene Vista"
            },
            {
              url: "https://images.trvl-media.com/lodging/1000000/10000/4800/4745/662f9394.jpg?impolicy=resizecrop&rw=1200&ra=fit",
              description: "Tropical Escape"
            },
            {
              url: "https://images.trvl-media.com/lodging/1000000/10000/4800/4745/816d3c86.jpg?impolicy=resizecrop&rw=1200&ra=fit",
              description: "Lakeside Retreat"
            },
            {
              url: "https://images.trvl-media.com/lodging/1000000/10000/4800/4745/14acff0b.jpg?impolicy=resizecrop&rw=1200&ra=fit",
              description: "Desert Adventure"
            },
            {
              url: "https://images.trvl-media.com/lodging/1000000/10000/4800/4745/e64ec609.jpg?impolicy=resizecrop&rw=1200&ra=fit",
              description: "Countryside Getaway"
            },
            {
              url: "https://images.trvl-media.com/lodging/1000000/10000/4800/4745/9cc1770c.jpg?impolicy=resizecrop&rw=1200&ra=fit",
              description: "Historic Haven"
            },
            {
              url: "https://images.trvl-media.com/lodging/1000000/10000/4800/4745/a92154a5.jpg?impolicy=resizecrop&rw=1200&ra=fit",
              description: "Riverside Escape"
            }
          ],
        "description": "Un oasis tropical con servicios de primera clase y vistas impresionantes.",
        "room_cost_per_night": 250,
        "pool": true,
        "restaurant": true,
        "wifi": { "available": true, "quality": "high" },
        "gym": true,
        "spa": true,
        "parking": { "available": true, "cost_per_day": 20 },
        "check_in_time": "3:00 PM",
        "check_out_time": "11:00 AM",
        "breakfast_included": true,
        "distance_to_beach": "0.2 miles",
        "distance_to_airport": "10 miles",
        "pet_friendly": { "allowed": true, "weight_limit_lbs": 25, "additional_fee": 50 },
        "room_types": [
          {
            "type": "Standard",
            "cost_per_night": 250,
            "bed_type": "Queen",
            "view": "city",
            "images": [
              "https://via.placeholder.com/150",
              "https://via.placeholder.com/150"
            ]
          },
          {
            "type": "Deluxe",
            "cost_per_night": 350,
            "bed_type": "King",
            "view": "ocean",
            "images": [
              "https://via.placeholder.com/150",
              "https://via.placeholder.com/150"
            ]
          }
        ],
        "languages_spoken": ["English", "Spanish", "French"],
        "cancellation_policy": "Free cancellation up to 24 hours before check-in",
        "rating": 4.5,
        "extras": [
          { "id": 1, "name": "Desayuno", "price": 15 },
          { "id": 2, "name": "Transporte al aeropuerto", "price": 30 },
          { "id": 3, "name": "Acceso al gimnasio", "price": 10 }
        ],
        "available_dates": "2024-01-01 to 2030-12-31"
      },
      {
        "id": 7,
        "name": "Walt Disney World Resort",
        "address": "Lake Buena Vista, FL 32830",
        "image": "https://images.trvl-media.com/lodging/8000000/7380000/7374500/7374428/e68a2040.jpg?impolicy=resizecrop&rw=1200&ra=fit",
        "galleryImages": [
          {
            url: "https://images.trvl-media.com/lodging/8000000/7380000/7374500/7374428/3e74ad68.jpg?impolicy=resizecrop&rw=1200&ra=fit",
            description: "Sunset Serenity"
          },
          {
            url: "https://images.trvl-media.com/lodging/8000000/7380000/7374500/7374428/ef1e5b0d.jpg?impolicy=resizecrop&rw=1200&ra=fit",
            description: "Tranquil Oasis"
          },
          {
            url: "https://images.trvl-media.com/lodging/8000000/7380000/7374500/7374428/e68a2040.jpg?impolicy=resizecrop&rw=1200&ra=fit",
            description: "Peaceful Retreat"
          },
          {
            url: "https://images.trvl-media.com/lodging/8000000/7380000/7374500/7374428/60c5847d.jpg?impolicy=resizecrop&rw=1200&ra=fit",
            description: "Modern Escape"
          },
          {
            url: "https://images.trvl-media.com/lodging/8000000/7380000/7374500/7374428/acf45d1e.jpg?impolicy=resizecrop&rw=1200&ra=fit",
            description: "Urban Chic"
          },
          {
            url: "https://images.trvl-media.com/lodging/8000000/7380000/7374500/7374428/46ddb472.jpg?impolicy=resizecrop&rw=1200&ra=fit",
            description: "Luxury Stay"
          },
          {
            url: "https://images.trvl-media.com/lodging/8000000/7380000/7374500/7374428/4e234698.jpg?impolicy=resizecrop&rw=1200&ra=fit",
            description: "Elegant Ambiance"
          },
          {
            url: "https://images.trvl-media.com/lodging/8000000/7380000/7374500/7374428/9af763a2.jpg?impolicy=resizecrop&rw=1200&ra=fit",
            description: "Rooftop Views"
          },
          {
            url: "https://images.trvl-media.com/lodging/8000000/7380000/7374500/7374428/aecd12e8.jpg?impolicy=resizecrop&rw=1200&ra=fit",
            description: "Coastal Comfort"
          },
          {
            url: "https://images.trvl-media.com/lodging/8000000/7380000/7374500/7374428/095025b5.jpg?impolicy=resizecrop&rw=1200&ra=fit",
            description: "Seaside Escape"
          },
          {
            url: "https://images.trvl-media.com/lodging/8000000/7380000/7374500/7374428/3ce899b4.jpg?impolicy=resizecrop&rw=1200&ra=fit",
            description: "Garden Tranquility"
          },
          {
            url: "https://images.trvl-media.com/lodging/8000000/7380000/7374500/7374428/4a312f4a.jpg?impolicy=resizecrop&rw=1200&ra=fit",
            description: "Vintage Charm"
          },
          {
            url: "https://images.trvl-media.com/lodging/8000000/7380000/7374500/7374428/60f1c603.jpg?impolicy=resizecrop&rw=1200&ra=fit",
            description: "Classic Elegance"
          },
          {
            url: "https://images.trvl-media.com/lodging/8000000/7380000/7374500/7374428/ef691998.jpg?impolicy=resizecrop&rw=1200&ra=fit",
            description: "Urban Retreat"
          },
          {
            url: "https://images.trvl-media.com/lodging/8000000/7380000/7374500/7374428/1fb49b1d.jpg?impolicy=resizecrop&rw=1200&ra=fit",
            description: "Modern Marvel"
          },
          {
            url: "https://images.trvl-media.com/lodging/8000000/7380000/7374500/7374428/5c880271.jpg?impolicy=resizecrop&rw=1200&ra=fit",
            description: "Quiet Hideaway"
          },
          {
            url: "https://images.trvl-media.com/lodging/8000000/7380000/7374500/7374428/ec469698.jpg?impolicy=resizecrop&rw=1200&ra=fit",
            description: "Sophisticated Stay"
          }
        ],
        "description": "Experiencia mágica para toda la familia con acceso a parques temáticos.",
        "room_cost_per_night": 300,
        "pool": true,
        "restaurant": true,
        "wifi": { "available": true, "quality": "high" },
        "gym": true,
        "spa": true,
        "parking": { "available": true, "cost_per_day": 25 },
        "check_in_time": "4:00 PM",
        "check_out_time": "11:00 AM",
        "breakfast_included": false,
        "distance_to_beach": "N/A",
        "distance_to_airport": "15 miles",
        "pet_friendly": { "allowed": false },
        "room_types": [
          {
            "type": "Standard",
            "cost_per_night": 300,
            "bed_type": "Queen",
            "view": "park",
            "images": [
              "https://via.placeholder.com/150",
              "https://via.placeholder.com/150"
            ]
          }
        ],
        "languages_spoken": ["English", "Spanish"],
        "cancellation_policy": "Free cancellation up to 48 hours before check-in",
        "rating": 4.8,
        "extras": [
          { "id": 1, "name": "Desayuno buffet", "price": 20 }
        ]
      },
      {
        "id": 8,
        "name": "Universal's Cabana Bay Beach Resort",
        "address": "6550 Adventure Way, Orlando, FL 32819",
        "image": "https://images.trvl-media.com/lodging/1000000/10000/4800/4745/96c4b3b0.jpg?impolicy=resizecrop&rw=1200&ra=fit",
        "galleryImages": [
          {
            url: "https://images.trvl-media.com/lodging/1000000/10000/4800/4745/96c4b3b0.jpg?impolicy=resizecrop&rw=1200&ra=fit",
            description: "Resort Lobby Area"
          },
          {
            url: "https://images.trvl-media.com/lodging/1000000/10000/4800/4745/63f42055.jpg?impolicy=resizecrop&rw=1200&ra=fit",
            description: "Deluxe Poolside Room"
          },
          {
            url: "https://images.trvl-media.com/lodging/1000000/10000/4800/4745/6de998e9.jpg?impolicy=resizecrop&rw=1200&ra=fit",
            description: "Family Suite - Living Area"
          },
          {
            url: "https://images.trvl-media.com/lodging/1000000/10000/4800/4745/9533ac11.jpg?impolicy=resizecrop&rw=1200&ra=fit",
            description: "Poolside Lounge Area"
          },
          {
            url: "https://images.trvl-media.com/lodging/1000000/10000/4800/4745/c7b5ec9e.jpg?impolicy=resizecrop&rw=1200&ra=fit",
            description: "Cabana Bay Courtyard"
          },
          {
            url: "https://images.trvl-media.com/lodging/1000000/10000/4800/4745/3f0c3a3f.jpg?impolicy=resizecrop&rw=1200&ra=fit",
            description: "Poolside Dining"
          },
          {
            url: "https://images.trvl-media.com/lodging/1000000/10000/4800/4745/6ac8eab7.jpg?impolicy=resizecrop&rw=1200&ra=fit",
            description: "Resort Gym Facilities"
          },
          {
            url: "https://images.trvl-media.com/lodging/1000000/10000/4800/4745/662f9394.jpg?impolicy=resizecrop&rw=1200&ra=fit",
            description: "Lobby Lounge Area"
          },
          {
            url: "https://images.trvl-media.com/lodging/1000000/10000/4800/4745/816d3c86.jpg?impolicy=resizecrop&rw=1200&ra=fit",
            description: "Standard Room"
          },
          {
            url: "https://images.trvl-media.com/lodging/1000000/10000/4800/4745/14acff0b.jpg?impolicy=resizecrop&rw=1200&ra=fit",
            description: "Courtyard View"
          },
          {
            url: "https://images.trvl-media.com/lodging/1000000/10000/4800/4745/e64ec609.jpg?impolicy=resizecrop&rw=1200&ra=fit",
            description: "Poolside Cabanas"
          },
          {
            url: "https://images.trvl-media.com/lodging/1000000/10000/4800/4745/9cc1770c.jpg?impolicy=resizecrop&rw=1200&ra=fit",
            description: "Resort Dining Area"
          },
          {
            url: "https://images.trvl-media.com/lodging/1000000/10000/4800/4745/a92154a5.jpg?impolicy=resizecrop&rw=1200&ra=fit",
            description: "Volcano Bay View Suite"
          },
          {
            url: "https://images.trvl-media.com/lodging/1000000/10000/4800/4745/3e74ad68.jpg?impolicy=resizecrop&rw=1200&ra=fit",
            description: "Family Suite Interior"
          },
          {
            url: "https://images.trvl-media.com/lodging/8000000/7380000/7374500/7374428/ef1e5b0d.jpg?impolicy=resizecrop&rw=1200&ra=fit",
            description: "Poolside Cabana"
          },
          {
            url: "https://images.trvl-media.com/lodging/8000000/7380000/7374500/7374428/e68a2040.jpg?impolicy=resizecrop&rw=1200&ra=fit",
            description: "Beachside Lounge"
          },
          {
            url: "https://images.trvl-media.com/lodging/8000000/7380000/7374500/7374428/60c5847d.jpg?impolicy=resizecrop&rw=1200&ra=fit",
            description: "Room with a View"
          },
          {
            url: "https://images.trvl-media.com/lodging/8000000/7380000/7374500/7374428/acf45d1e.jpg?impolicy=resizecrop&rw=1200&ra=fit",
            description: "Cabana Room"
          },
          {
            url: "https://images.trvl-media.com/lodging/8000000/7380000/7374500/7374428/46ddb472.jpg?impolicy=resizecrop&rw=1200&ra=fit",
            description: "Exterior at Dusk"
          },
          {
            url: "https://images.trvl-media.com/lodging/8000000/7380000/7374500/7374428/4e234698.jpg?impolicy=resizecrop&rw=1200&ra=fit",
            description: "Lobby Entrance"
          }
        ],
        "description": "Resort temático con acceso a Universal Studios.",
        "room_cost_per_night": 180,
        "pool": true,
        "restaurant": true,
        "wifi": { "available": true, "quality": "medium" },
        "gym": true,
        "spa": false,
        "parking": { "available": true, "cost_per_day": 20 },
        "check_in_time": "3:00 PM",
        "check_out_time": "11:00 AM",
        "breakfast_included": false,
        "distance_to_beach": "N/A",
        "distance_to_airport": "10 miles",
        "pet_friendly": { "allowed": false },
        "room_types": [
          {
            "type": "Standard",
            "cost_per_night": 180,
            "bed_type": "Queen",
            "view": "city",
            "images": [
              "https://via.placeholder.com/150",
              "https://via.placeholder.com/150"
            ]
          }
        ],
        "languages_spoken": ["English", "Spanish"],
        "cancellation_policy": "Free cancellation up to 24 hours before check-in",
        "rating": 4.4,
        "extras": [
          { "id": 1, "name": "Transporte a parques", "price": 10 }
        ]
      },
      {
        "id": 19,
        "name": "Four Seasons Resort Orlando",
        "address": "10100 Dream Tree Blvd, Golden Oak, FL 32836",
        "image": "https://via.placeholder.com/150",
        "galleryImages": [
          { "url": "https://via.placeholder.com/150", "description": "Vista del resort" },
          { "url": "https://via.placeholder.com/150", "description": "Habitación de lujo" }
        ],
        "description": "Resort de lujo con instalaciones de primer nivel y acceso exclusivo a los parques de Disney.",
        "room_cost_per_night": 500,
        "pool": true,
        "restaurant": true,
        "wifi": { "available": true, "quality": "high" },
        "gym": true,
        "spa": true,
        "parking": { "available": true, "cost_per_day": 35 },
        "check_in_time": "3:00 PM",
        "check_out_time": "12:00 PM",
        "breakfast_included": true,
        "distance_to_beach": "N/A",
        "distance_to_airport": "20 miles",
        "pet_friendly": { "allowed": true, "weight_limit_lbs": 25, "additional_fee": 75 },
        "room_types": [
          {
            "type": "Deluxe",
            "cost_per_night": 500,
            "bed_type": "King",
            "view": "park",
            "images": [
              "https://via.placeholder.com/150",
              "https://via.placeholder.com/150"
            ]
          }
        ],
        "languages_spoken": ["English", "Spanish", "French"],
        "cancellation_policy": "Free cancellation up to 24 hours before check-in",
        "rating": 4.9,
        "extras": [
          { "id": 1, "name": "Desayuno", "price": 25 },
          { "id": 2, "name": "Servicio de niñera", "price": 50 }
        ]
      },
      {
        "id": 20,
        "name": "The Grove Resort & Water Park",
        "address": "14501 Grove Resort Ave, Winter Garden, FL 34787",
        "image": "https://via.placeholder.com/150",
        "galleryImages": [
          { "url": "https://via.placeholder.com/150", "description": "Parque acuático" },
          { "url": "https://via.placeholder.com/150", "description": "Habitación familiar" }
        ],
        "description": "Resort familiar con parque acuático propio y numerosas actividades para todas las edades.",
        "room_cost_per_night": 250,
        "pool": true,
        "restaurant": true,
        "wifi": { "available": true, "quality": "high" },
        "gym": true,
        "spa": true,
        "parking": { "available": true, "cost_per_day": 20 },
        "check_in_time": "3:00 PM",
        "check_out_time": "11:00 AM",
        "breakfast_included": false,
        "distance_to_beach": "N/A",
        "distance_to_airport": "25 miles",
        "pet_friendly": { "allowed": false },
        "room_types": [
          {
            "type": "Suite Familiar",
            "cost_per_night": 250,
            "bed_type": "Queen",
            "view": "pool",
            "images": [
              "https://via.placeholder.com/150",
              "https://via.placeholder.com/150"
            ]
          }
        ],
        "languages_spoken": ["English", "Spanish"],
        "cancellation_policy": "Free cancellation up to 48 hours before check-in",
        "rating": 4.6,
        "extras": [
          { "id": 1, "name": "Acceso al parque acuático", "price": 15 }
        ]
      }
    ]
  },
  {
    "destination": "San Diego, California",
    "check_in_date": "2024-10-10",
    "check_out_date": "2024-10-15",
    "guests": { "adults": 2, "children": 0 },
    "hotels": [
      {
        "id": 2,
        "name": "Ocean Drive Hotel",
        "address": "123 Ocean Drive, Miami Beach, FL 33139",
        "image": "https://via.placeholder.com/150",
        "galleryImages": [
          { "url": "https://via.placeholder.com/150", "description": "Vista de la piscina" },
          { "url": "https://via.placeholder.com/150", "description": "Habitación Deluxe" }
        ],
        "description": "Hotel con vistas espectaculares y acceso directo a la playa.",
        "room_cost_per_night": 180,
        "pool": true,
        "restaurant": true,
        "wifi": { "available": true, "quality": "medium" },
        "gym": true,
        "spa": false,
        "parking": { "available": false, "cost_per_day": 0 },
        "check_in_time": "4:00 PM",
        "check_out_time": "10:00 AM",
        "breakfast_included": false,
        "distance_to_beach": "0.1 miles",
        "distance_to_airport": "15 miles",
        "pet_friendly": { "allowed": true, "weight_limit_lbs": 15, "additional_fee": 30 },
        "room_types": [
          {
            "type": "Standard",
            "cost_per_night": 180,
            "bed_type": "Queen",
            "view": "city",
            "images": [
              "https://via.placeholder.com/150",
              "https://via.placeholder.com/150"
            ]
          },
          {
            "type": "Ocean View",
            "cost_per_night": 250,
            "bed_type": "King",
            "view": "ocean",
            "images": [
              "https://via.placeholder.com/150",
              "https://via.placeholder.com/150"
            ]
          }
        ],
        "languages_spoken": ["English", "Spanish"],
        "cancellation_policy": "Free cancellation up to 48 hours before check-in",
        "rating": 2.7,
        "extras": [
          { "id": 1, "name": "Servicio a la habitación", "price": 20 },
          { "id": 2, "name": "Alquiler de bicicletas", "price": 15 }
        ]
      },
      {
        "id": 10,
        "name": "Hotel del Coronado",
        "address": "1500 Orange Ave, Coronado, CA 92118",
        "image": "https://via.placeholder.com/150",
        "galleryImages": [
          { "url": "https://via.placeholder.com/150", "description": "Vista del hotel" },
          { "url": "https://via.placeholder.com/150", "description": "Habitación Deluxe" }
        ],
        "description": "Icono histórico de la hospitalidad californiana.",
        "room_cost_per_night": 400,
        "pool": true,
        "restaurant": true,
        "wifi": { "available": true, "quality": "high" },
        "gym": true,
        "spa": true,
        "parking": { "available": true, "cost_per_day": 40 },
        "check_in_time": "3:00 PM",
        "check_out_time": "12:00 PM",
        "breakfast_included": true,
        "distance_to_beach": "0.2 miles",
        "distance_to_airport": "10 miles",
        "pet_friendly": { "allowed": true, "weight_limit_lbs": 25, "additional_fee": 50 },
        "room_types": [
          {
            "type": "Deluxe",
            "cost_per_night": 400,
            "bed_type": "King",
            "view": "ocean",
            "images": [
              "https://via.placeholder.com/150",
              "https://via.placeholder.com/150"
            ]
          }
        ],
        "languages_spoken": ["English", "Spanish", "French"],
        "cancellation_policy": "Free cancellation up to 24 hours before check-in",
        "rating": 4.7,
        "extras": [
          { "id": 1, "name": "Desayuno buffet", "price": 25 },
          { "id": 2, "name": "Servicio de spa", "price": 75 }
        ]
      },
      {
        "id": 11,
        "name": "Manchester Grand Hyatt San Diego",
        "address": "1 Market Pl, San Diego, CA 92101",
        "image": "https://via.placeholder.com/150",
        "galleryImages": [
          { "url": "https://via.placeholder.com/150", "description": "Vista del lobby" },
          { "url": "https://via.placeholder.com/150", "description": "Habitación Deluxe" }
        ],
        "description": "Hotel de lujo con vistas espectaculares de la bahía de San Diego.",
        "room_cost_per_night": 300,
        "pool": true,
        "restaurant": true,
        "wifi": { "available": true, "quality": "high" },
        "gym": true,
        "spa": true,
        "parking": { "available": true, "cost_per_day": 35 },
        "check_in_time": "3:00 PM",
        "check_out_time": "11:00 AM",
        "breakfast_included": true,
        "distance_to_beach": "0.5 miles",
        "distance_to_airport": "5 miles",
        "pet_friendly": { "allowed": true, "weight_limit_lbs": 20, "additional_fee": 50 },
        "room_types": [
          {
            "type": "Standard",
            "cost_per_night": 300,
            "bed_type": "Queen",
            "view": "city",
            "images": [
              "https://via.placeholder.com/150",
              "https://via.placeholder.com/150"
            ]
          }
        ],
        "languages_spoken": ["English", "Spanish"],
        "cancellation_policy": "Free cancellation up to 24 hours before check-in",
        "rating": 4.5,
        "extras": [
          { "id": 1, "name": "Acceso a la piscina", "price": 10 }
        ]
      },
      {
        "id": 12,
        "name": "Pendry San Diego",
        "address": "550 J St, San Diego, CA 92101",
        "image": "https://via.placeholder.com/150",
        "galleryImages": [
          { "url": "https://via.placeholder.com/150", "description": "Vista del hotel" },
          { "url": "https://via.placeholder.com/150", "description": "Habitación Deluxe" }
        ],
        "description": "Hotel boutique en el corazón de San Diego.",
        "room_cost_per_night": 450,
        "pool": true,
        "restaurant": true,
        "wifi": { "available": true, "quality": "high" },
        "gym": true,
        "spa": true,
        "parking": { "available": true, "cost_per_day": 45 },
        "check_in_time": "3:00 PM",
        "check_out_time": "12:00 PM",
        "breakfast_included": false,
        "distance_to_beach": "0.3 miles",
        "distance_to_airport": "6 miles",
        "pet_friendly": { "allowed": true, "weight_limit_lbs": 25, "additional_fee": 40 },
        "room_types": [
          {
            "type": "Deluxe",
            "cost_per_night": 450,
            "bed_type": "King",
            "view": "city",
            "images": [
              "https://via.placeholder.com/150",
              "https://via.placeholder.com/150"
            ]
          }
        ],
        "languages_spoken": ["English", "Spanish", "French"],
        "cancellation_policy": "Free cancellation up to 48 hours before check-in",
        "rating": 4.6,
        "extras": [
          { "id": 1, "name": "Servicio a la habitación", "price": 15 }
        ]
      },
      {
        "id": 21,
        "name": "La Jolla Beach & Tennis Club",
        "address": "2000 Spindrift Dr, La Jolla, CA 92037",
        "image": "https://via.placeholder.com/150",
        "galleryImages": [
          { "url": "https://via.placeholder.com/150", "description": "Vista de la playa" },
          { "url": "https://via.placeholder.com/150", "description": "Habitación con vista al mar" }
        ],
        "description": "Resort exclusivo con playa privada y acceso a club de tenis.",
        "room_cost_per_night": 320,
        "pool": true,
        "restaurant": true,
        "wifi": { "available": true, "quality": "high" },
        "gym": true,
        "spa": true,
        "parking": { "available": true, "cost_per_day": 30 },
        "check_in_time": "4:00 PM",
        "check_out_time": "11:00 AM",
        "breakfast_included": false,
        "distance_to_beach": "0 miles",
        "distance_to_airport": "12 miles",
        "pet_friendly": { "allowed": true, "weight_limit_lbs": 20, "additional_fee": 40 },
        "room_types": [
          {
            "type": "Ocean View",
            "cost_per_night": 320,
            "bed_type": "King",
            "view": "ocean",
            "images": [
              "https://via.placeholder.com/150",
              "https://via.placeholder.com/150"
            ]
          }
        ],
        "languages_spoken": ["English", "Spanish"],
        "cancellation_policy": "Free cancellation up to 48 hours before check-in",
        "rating": 4.7,
        "extras": [
          { "id": 1, "name": "Acceso al club de tenis", "price": 20 }
        ]
      }
    ]
  },
  {
    "destination": "Yellowstone, Wyoming",
    "check_in_date": "2024-11-01",
    "check_out_date": "2024-11-05",
    "guests": { "adults": 3, "children": 2 },
    "hotels": [
      {
        "id": 13,
        "name": "Old Faithful Inn",
        "address": "Yellowstone National Park, WY 82190",
        "image": "https://via.placeholder.com/150",
        "galleryImages": [
          { "url": "https://via.placeholder.com/150", "description": "Vista del hotel" },
          { "url": "https://via.placeholder.com/150", "description": "Habitación estándar" }
        ],
        "description": "Hotel histórico ubicado en el corazón de Yellowstone.",
        "room_cost_per_night": 220,
        "pool": false,
        "restaurant": true,
        "wifi": { "available": false },
        "gym": false,
        "spa": false,
        "parking": { "available": true, "cost_per_day": 15 },
        "check_in_time": "3:00 PM",
        "check_out_time": "11:00 AM",
        "breakfast_included": false,
        "distance_to_beach": "N/A",
        "distance_to_airport": "100 miles",
        "pet_friendly": { "allowed": false },
        "room_types": [
          {
            "type": "Standard",
            "cost_per_night": 220,
            "bed_type": "Queen",
            "view": "park",
            "images": [
              "https://via.placeholder.com/150",
              "https://via.placeholder.com/150"
            ]
          }
        ],
        "languages_spoken": ["English"],
        "cancellation_policy": "No refunds for cancellations",
        "rating": 4.3,
        "extras": [
          { "id": 1, "name": "Tour guiado", "price": 50 }
        ]
      },
      {
        "id": 14,
        "name": "Mammoth Hot Springs Hotel & Cabins",
        "address": "1 Grand Loop Rd, Yellowstone National Park, WY 82190",
        "image": "https://via.placeholder.com/150",
        "galleryImages": [
          { "url": "https://via.placeholder.com/150", "description": "Vista del hotel" },
          { "url": "https://via.placeholder.com/150", "description": "Habitación estándar" }
        ],
        "description": "Hotel rústico con acceso a las aguas termales de Mammoth.",
        "room_cost_per_night": 250,
        "pool": false,
        "restaurant": true,
        "wifi": { "available": true, "quality": "low" },
        "gym": false,
        "spa": false,
        "parking": { "available": true, "cost_per_day": 10 },
        "check_in_time": "4:00 PM",
        "check_out_time": "10:00 AM",
        "breakfast_included": false,
        "distance_to_beach": "N/A",
        "distance_to_airport": "120 miles",
        "pet_friendly": { "allowed": true, "weight_limit_lbs": 30, "additional_fee": 40 },
        "room_types": [
          {
            "type": "Standard",
            "cost_per_night": 250,
            "bed_type": "Queen",
            "view": "mountain",
            "images": [
              "https://via.placeholder.com/150",
              "https://via.placeholder.com/150"
            ]
          }
        ],
        "languages_spoken": ["English"],
        "cancellation_policy": "No refunds for cancellations",
        "rating": 4.2,
        "extras": [
          { "id": 1, "name": "Tour de vida salvaje", "price": 60 }
        ]
      },
      {
        "id": 15,
        "name": "Lake Yellowstone Hotel and Cabins",
        "address": "235 Yellowstone Lake Rd, Yellowstone National Park, WY 82190",
        "image": "https://via.placeholder.com/150",
        "galleryImages": [
          { "url": "https://via.placeholder.com/150", "description": "Vista del lago" },
          { "url": "https://via.placeholder.com/150", "description": "Habitación estándar" }
        ],
        "description": "Hotel histórico con vistas al lago Yellowstone.",
        "room_cost_per_night": 300,
        "pool": false,
        "restaurant": true,
        "wifi": { "available": false },
        "gym": false,
        "spa": false,
        "parking": { "available": true, "cost_per_day": 10 },
        "check_in_time": "3:00 PM",
        "check_out_time": "11:00 AM",
        "breakfast_included": false,
        "distance_to_beach": "N/A",
        "distance_to_airport": "130 miles",
        "pet_friendly": { "allowed": false },
        "room_types": [
          {
            "type": "Standard",
            "cost_per_night": 300,
            "bed_type": "King",
            "view": "lake",
            "images": [
              "https://via.placeholder.com/150",
              "https://via.placeholder.com/150"
            ]
          }
        ],
        "languages_spoken": ["English"],
        "cancellation_policy": "No refunds for cancellations",
        "rating": 4.6,
        "extras": [
          { "id": 1, "name": "Paseo en bote", "price": 70 }
        ]
      },
      {
        "id": 22,
        "name": "Grant Village Lodge",
        "address": "Yellowstone National Park, WY 82190",
        "image": "https://via.placeholder.com/150",
        "galleryImages": [
          { "url": "https://via.placeholder.com/150", "description": "Vista del lodge" },
          { "url": "https://via.placeholder.com/150", "description": "Habitación estándar" }
        ],
        "description": "Lodge rústico cerca del lago con acceso a actividades al aire libre.",
        "room_cost_per_night": 180,
        "pool": false,
        "restaurant": true,
        "wifi": { "available": false },
        "gym": false,
        "spa": false,
        "parking": { "available": true, "cost_per_day": 10 },
        "check_in_time": "4:00 PM",
        "check_out_time": "10:00 AM",
        "breakfast_included": false,
        "distance_to_beach": "N/A",
        "distance_to_airport": "110 miles",
        "pet_friendly": { "allowed": false },
        "room_types": [
          {
            "type": "Standard",
            "cost_per_night": 180,
            "bed_type": "Queen",
            "view": "forest",
            "images": [
              "https://via.placeholder.com/150",
              "https://via.placeholder.com/150"
            ]
          }
        ],
        "languages_spoken": ["English"],
        "cancellation_policy": "No refunds for cancellations",
        "rating": 4.1,
        "extras": [
          { "id": 1, "name": "Excursión en kayak", "price": 50 }
        ]
      },
      {
        "id": 23,
        "name": "Roosevelt Lodge Cabins",
        "address": "Yellowstone National Park, WY 82190",
        "image": "https://via.placeholder.com/150",
        "galleryImages": [
          { "url": "https://via.placeholder.com/150", "description": "Vista del lodge" },
          { "url": "https://via.placeholder.com/150", "description": "Cabina rústica" }
        ],
        "description": "Cabinas rústicas en un entorno natural, ideales para exploradores.",
        "room_cost_per_night": 150,
        "pool": false,
        "restaurant": true,
        "wifi": { "available": false },
        "gym": false,
        "spa": false,
        "parking": { "available": true, "cost_per_day": 10 },
        "check_in_time": "3:00 PM",
        "check_out_time": "10:00 AM",
        "breakfast_included": false,
        "distance_to_beach": "N/A",
        "distance_to_airport": "140 miles",
        "pet_friendly": { "allowed": false },
        "room_types": [
          {
            "type": "Cabina",
            "cost_per_night": 150,
            "bed_type": "Queen",
            "view": "mountain",
            "images": [
              "https://via.placeholder.com/150",
              "https://via.placeholder.com/150"
            ]
          }
        ],
        "languages_spoken": ["English"],
        "cancellation_policy": "No refunds for cancellations",
        "rating": 4.0,
        "extras": [
          { "id": 1, "name": "Cabalgata", "price": 45 }
        ]
      }
    ]
  },
  {
    "destination": "Washington, D.C.",
    "check_in_date": "2024-12-01",
    "check_out_date": "2024-12-05",
    "guests": { "adults": 1, "children": 1 },
    "hotels": [
      {
        "id": 16,
        "name": "The Hay-Adams",
        "address": "800 16th St NW, Washington, DC 20006",
        "image": "https://via.placeholder.com/150",
        "galleryImages": [
          { "url": "https://via.placeholder.com/150", "description": "Vista del hotel" },
          { "url": "https://via.placeholder.com/150", "description": "Habitación Deluxe" }
        ],
        "description": "Hotel de lujo frente a la Casa Blanca.",
        "room_cost_per_night": 500,
        "pool": false,
        "restaurant": true,
        "wifi": { "available": true, "quality": "high" },
        "gym": true,
        "spa": true,
        "parking": { "available": true, "cost_per_day": 40 },
        "check_in_time": "3:00 PM",
        "check_out_time": "12:00 PM",
        "breakfast_included": true,
        "distance_to_beach": "N/A",
        "distance_to_airport": "6 miles",
        "pet_friendly": { "allowed": true, "weight_limit_lbs": 25, "additional_fee": 75 },
        "room_types": [
          {
            "type": "Deluxe",
            "cost_per_night": 500,
            "bed_type": "King",
            "view": "city",
            "images": [
              "https://via.placeholder.com/150",
              "https://via.placeholder.com/150"
            ]
          }
        ],
        "languages_spoken": ["English", "Spanish", "French"],
        "cancellation_policy": "Free cancellation up to 24 hours before check-in",
        "rating": 4.9,
        "extras": [
          { "id": 1, "name": "Desayuno", "price": 30 }
        ]
      },
      {
        "id": 17,
        "name": "The Watergate Hotel",
        "address": "2650 Virginia Ave NW, Washington, DC 20037",
        "image": "https://via.placeholder.com/150",
        "galleryImages": [
          { "url": "https://via.placeholder.com/150", "description": "Vista del hotel" },
          { "url": "https://via.placeholder.com/150", "description": "Habitación Deluxe" }
        ],
        "description": "Hotel de lujo con historia política y vistas al río Potomac.",
        "room_cost_per_night": 450,
        "pool": true,
        "restaurant": true,
        "wifi": { "available": true, "quality": "high" },
        "gym": true,
        "spa": true,
        "parking": { "available": true, "cost_per_day": 35 },
        "check_in_time": "3:00 PM",
        "check_out_time": "11:00 AM",
        "breakfast_included": true,
        "distance_to_beach": "N/A",
        "distance_to_airport": "5 miles",
        "pet_friendly": { "allowed": true, "weight_limit_lbs": 20, "additional_fee": 50 },
        "room_types": [
          {
            "type": "Deluxe",
            "cost_per_night": 450,
            "bed_type": "King",
            "view": "river",
            "images": [
              "https://via.placeholder.com/150",
              "https://via.placeholder.com/150"
            ]
          }
        ],
        "languages_spoken": ["English", "Spanish"],
        "cancellation_policy": "Free cancellation up to 48 hours before check-in",
        "rating": 4.8,
        "extras": [
          { "id": 1, "name": "Desayuno", "price": 25 }
        ]
      },
      {
        "id": 18,
        "name": "The Willard InterContinental",
        "address": "1401 Pennsylvania Ave NW, Washington, DC 20004",
        "image": "https://via.placeholder.com/150",
        "galleryImages": [
          { "url": "https://via.placeholder.com/150", "description": "Vista del hotel" },
          { "url": "https://via.placeholder.com/150", "description": "Habitación Deluxe" }
        ],
        "description": "Hotel histórico con más de 200 años de historia.",
        "room_cost_per_night": 400,
        "pool": false,
        "restaurant": true,
        "wifi": { "available": true, "quality": "high" },
        "gym": true,
        "spa": false,
        "parking": { "available": true, "cost_per_day": 35 },
        "check_in_time": "3:00 PM",
        "check_out_time": "12:00 PM",
        "breakfast_included": true,
        "distance_to_beach": "N/A",
        "distance_to_airport": "5 miles",
        "pet_friendly": { "allowed": false },
        "room_types": [
          {
            "type": "Deluxe",
            "cost_per_night": 400,
            "bed_type": "King",
            "view": "city",
            "images": [
              "https://via.placeholder.com/150",
              "https://via.placeholder.com/150"
            ]
          }
        ],
        "languages_spoken": ["English", "Spanish", "French"],
        "cancellation_policy": "Free cancellation up to 24 hours before check-in",
        "rating": 4.7,
        "extras": [
          { "id": 1, "name": "Servicio a la habitación", "price": 20 }
        ]
      },
      {
        "id": 24,
        "name": "The Ritz-Carlton, Washington, D.C.",
        "address": "1150 22nd St NW, Washington, DC 20037",
        "image": "https://via.placeholder.com/150",
        "galleryImages": [
          { "url": "https://via.placeholder.com/150", "description": "Vista del hotel" },
          { "url": "https://via.placeholder.com/150", "description": "Habitación Deluxe" }
        ],
        "description": "Hotel de lujo en el corazón de Washington, D.C., cerca de Georgetown.",
        "room_cost_per_night": 480,
        "pool": true,
        "restaurant": true,
        "wifi": { "available": true, "quality": "high" },
        "gym": true,
        "spa": true,
        "parking": { "available": true, "cost_per_day": 50 },
        "check_in_time": "3:00 PM",
        "check_out_time": "12:00 PM",
        "breakfast_included": true,
        "distance_to_beach": "N/A",
        "distance_to_airport": "5 miles",
        "pet_friendly": { "allowed": true, "weight_limit_lbs": 25, "additional_fee": 75 },
        "room_types": [
          {
            "type": "Deluxe",
            "cost_per_night": 480,
            "bed_type": "King",
            "view": "city",
            "images": [
              "https://via.placeholder.com/150",
              "https://via.placeholder.com/150"
            ]
          }
        ],
        "languages_spoken": ["English", "Spanish", "French"],
        "cancellation_policy": "Free cancellation up to 24 hours before check-in",
        "rating": 4.8,
        "extras": [
          { "id": 1, "name": "Desayuno buffet", "price": 30 }
        ]
      },
      {
        "id": 25,
        "name": "The Jefferson, Washington, D.C.",
        "address": "1200 16th St NW, Washington, DC 20036",
        "image": "https://via.placeholder.com/150",
        "galleryImages": [
          { "url": "https://via.placeholder.com/150", "description": "Vista del hotel" },
          { "url": "https://via.placeholder.com/150", "description": "Habitación Deluxe" }
        ],
        "description": "Hotel boutique de lujo con un ambiente histórico y elegante.",
        "room_cost_per_night": 450,
        "pool": false,
        "restaurant": true,
        "wifi": { "available": true, "quality": "high" },
        "gym": true,
        "spa": true,
        "parking": { "available": true, "cost_per_day": 45 },
        "check_in_time": "3:00 PM",
        "check_out_time": "12:00 PM",
        "breakfast_included": true,
        "distance_to_beach": "N/A",
        "distance_to_airport": "6 miles",
        "pet_friendly": { "allowed": true, "weight_limit_lbs": 20, "additional_fee": 50 },
        "room_types": [
          {
            "type": "Deluxe",
            "cost_per_night": 450,
            "bed_type": "King",
            "view": "city",
            "images": [
              "https://via.placeholder.com/150",
              "https://via.placeholder.com/150"
            ]
          }
        ],
        "languages_spoken": ["English", "Spanish"],
        "cancellation_policy": "Free cancellation up to 24 hours before check-in",
        "rating": 4.9,
        "extras": [
          { "id": 1, "name": "Servicio de spa", "price": 100 }
        ]
      }
    ]
  }
];

export default tripsData;
