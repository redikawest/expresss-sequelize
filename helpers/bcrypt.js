import bcrypt from "bcrypt"

export const bcryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    return hash;
}

export const comparePassword = async (password, storePassword) => {
    const compare = await bcrypt.compare(password, storePassword)

    return compare
}