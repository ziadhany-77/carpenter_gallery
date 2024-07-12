export class ApiFeatures {
  constructor(query, reqQuery) {
    this.query = query;
    this.reqQuery = reqQuery;
  }
  paginate(pageSiaze = 10) {
    let page = +this.reqQuery?.page || 1;
    if (page < 1) page = 1;
    this.query = this.query.skip((page - 1) * page).limit(pageSiaze);
    return this;
  }
}
