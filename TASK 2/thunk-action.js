import Api from "../API/Api";
import { addProducts } from "../ReduxApp/Slices/ProductSlice";
import ProductService from "../Task2Services/ProductService";

// Arrow function madhe return statement chi garaj nahi tyamule ha syntax aahe

export const loadProducts = (category) => (dispatch, getState) => {
  ProductService.fetchAll(category).then((response) => {
    dispatch(addProducts(response.data));
  });
};

// addProducts hi action aahe jyat response.data ha payload pathavala aahe. Kunala ? tar jya slice var addProducts aahe tya reducer la. Ha response.data kuthun ala aahe tar, API call varun.


