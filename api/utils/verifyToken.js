import jwt from "jsonwebtoken";
import { createError } from "../utils/error.js";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return next(createError(401, "You are not authenticated!"));
  }

  jwt.verify(token, process.env.JWT, (err, user) => {
    if (err) return next(createError(403, "Token is not valid!"));
    req.user = user;
    next();
  });
};





// Middleware to authorize employee routes
export const authorizeEmployee = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return next(createError(401, "You are not authenticated!"));
  }

  jwt.verify(token, process.env.JWT, (err, decodedToken) => {
    if (err) {
      return next(createError(403, "Token is not valid!"));
    }

    // Check if user role is employee
    if (decodedToken.roles.includes('employee')) {
      return next(); // User has employee role, proceed to next middleware
    } else {
      return next(createError(403, "You are not authorized to access this resource as an employee!"));
    }
  });
};

// Middleware to authorize manager routes
export const authorizeManager = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return next(createError(401, "You are not authenticated!"));
  }

  jwt.verify(token, process.env.JWT, (err, decodedToken) => {
    if (err) {
      return next(createError(403, "Token is not valid!"));
    }

    // Check if user role is manager
    if (decodedToken.roles.includes('manager')) {
      return next(); // User has manager role, proceed to next middleware
    } else {
      return next(createError(403, "You are not authorized to access this resource as a manager!"));
    }
  });
};


