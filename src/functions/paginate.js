import _ from 'lodash';

export function paginate (pageNumber,pageSize,array) {

    let paginated = _.slice(array,(pageNumber-1)*pageSize,(pageNumber*pageSize));

    return paginated;

}