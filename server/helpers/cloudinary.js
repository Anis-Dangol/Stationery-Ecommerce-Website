import {v2 as cloudinary} from 'cloudinary';
import multer from 'multer';

cloudinary.config({
    cloud_name: "dgxluuo6b",
    api_key: "925597412423685",
    api_secret: "XO2ua1e8je8rBcybaz7H2UIa_PI",
});

const storage = new multer.memoryStorage();

export async function imageUploadUtil(file) {
    const result = await cloudinary.uploader.upload(file, {
        resource_type: "auto",
    });
    return result; 
}

export const upload = multer({ storage });

