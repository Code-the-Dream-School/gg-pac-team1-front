import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import '../styles/components/_profileinfo.scss';

const ProfileInfo = () => {
  const [addresses, setAddresses] = useState([]);
  const [filteredCities, setFilteredCities] = useState([]);
  const [filteredPostalCodes, setFilteredPostalCodes] = useState([]);
  const [selectedState, setSelectedState] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [hasAddress, setHasAddress] = useState(false); // Si ya tiene dirección

  // Ampliación de estados, ciudades y códigos postales
  const citiesByState = {
    California: ['Los Angeles', 'San Francisco', 'San Diego', 'San Jose', 'Sacramento', 'Fresno', 'Long Beach', 'Oakland', 'Bakersfield', 'Anaheim', 'Santa Ana', 'Riverside', 'Stockton', 'Chula Vista', 'Irvine', 'Fremont', 'Modesto', 'Oxnard', 'Fontana', 'Moreno Valley'],
    Texas: ['Houston', 'Dallas', 'Austin', 'San Antonio', 'Fort Worth', 'El Paso', 'Arlington', 'Corpus Christi', 'Plano', 'Lubbock', 'Garland', 'Irving', 'Amarillo', 'Grand Prairie', 'McKinney', 'Frisco', 'Brownsville', 'Pasadena', 'Killeen', 'McAllen'],
    NewYork: ['New York City', 'Buffalo', 'Rochester', 'Yonkers', 'Syracuse', 'Albany', 'New Rochelle', 'Mount Vernon', 'Schenectady', 'Saratoga Springs', 'Suffern', 'Ithaca', 'Binghamton', 'Saratoga Springs', 'Saranac Lake', 'Glens Falls', 'Jamestown', 'Olean', 'Syracuse', 'Utica'],
    Florida: ['Miami', 'Orlando', 'Tampa', 'Jacksonville', 'St. Petersburg', 'Hialeah', 'Tallahassee', 'Fort Lauderdale', 'Cape Coral', 'Pembroke Pines', 'Hollywood', 'Gainesville', 'Port St. Lucie', 'Lakeland', 'Palm Bay', 'Melbourne', 'Boca Raton', 'Miami Gardens', 'Ocala', 'Sarasota'],
    Illinois: ['Chicago', 'Aurora', 'Naperville', 'Joliet', 'Elgin', 'Waukegan', 'Cicero', 'Champaign', 'Bloomington', 'Arlington Heights', 'Evanston', 'Decatur', 'Schaumburg', 'Tinley Park', 'Oak Lawn', 'Berwyn', 'Skokie', 'Des Plaines', 'Orland Park', 'Downers Grove'],
    Pennsylvania: ['Philadelphia', 'Pittsburgh', 'Allentown', 'Erie', 'Reading', 'Scranton', 'Bethlehem', 'Lancaster', 'Harrisburg', 'York', 'Chester', 'Williamsport', 'Lebanon', 'Doylestown', 'State College', 'Pottstown', 'Mechanicsburg', 'Montgomeryville', 'Haverford', 'Media'],
    Ohio: ['Columbus', 'Cleveland', 'Cincinnati', 'Toledo', 'Akron', 'Dayton', 'Parma', 'Canton', 'Youngstown', 'Lorain', 'Hamilton', 'Mansfield', 'Wooster', 'Findlay', 'Lima', 'Sandusky', 'Ashtabula', 'Marietta', 'Newark', 'Zanesville'],
    Michigan: ['Detroit', 'Grand Rapids', 'Warren', 'Sterling Heights', 'Lansing', 'Ann Arbor', 'Flint', 'Dearborn', 'Livonia', 'Westland', 'Troy', 'Saginaw', 'Kalamazoo', 'Battle Creek', 'Jackson', 'Midland', 'Bay City', 'Wyoming', 'Sault Ste. Marie', 'Monroe'],
    Georgia: ['Atlanta', 'Augusta', 'Columbus', 'Macon', 'Savannah', 'Athens', 'Sandy Springs', 'Roswell', 'Johns Creek', 'Warner Robins', 'Albany', 'Valdosta', 'Smyrna', 'Duluth', 'Gainesville', 'Kennesaw', 'Mableton', 'Peachtree City', 'Marietta', 'Brookhaven'],
    NorthCarolina: ['Charlotte', 'Raleigh', 'Greensboro', 'Durham', 'Winston-Salem', 'Fayetteville', 'Cary', 'Gastonia', 'Burlington', 'Jacksonville', 'High Point', 'Mooresville', 'Huntersville', 'Indian Trail', 'Concord', 'Apex', 'Goldboro', 'Hickory', 'Statesville', 'Kannapolis'],
    NewJersey: ['Newark', 'Jersey City', 'Paterson', 'Elizabeth', 'Edison', 'Woodbridge', 'Toms River', 'Hamilton', 'Trenton', 'Clifton', 'Camden', 'Passaic', 'Perth Amboy', 'Union City', 'East Orange', 'Bayonne', 'Hackensack', 'West New York', 'North Bergen', 'Somerville'],
    Virginia: ['Virginia Beach', 'Norfolk', 'Chesapeake', 'Richmond', 'Newport News', 'Alexandria', 'Hampton', 'Falls Church', 'Charlottesville', 'Lynchburg', 'Radford', 'Danville', 'Manassas', 'Roanoke', 'Fredericksburg', 'Winchester', 'Leesburg', 'Hopewell', 'Portsmouth', 'Salem'],
    Washington: ['Seattle', 'Spokane', 'Tacoma', 'Vancouver', 'Bellevue', 'Kent', 'Everett', 'Renton', 'Federal Way', 'Bremerton', 'Olympia', 'Puyallup', 'Issaquah', 'Lakewood', 'Kennewick', 'Yakima', 'Pasco', 'Mount Vernon', 'Silverdale', 'Bothell', 'Richland'],
    Arizona: ['Phoenix', 'Tucson', 'Mesa', 'Chandler', 'Scottsdale', 'Glendale', 'Tempe', 'Peoria', 'Goodyear', 'Surprise', 'Casa Grande', 'Avondale', 'Yuma', 'Flagstaff', 'Prescott', 'Sierra Vista', 'San Luis', 'El Mirage', 'Maricopa', 'Queen Creek'],
    Massachusetts: ['Boston', 'Worcester', 'Springfield', 'Cambridge', 'Lowell', 'Brockton', 'Quincy', 'Lynn', 'Fall River', 'New Bedford', 'Somerville', 'Lawrence', 'Haverhill', 'Malden', 'Medford', 'Plymouth', 'Weymouth', 'Revere', 'Framingham', 'Methuen'],
    Colorado: ['Denver', 'Colorado Springs', 'Aurora', 'Fort Collins', 'Lakewood', 'Thornton', 'Arvada', 'Westminster', 'Pueblo', 'Centennial', 'Boulder', 'Greeley', 'Longmont', 'Grand Junction', 'Commerce City', 'Castle Rock', 'Englewood', 'Littleton', 'Loveland', 'Broomfield'],
    Tennessee: ['Memphis', 'Nashville', 'Knoxville', 'Chattanooga', 'Clarksville', 'Murfreesboro', 'Jackson', 'Johnson City', 'Bartlett', 'Collierville', 'Kingsport', 'Franklin', 'Brentwood', 'Hendersonville', 'Cleveland', 'Maryville', 'Gallatin', 'Smyrna', 'Mount Juliet', 'Lebanon', 'Sevierville'],
    Indiana: ['Indianapolis', 'Fort Wayne', 'Evansville', 'South Bend', 'Carmel', 'Fishers', 'Muncie', 'Bloomington', 'Westfield', 'Noblesville', 'Anderson', 'Terre Haute', 'Greenwood', 'Lawrence', 'Jeffersonville', 'Columbus', 'Lafayette', 'Kokomo', 'Portage', 'Mishawaka'],
    Maryland: ['Baltimore', 'Columbia', 'Germantown', 'Silver Spring', 'Waldorf', 'Ellicott City', 'Frederick', 'Rockville', 'Hagerstown', 'Gaithersburg', 'Bowie', 'Annapolis', 'Upper Marlboro', 'Laurel', 'Hyattsville', 'Bel Air', 'Salisbury', 'Cumberland', 'Aberdeen', 'Westminster'],
    Missouri: ['Kansas City', 'St. Louis', 'Springfield', 'Columbia', 'Independence', 'Lee\'s Summit', 'O\'Fallon', 'St. Joseph', 'Jefferson City', 'St. Charles', 'Blue Springs', 'Cape Girardeau', 'Ballwin', 'Gladstone', 'Raytown', 'Kirkwood', 'Webster Groves', 'Bridgeton', 'West Plains', 'Parkville'],
    Wisconsin: ['Milwaukee', 'Madison', 'Green Bay', 'Kenosha', 'Racine', 'Appleton', 'Oshkosh', 'Waukesha', 'Sheboygan', 'Fond du Lac', 'Eau Claire', 'Menomonee Falls', 'Brookfield', 'New Berlin', 'West Allis', 'Marshfield', 'La Crosse', 'Hudson', 'Janesville', 'Beloit'],
  };

  const postalCodesByState = {
    California: ['90001', '94101', '92101', '92701', '94501', '95301', '93401', '94901', '96101', '95601', '90801', '93301', '92001', '94536', '93001', '95648', '93455', '90701', '91501', '93501'],
    Texas: ['77001', '75201', '73301', '78701', '76101', '79901', '78201', '75001', '78501', '75001', '76001', '77301', '77401', '78001', '78401', '78101', '75001', '75401', '78601', '75201'],
    NewYork: ['10001', '14201', '14601', '12345', '13301', '13801', '13701', '12201', '10010', '11201', '10011', '10012', '10451', '10301', '11701', '11743', '12202', '10501', '10514', '11754'],
    Florida: ['33101', '32801', '33601', '33102', '33109', '33125', '33130', '33135', '33145', '33147', '33156', '33166', '33301', '33308', '33901', '33401', '33407', '33409', '33701', '33704'],
    Illinois: ['60601', '62701', '61801', '60602', '60603', '60604', '60605', '60606', '60607', '60608', '60609', '60610', '60611', '60612', '60613', '60614', '60615', '60616', '60617', '60618'],
    Pennsylvania: ['19101', '19102', '19103', '19104', '19105', '19106', '19107', '19108', '19109', '19110', '19111', '19112', '19113', '19114', '19115', '19116', '19117', '19118', '19119', '19120'],
    Ohio: ['44101', '44102', '44103', '44104', '44105', '44106', '44107', '44108', '44109', '44110', '44111', '44112', '44113', '44114', '44115', '44116', '44117', '44118', '44119', '44120'],
    Michigan: ['48201', '48202', '48203', '48204', '48205', '48206', '48207', '48208', '48209', '48210', '48211', '48212', '48213', '48214', '48215', '48216', '48217', '48218', '48219', '48220'],
    Georgia: ['30301', '30302', '30303', '30304', '30305', '30306', '30307', '30308', '30309', '30310', '30311', '30312', '30313', '30314', '30315', '30316', '30317', '30318', '30319', '30320'],
    NorthCarolina: ['27501', '27502', '27503', '27504', '27505', '27506', '27507', '27508', '27509', '27510', '27511', '27512', '27513', '27514', '27515', '27516', '27517', '27518', '27519', '27520'],
    NewJersey: ['07001', '07002', '07003', '07004', '07005', '07006', '07007', '07008', '07009', '07010', '07011', '07012', '07013', '07014', '07015', '07016', '07017', '07018', '07019', '07020'],
    Virginia: ['23218', '23220', '23221', '23222', '23223', '23224', '23225', '23226', '23227', '23228', '23229', '23230', '23231', '23232', '23233', '23234', '23235', '23236', '23237', '23238'],
    Washington: ['98001', '98002', '98003', '98004', '98005', '98006', '98007', '98008', '98009', '98010', '98011', '98014', '98015', '98016', '98017', '98018', '98019', '98020', '98021', '98022'],
    Arizona: ['85001', '85002', '85003', '85004', '85005', '85006', '85007', '85008', '85009', '85010', '85011', '85012', '85013', '85014', '85015', '85016', '85017', '85018', '85019', '85020'],
    Massachusetts: ['02101', '02102', '02103', '02104', '02105', '02106', '02107', '02108', '02109', '02110', '02111', '02112', '02113', '02114', '02115', '02116', '02117', '02118', '02119', '02120'],
    Colorado: ['80201', '80202', '80203', '80204', '80205', '80206', '80207', '80208', '80209', '80210', '80211', '80212', '80214', '80215', '80216', '80218', '80220', '80221', '80222', '80223'],
    Tennessee: ['37201', '37202', '37203', '37204', '37205', '37206', '37207', '37208', '37209', '37210', '37211', '37212', '37213', '37214', '37215', '37216', '37217', '37218', '37219', '37220'],
    Indiana: ['46201', '46202', '46203', '46204', '46205', '46206', '46207', '46208', '46209', '46210', '46211', '46212', '46213', '46214', '46215', '46216', '46217', '46218', '46219', '46220'],
    Maryland: ['21201', '21202', '21203', '21204', '21205', '21206', '21207', '21208', '21209', '21210', '21211', '21212', '21213', '21214', '21215', '21216', '21217', '21218', '21219', '21220'],
    Missouri: ['63101', '63102', '63103', '63104', '63105', '63106', '63107', '63108', '63109', '63110', '63111', '63112', '63113', '63114', '63115', '63116', '63117', '63118', '63119', '63120'],
    Wisconsin: ['53201', '53202', '53203', '53204', '53205', '53206', '53207', '53208', '53209', '53210', '53211', '53212', '53213', '53214', '53215', '53216', '53217', '53218', '53219', '53220'],
  };

  const { register, handleSubmit, setValue, formState: { errors }, reset } = useForm();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/v1/auth/user', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        const { name, phone, address, addresses } = response.data;
        setValue('name', name || '');
        setValue('phone', phone || '');
        setValue('address', address || '');
        setAddresses(addresses || []);
        setHasAddress(!!address); // Si ya tiene una dirección, lo indicamos
        setShowAddressForm(false);
      } catch (err) {
        setError('Failed to load user data');
      }
    };

    fetchUserData();
  }, [setValue]);

  const handleAddressSubmit = async (data) => {
    const { name, phone, street, city, state, postalCode } = data;

    // Si no se agrega una dirección, solo enviamos el nombre y el teléfono
    const formattedAddress = street && city && state && postalCode ? `${street}, ${city}, ${state}, ${postalCode}` : '';

    try {
      await axios.patch('http://localhost:8000/api/v1/auth/user', {
        name,
        phone,
        address: formattedAddress || '', // Guardamos una dirección vacía si no se proporciona
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      if (formattedAddress) {
        setAddresses((prev) => [...prev, formattedAddress]);
      }
      setValue('name', name);
      setValue('phone', phone);
      setValue('address', formattedAddress);
      setSuccess('Profile updated successfully');
      reset(); // Resetear el formulario
      setHasAddress(!!formattedAddress); // Indicamos si tiene dirección registrada
      setShowAddressForm(false);
      setTimeout(() => setSuccess(''), 2000);
    } catch (err) {
      if (err.response) {
        setError(err.response.data.message || 'An error occurred during the update');
      } else {
        setError('An unexpected error occurred');
      }
    }
  };

  const handleStateChange = (e) => {
    const selected = e.target.value;
    setSelectedState(selected);
    setFilteredCities(citiesByState[selected] || []);
    setFilteredPostalCodes(postalCodesByState[selected] || []);
  };

  return (
    <div className="profile-info">
      <form onSubmit={handleSubmit(handleAddressSubmit)}>
        <h2>Profile Information</h2>

        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            placeholder="Name"
            {...register('name', {
              required: 'Name is required',
            })}
          />
          {errors.name && <p className="error">{errors.name.message}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input
            id="phone"
            type="text"
            placeholder="Phone"
            {...register('phone', {
              required: 'Phone number is required',
              pattern: {
                value: /^[0-9]{10,15}$/,
                message: 'Invalid phone number. Must be 10 to 15 digits',
              },
            })}
          />
          {errors.phone && <p className="error">{errors.phone.message}</p>}
        </div>

        {/* Mostrar el campo de dirección solo si ya tiene una */}
        {hasAddress && (
          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <input
              id="address"
              type="text"
              placeholder="Registered Address"
              {...register('address')}
              disabled
            />
          </div>
        )}

        {/* Botón o ícono para agregar dirección si no tiene */}
        {!showAddressForm && (
          <div className="btn-show-address-form" onClick={() => setShowAddressForm(true)}>
            <i className="icon-plus">+</i> <small>Add Address</small>
          </div>
        )}

        {/* Formulario de dirección solo visible al hacer clic en "Add Address" */}
        {showAddressForm && (
          <>
            <div className="form-group">
              <label htmlFor="state">State:</label>
              <select
                id="state"
                {...register('state')}
                onChange={handleStateChange}
              >
                <option value="">Select a state</option>
                {Object.keys(citiesByState).map((state, index) => (
                  <option key={index} value={state}>{state}</option>
                ))}
              </select>
            </div>

            {selectedState && (
              <>
                <div className="form-group">
                  <label htmlFor="city">City:</label>
                  <select
                    id="city"
                    {...register('city')}
                  >
                    <option value="">Select a city</option>
                    {filteredCities.map((city, index) => (
                      <option key={index} value={city}>{city}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="postalCode">Postal Code:</label>
                  <select
                    id="postalCode"
                    {...register('postalCode')}
                  >
                    <option value="">Select a postal code</option>
                    {filteredPostalCodes.map((code, index) => (
                      <option key={index} value={code}>{code}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="street">Street Address:</label>
                  <input
                    id="street"
                    type="text"
                    placeholder="Street Address"
                    {...register('street')}
                  />
                </div>
              </>
            )}
          </>
        )}

        <button type="submit" className="btn-submit">Save Profile</button>

        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
      </form>

      {addresses.length > 0 && (
        <div className="saved-addresses">
          <h3>Saved Addresses</h3>
          <ul>
            {addresses.map((address, index) => (
              <li key={index}>{address}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProfileInfo;
