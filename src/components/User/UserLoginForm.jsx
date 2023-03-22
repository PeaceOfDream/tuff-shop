import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../features/user/userSlice';

import styles from '../../styles/User.module.css';

export const UserLoginForm = ({ toggleCurrentFormType, closeForm }) => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  const dispatch = useDispatch();
  const handleChange = ({ target: { value, name } }) => {
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isNotEmpty = Object.values(values).every((val) => val);

    if (!isNotEmpty) return;
    dispatch(loginUser(values));
    closeForm();
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.close} onClick={closeForm}>
        <svg className="icon">
          <use
            xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#close`}
          />
        </svg>
      </div>
      <div className={styles.title}>Log in</div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.group}>
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={values.email}
            autoComplete="off"
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Your password"
            value={values.password}
            autoComplete="off"
            onChange={handleChange}
            required
          />
        </div>

        <div
          className={styles.link}
          onClick={() => toggleCurrentFormType('signup')}
        >
          Create an account
        </div>
        <button className={styles.submit} type="submit">
          login
        </button>
      </form>
    </div>
  );
};
