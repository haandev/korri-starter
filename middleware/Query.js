const MapQueryString = (request,response,next)=>
{
    const {sort:sortStr, limit:limitStr, fields:fieldsStr, join:joinStr, ...filter} = request.query;

    const limit = parseInt(limitStr)
    const fields = fieldsStr?.split(',');
    const associations = joinStr?.split(',');
    const sort = (sortStr) ? [[sortStr.split(':')[0],(sortStr.split(':')[1] || 'asc')]]: [];

    request.mappedQuery= {
        limit,
        fields,
        sort,
        filter,
        associations
    }
    return next()
}