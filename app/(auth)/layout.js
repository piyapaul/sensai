//app/(auth)/layout.js
import React, { Children } from 'react'

const AuthLayout = ({ children }) => {
  return <div className="flex justify-center pt-40">
        {children}
    </div>
}

export default AuthLayout;
