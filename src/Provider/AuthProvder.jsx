// import React, { createContext, useState } from 'react';

// export const AuthContext = createContext();

// const AuthProvider = ({childeren}) => {

//     const [user, setUser]=useState({
//         name: "hablu mia",
//         email: "hablumia@gmail.com"
//     });

//     const authData = {
//        user,
//        setUser,
//     }

//     return <AuthContext value={authData}>
//         {childeren}
//     </AuthContext>
// };

// export default AuthProvider;

import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const authData = {
        user,
        setUser,
    };

    return (
        <AuthContext value={authData}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;
