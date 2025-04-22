import {v2 as cloudinary} from 'cloudinary';
import multer from 'multer';

cloudinary.config({
    cloud_name: "<ADD YOUR CLOUDINARY CLOUD NAME HERE>",
    api_key: "<ADD YOUR CLOUDINARY API KEY HERE>",
    api_secret: "<ADD YOUR CLOUDINARY API SECRET HERE>",
});

const storage = new multer.memoryStorage();

export async function imageUploadUtil(file) {
    const result = await cloudinary.uploader.upload(file, {
        resource_type: "auto",
    });
    return result; 
}

export const upload = multer({ storage });

