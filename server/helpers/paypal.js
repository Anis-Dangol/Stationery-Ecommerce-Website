import paypal from 'paypal-rest-sdk';

paypal.configure({
    mode: 'sandbox', //sandbox or live
    client_id: "AZGORhSjn2vb_hWtWdQOdQLAgRUh32uCHUYHNPfdKShsLixF3Pmr0PUvizuzaJeRWTH4COwLUW1ICF2t",
    client_secret: "EFEX-tAfclBZ5WoKHHAX3FNRy0acbxvpGP2Tm67OvshVKkEqn4keXJV2di-BaiI2JbW9n8daMTRowxSd",
});

export default paypal;






// ESEWA_SECRET_KEY= "8gBm/:&EnhH.1/q"
// ESEWA_GATEWAY_URL = "https://rc-epay.esewa.com.np"
// ESEWA_PRODUCT_CODE = "EPAYTEST"
// BACKEND_URI = "http://localhost:3001"
// DB_URI = "mongodb://localhost:27017/test1"