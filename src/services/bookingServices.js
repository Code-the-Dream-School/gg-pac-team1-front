// bookingServices.js

// Simulates hotel search by city and state using the API
// bookingServices.js

// bookingServices.js

// Simulates hotel search by city and state using the API
export async function searchHotels(city, state) {
    const token = localStorage.getItem('token');
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/hotels`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      const hotels = data.hotels || []; // Ensure hotels is an array
  
      if (!Array.isArray(hotels)) {
        throw new Error('Expected hotels to be an array');
      }
  
      // Ensure city and state are defined
      const destination = `${city || ''}, ${state || ''}`.toLowerCase();
  
      const filteredHotels = hotels.filter(hotel => {
        // Ensure hotel.destination is defined and not null
        if (!hotel.destination) return false;
        
        // Split destination into city and state
        const [hotelCity = '', hotelState = ''] = hotel.destination.split(', ').map(part => part.toLowerCase());
  
        // Return true if either city or state matches the destination
        return hotelCity.includes(destination) || hotelState.includes(destination);
      });
  
      return filteredHotels;
    } catch (error) {
      console.error('Error fetching hotels:', error.message);
      return []; // Return an empty array in case of error
    }
  }
  
  // New function to search hotels by city or state using the API
  export async function searchHotelsByCityOrState(city, state) {
    const token = localStorage.getItem('token');
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/hotels`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      const hotels = data.hotels || []; // Ensure hotels is an array
  
      if (!Array.isArray(hotels)) {
        throw new Error('Expected hotels to be an array');
      }
  
      // Ensure city and state are defined
      const cityLower = (city || '').toLowerCase();
      const stateLower = (state || '').toLowerCase();
  
      const filteredHotels = hotels.filter(hotel => {
        // Ensure hotel.destination is defined and not null
        if (!hotel.destination) return false;
  
        // Split destination into city and state
        const [hotelCity = '', hotelState = ''] = hotel.destination.split(', ').map(part => part.toLowerCase());
  
        // Return true if city or state matches the search criteria
        return hotelCity.includes(cityLower) || hotelState.includes(stateLower);
      });
  
      return filteredHotels;
    } catch (error) {
      console.error('Error fetching hotels:', error.message);
      return []; // Return an empty array in case of error
    }
  }
  
  // Other functions...
  
  
  // Other functions...
  
  
  
  // Simulates hotel filtering by price, rating, and room type 
  export async function filterHotels(hotels, filters) {
    return new Promise((resolve) => {
      setTimeout(() => {
        let filteredHotels = [...hotels];
  
        // Always ensure priceMin and priceMax have default values if empty
        const priceMin = filters.priceMin !== '' ? parseInt(filters.priceMin, 10) : 0;
        const priceMax = filters.priceMax !== '' ? parseInt(filters.priceMax, 10) : Infinity;
  
        // Apply price filters
        filteredHotels = filteredHotels.filter(hotel => hotel.room_cost_per_night >= priceMin && hotel.room_cost_per_night <= priceMax);
  
        // Apply rating filter (use 'rating' instead of 'reviews')
        if (filters.reviews > 0) {
          filteredHotels = filteredHotels.filter(hotel => hotel.rating >= filters.reviews); // Use 'rating'
        }
  
        // Apply room type filter (now checks the room_types array)
        if (filters.roomType) {
          filteredHotels = filteredHotels.filter(hotel => 
            hotel.room_types.some(room => room.type === filters.roomType)
          );
        }
  
        resolve(filteredHotels);
      }, 500); // Simulating 500ms delay
    });
  }
  
  // Simulates sorting hotels by various criteria
  export async function sortHotels(hotels, sortOption) {
    return new Promise((resolve) => {
      setTimeout(() => {
        let sortedHotels = [...hotels];
  
        if (sortOption === 'price-asc') {
          // Sort by price (low to high)
          sortedHotels.sort((a, b) => a.room_cost_per_night - b.room_cost_per_night);
        } else if (sortOption === 'price-desc') {
          // Sort by price (high to low)
          sortedHotels.sort((a, b) => b.room_cost_per_night - a.room_cost_per_night);
        } else if (sortOption === 'reviews-desc') {
          // Sort by rating (best to worst)
          sortedHotels.sort((a, b) => b.rating - a.rating);
        } else if (sortOption === 'reviews-asc') {
          // Sort by rating (worst to best)
          sortedHotels.sort((a, b) => a.rating - b.rating);
        }
  
        resolve(sortedHotels);
      }, 500); // Simulating 500ms delay
    });
  }
  
  // ============================
  // Página Detail
  // ============================
  
  // Function to get hotel by ID
  export async function getHotelById(id) {
    const token = localStorage.getItem('token');
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/hotels/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const hotel = await response.json();
      return hotel;
    } catch (error) {
      console.error('Error fetching hotel:', error.message);
      return null; // Return null in case of error
    }
  }
  
  // Functions related to localStorage for Hotel Detail page
  export function saveHotelIdToLocalStorage(hotelId) {
    const savedHotelId = localStorage.getItem('hotelId');
    if (savedHotelId !== String(hotelId)) {
      localStorage.setItem('hotelId', hotelId);
    }
  }
  
  // Load hotel-related data from localStorage
  export function loadHotelDataFromLocalStorage(setHasChildren, setChildren, setCheckInDate, setCheckOutDate) {
    const savedHasChildren = localStorage.getItem('hasChildren');
    const savedChildren = localStorage.getItem('children');
    const savedCheckInDate = localStorage.getItem('checkInDate');
    const savedCheckOutDate = localStorage.getItem('checkOutDate');
  
    if (savedHasChildren) setHasChildren(JSON.parse(savedHasChildren));
    if (savedChildren) setChildren(Number(savedChildren));
    if (savedCheckInDate) setCheckInDate(savedCheckInDate);
    if (savedCheckOutDate) setCheckOutDate(savedCheckOutDate);
  }
  
  // Save children selection to localStorage
  export function saveHasChildrenToLocalStorage(hasChildren) {
    localStorage.setItem('hasChildren', JSON.stringify(hasChildren));
  }
  
  // Save number of children to localStorage
  export function saveChildrenToLocalStorage(children) {
    localStorage.setItem('children', children);
  }
  
  // ============================
  // Reservation Review - Load Hotel Data and Calculate Costs
  // ============================
  
  // Load hotel data based on hotelId
  export const loadHotelData = async (hotelId) => {
    const token = localStorage.getItem('token');
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/hotels/${hotelId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const currentHotel = await response.json();
      if (!currentHotel) {
        throw new Error("Hotel not found");
      }
      return {
        name: currentHotel.name,
        address: currentHotel.address || "Address not available",
        category: currentHotel.category || "Category not available",
        description: currentHotel.description || "Description not available",
        room_cost_per_night: currentHotel.room_cost_per_night,
        check_in_time: currentHotel.check_in_time,
        check_out_time: currentHotel.check_out_time,
        extras: currentHotel.extras || []
      };
    } catch (error) {
      throw new Error(error.message);
    }
  };
  
  // Calculate total costs based on check-in, check-out, hotel and extras
  export const calculateCosts = (checkInDate, checkOutDate, hotel, extras) => {
    if (!checkInDate || !checkOutDate) {
      throw new Error("Invalid check-in or check-out date");
    }
    const date1 = new Date(checkInDate);
    const date2 = new Date(checkOutDate);
    if (date1 >= date2) {
      throw new Error("Check-out date must be later than check-in date");
    }
  
    const differenceInTime = date2.getTime() - date1.getTime();
    const differenceInDays = differenceInTime / (1000 * 3600 * 24);
  
    const roomCost = differenceInDays * (hotel.room_cost_per_night || 0);
    let extrasCost = 0;
    extras.forEach((extra) => {
      extrasCost += extra.price * differenceInDays;
    });
  
    return {
      totalNights: differenceInDays,
      totalRoomCost: roomCost,
      totalExtrasCost: extrasCost,
      finalTotalCost: roomCost + extrasCost
    };
  };
  
  // ============================
  // LocalStorage Functions - Save and Load Data
  // ============================
  
  // Save data to localStorage
  export const saveToLocalStorage = (key, value) => {
    localStorage.setItem(key, value);
  };
  
  // Load data from localStorage with a default value
  export const loadFromLocalStorage = (key, defaultValue = "") => {
    return localStorage.getItem(key) || defaultValue;
  };
  