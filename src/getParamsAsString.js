
export const getParamsAsString = (queryParams) => {
  if(queryParams == null || queryParams == undefined){
    return ""
  }else{
    const params = new URLSearchParams(queryParams).toString();
    return "?" + params;
  }
}
