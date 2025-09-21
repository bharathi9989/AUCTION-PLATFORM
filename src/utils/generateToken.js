import jwt from "jsonwebtoken";

const generateToken = (data) => {
  const token = jwt.sign(data, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
    return token;
};

export default generateToken;
