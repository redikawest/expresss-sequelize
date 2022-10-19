import jwt from "jsonwebtoken";
import { ERR_AUTHORIZATION, ERR_INVALID_TOKEN } from "../../helpers/constant/errorConstant";
import { errorResponse } from "../../helpers/response";

export const generateToken = async (payload) => {
    const token = await jwt.sign(payload, process.env.SECRET_KEY)

    return token
}

export const verifyToken = async (req, res, next) => {
    if (!req.header("Authorization")) {
        return errorResponse(res, 401, ERR_AUTHORIZATION);
    }

    try {
        const token = req.header("Authorization").split(" ")[1];
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.user = decoded;
        next();
      } catch (error) {
        return errorResponse(res, 403, ERR_INVALID_TOKEN)
      }
}