import * as actionTypes from "../actions";
import ProductImgTest from "../../assets/IMAGES/TryPlaceholder/placeholder.jpeg";
import ProductImgTest2 from "../../assets/IMAGES/TryPlaceholder/placeholder.jpeg";
import ProductImgTest3 from "../../assets/IMAGES/TryPlaceholder/placeholder.jpeg";
import ProductImgTest4 from "../../assets/IMAGES/TryPlaceholder/placeholder.jpeg";
import ProductImgTest5 from "../../assets/IMAGES/TryPlaceholder/placeholder.jpeg";
import ProductImgTest6 from "../../assets/IMAGES/TryPlaceholder/placeholder.jpeg";
import ProductImgTest7 from "../../assets/IMAGES/TryPlaceholder/placeholder.jpeg";
import ProductImgTest8 from "../../assets/IMAGES/TryPlaceholder/placeholder.jpeg";
import ProductImgTest9 from "../../assets/IMAGES/TryPlaceholder/placeholder.jpeg";

export const initialState = {
    product: {
        id: 1,
        imgs: [
            {
                img: ProductImgTest
            },
            {
                img: ProductImgTest2
            },
            {
                img: ProductImgTest3
            },
            {
                img: ProductImgTest4
            },
            {
                img: ProductImgTest5
            },
            {
                img: ProductImgTest6
            },
            {
                img: ProductImgTest7
            },
            {
                img: ProductImgTest8
            },
            {
                img: ProductImgTest9
            }
        ],
        colors: [
            {
                color: "red"
            },
            {
                color: "blue"
            },
            {
                color: "green"
            }
        ],
        price: 178,
        discount: 20,
        description:
            "COSMO COS-DIS6502 24 in. Dishwasher in Fingerprint Resistant Stainless Steel with Stainless Steel Tub",
        ratings: 4.7,
        sold: 4788,
        reviews: 117
    }
};

export const productTestReducer = (state = initialState, action) => {
    // console.log(action.type);
    switch (action.type) {
        case actionTypes.SET_PRODUCT:
            return {
                ...state,
                product: action.payload
            };
        default:
            return state;
    }
};

export default productTestReducer;
