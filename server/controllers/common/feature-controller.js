import Feature from "../../models/Feature.js";


export const addFeatureImage = async (req, res) => {
    try {
        const { image } = req.body;

        const featureImages = new Feature({
            image,
        });

        await featureImages.save();

        res.status(201).json({
            success: true,
            data: featureImages,
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({ 
            success: false,
            message: "Error in adding feature image",
        });
    }
};

export const getFeatureImages = async (req, res) => {
    try {
        const images = await Feature.find();

        res.status(200).json({
            success: true,
            data: images,
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ 
            success: false,
            message: "Error in getting feature images",
        });
    }
};

export const deleteFeatureImage = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedImage = await Feature.findByIdAndDelete(id);

        res.status(200).json({
            success: true,
            data: deletedImage,
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ 
            success: false,
            message: "Error in deleting feature image",
        });
    }
};