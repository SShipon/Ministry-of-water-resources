
// eslint-disable-next-line no-unused-vars
import React, {  createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
    const [data, setData] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await fetch('data.json');
          const result = await res.json();
          setData(result);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);

  const authInfo = {
    data 
  };

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;