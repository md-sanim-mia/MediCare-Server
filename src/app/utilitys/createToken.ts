import jwt from "jsonwebtoken";
const CreateToken = (
  jwtPayload: { email: string; role: string },
  scrict: string,
  expiresIn: number
) => {
  jwt.sign(jwtPayload, scrict, { expiresIn: expiresIn });
};

export default CreateToken;
