import React, { useState } from 'react';

const ProfileInfo = () => {
  // Estado inicial con todos los campos necesarios
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [bio, setBio] = useState('');
  const [dob, setDob] = useState({ month: '', day: '', year: '' });
  const [gender, setGender] = useState('Unspecified (X)');
  const [accessibility, setAccessibility] = useState('Not provided');

  const handleSave = () => {
    // Lógica para guardar la información actualizada del perfil
    console.log('Profile updated:', { firstName, middleName, lastName, bio, dob, gender, accessibility });
  };

  return (
    <div className="profile-info">
      <h3>Profile Information</h3>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="form-group">
          <label htmlFor="firstName">First name *</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="middleName">Middle name</label>
          <input
            type="text"
            id="middleName"
            value={middleName}
            onChange={(e) => setMiddleName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last name *</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="bio">Bio</label>
          <textarea
            id="bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Date of birth</label>
          <div className="dob-fields">
            <select
              value={dob.month}
              onChange={(e) => setDob({ ...dob, month: e.target.value })}
              required
            >
              <option value="">Month</option>
              <option value="01">January</option>
              <option value="02">February</option>
              <option value="03">March</option>
              {/* Agrega las demás opciones de mes aquí */}
            </select>
            <input
              type="number"
              placeholder="DD"
              value={dob.day}
              onChange={(e) => setDob({ ...dob, day: e.target.value })}
              min="1"
              max="31"
              required
            />
            <input
              type="number"
              placeholder="YYYY"
              value={dob.year}
              onChange={(e) => setDob({ ...dob, year: e.target.value })}
              min="1900"
              max="2100"
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label>Gender</label>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="Unspecified (X)">Unspecified (X)</option>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
            <option value="Undisclosed (U)">Undisclosed (U)</option>
          </select>
        </div>
        <div className="form-group">
          <label>Accessibility needs</label>
          <select
            value={accessibility}
            onChange={(e) => setAccessibility(e.target.value)}
          >
            <option value="Not provided">Not provided</option>
            {/* Agrega otras opciones aquí si es necesario */}
          </select>
        </div>
        <button type="button" onClick={handleSave} className='btn-profile'>Save</button>
      </form>
    </div>
  );
};

export default ProfileInfo;
