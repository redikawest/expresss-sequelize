import Joi from "joi";
import { ERR_VALIDATION } from "../../helpers/Constant/errorConstant"
import { errorResponse } from "../../helpers/response";
import { pick } from "../../utils/pick";

const validate = (schema) => (req, res, next) => {
    const validSchema = pick(schema, ['params', 'query', 'body']);
    const object = pick(req, Object.keys(validSchema));
    const { value, error } = Joi.compile(validSchema)
        .prefs({ errors: { label: 'key' }, abortEarly: false })
        .validate(object);

    if (error) {
        const extractedErrors = []
        error.details.map(err => extractedErrors.push({ error: err.message }))
        
        return errorResponse(res, 400, ERR_VALIDATION, extractedErrors);
    }
    Object.assign(req, value);
    return next();
}

export default validate