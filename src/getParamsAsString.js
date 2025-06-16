/**
 * @author      Joseph Adogeri
 * @since       15-JUN-2025
 * @version     1.0.0
 * @description returns query string 
 *  
 */

export const getParamsAsString = (queryParams) => {
  if(queryParams == null || queryParams == undefined){
    return ""
  }else{
    const params = new URLSearchParams(queryParams).toString();
    return "?" + params;
  }
}
