import API from "../Task2API/API";
import endpoints from "../Task2API/endpoints";

class ProductService {
  static fetchOne(id) {
    return API.get(endpoints.api.product.getOne + id);
  }
  static fetchAll(category) {
    let url = endpoints.api.product.getAll;
    if (category && category != "all")
      url = endpoints.api.product.getCategory + category;
    return API.get(url);
  }
  //   static fetchByCategory(category) {
  //     return API.get(endpoints.api.product.getCategory + category);
  //   }
}

export default ProductService;

// category ani all sathicha call aapan seperate pan karu shakato or single yachyat pan karu shakato.

// Seperate
//  static fetchAll() {
//     return API.get(endpoints.api.product.getAll);
//   }
//   static fetchByCategory(category) {
//     return API.get(endpoints.api.product.getCategory + category);
//   }

// Single
// static fetchAll(category) {
//     let url = endpoints.api.product.getAll;
//     if (category && category != "all")
//       url = endpoints.api.product.getCategory + category;
//     return API.get(url);
//   }
