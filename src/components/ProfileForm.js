import React, { useState, useContext } from 'react';
import Alert from './Alert';
import CryptoXApi from '../services/api';
import UserContext from '../context/UserContext';
import useTimedMessage from '../hooks/useTimedMessage';

/** Profile editing form.
 *
 * Displays profile form and handles changes to local form state.
 * Submitting the form calls the API to save, and triggers user reloading
 * throughout the site.
 *
 * Confirmation of a successful save is normally a simple <Alert>, but
 * you can opt-in to our fancy limited-time-display message hook,
 * `useTimedMessage`, but switching the lines below.
 *
 * Routed as /profile
 * Routes -> ProfileForm -> Alert
 */

const ProfileForm = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const [formData, setFormData] = useState({
    firstName: currentUser.firstName,
    lastName: currentUser.lastName,
    email: currentUser.email,
    username: currentUser.username,
    password: "",
  });
  const [formErrors, setFormErrors] = useState([]);
  const [saveConfirmed, setSaveConfirmed] = useTimedMessage()


  /** Update form field */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(f => ({
      ...f,
      [name]: value,
    }));
    setFormErrors([]);
  }


  /** on form submit:
   * - attempt save to backend & report any errors
   * - if successful
   *   - clear previous error messages and password
   *   - show save-confirmed message
   *   - set current user info throughout the site
   */
  async function handleSubmit(evt) {
    evt.preventDefault();

    let profileData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password,
    };

    let username = formData.username;
    let updatedUser;

    try {
      updatedUser = await CryptoXApi.saveProfile(username, profileData);
    } catch (errors) {
      debugger;
      setFormErrors(errors);
      return;
    }

    setFormData(f => ({ ...f, password: "" }));
    setFormErrors([]);
    setSaveConfirmed(true);

    // trigger reloading of user information throughout the site
    setCurrentUser(updatedUser);
  }


  return (
    <div className="container mx-auto mt-11 max-w-screen-md items-center h-screen">
      <div>
        <div className="flex flex-col items-center bg-white p-4 border  border-gray-primary mb-4 rounded">
          <h1 className="flex justify-center w-full">
            <img src="/images/logo.png" alt="CryptoX" className="mt-2 w-6/12 mb-4" />
          </h1>
          <form>
            <div className="form-group">
              <label>Username</label>
              <p className="text-blue-500 font-bold mt-2 mb-3">{formData.username}</p>
            </div>
            <div className="form-group">
              <label className="mb-2">First Name</label>
              <input
                  name="firstName"
                  className="text-sm text-gray base w-full mr-3 py-3 mb-3 h-2 border border-gray-primary rounded"
                  value={formData.firstName}
                  onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label className="mb-2">Last Name</label>
              <input
                  name="lastName"
                  className="text-sm text-gray base w-full mr-3 py-3 mb-3 h-2 border border-gray-primary rounded"
                  value={formData.lastName}
                  onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label className="mb-2">Email</label>
              <input
                  name="email"
                  className="text-sm text-gray base w-full mr-3 py-3 mb-3 h-2 border border-gray-primary rounded"
                  value={formData.email}
                  onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label className="mb-2">Confirm password to make changes:</label>
              <input
                  type="password"
                  name="password"
                  className="text-sm text-gray base w-full mr-3 py-3 mb-3 h-2 border border-gray-primary rounded"
                  autoComplete="on"
                  value={formData.password}
                  onChange={handleChange}
              />
            </div>

            {formErrors.length
                ? <Alert type="danger" messages={formErrors} />
                : null}

            {saveConfirmed
                ?
                <Alert type="success" messages={["Updated successfully."]} />
                : null}

            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-4"
                onClick={handleSubmit}
            >
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ProfileForm;
