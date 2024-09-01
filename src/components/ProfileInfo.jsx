import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const ProfileInfo = () => {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();

  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem('user'));
    if (user) {
      // Set form values using setValue from react-hook-form
      setValue('name', user.name || '');
      setValue('email', user.email || '');
      setValue('phone', user.phone || '');
      setValue('address', user.address || '');
    }
  }, [setValue]);

  const onSubmit = (data) => {
    console.log('Profile updated:', data);
    // Add logic here to update profile information
  };

  return (
    <div className="profile-info">
      <h3>Profile Information</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          {...register('name', { required: 'Name is required' })}
        />
        {errors.name && <span className="error">{errors.name.message}</span>}

        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          {...register('email', { required: 'Email is required' })}
        />
        {errors.email && <span className="error">{errors.email.message}</span>}

        <label htmlFor="phone">Phone</label>
        <input
          id="phone"
          type="tel"
          {...register('phone', {
            pattern: {
              value: /^[0-9]{10}$/,
              message: 'Phone number must be 10 digits'
            }
          })}
        />
        {errors.phone && <span className="error">{errors.phone.message}</span>}

        <label htmlFor="address">Address</label>
        <input
          id="address"
          type="text"
          {...register('address', {
            minLength: {
              value: 5,
              message: 'Address must be at least 5 characters long'
            }
          })}
        />
        {errors.address && <span className="error">{errors.address.message}</span>}

        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default ProfileInfo;
