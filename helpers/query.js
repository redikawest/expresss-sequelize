export const getDataWhere = async (model, source, value) => {
    
    const condition = {};

    condition[source] = value;
    let option = {
        where: condition
    }
    
    return await model.findOne(option)
}

export const createData = async (model, body, transaction) => {
    
    let result = await model.create(body, {transaction: transaction})

    return result
}

export const updateData = async (model, body) => {
    let result = await model.update(body)

    return result
}

export const deleteData = async (model, body) => {
    let result = await model.destroy()

    return result
}

export const pagination = async (page, size) => {

    const limit = size ? +size : 3;
    const offset = page ? (page - 1) * limit : 0;
  
    return { limit, offset };
}

export const getPagingData = async (data, page, limit) => {
    
    return { 
        size: limit, 
        total: data.count, 
        totalPages: Math.ceil(data.count / limit), 
        currentPage: page + 1,
        data: data.rows 
    };
}