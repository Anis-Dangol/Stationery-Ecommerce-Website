import ProductImageUpload from "@/components/admin-view/image-upload";
import { Button } from "@/components/ui/button";
import { addFeatureImage, deleteFeatureImage, getFeatureImages } from "@/store/common-slice";
import { XIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function AdminDashboard() {

    const [imageFile, setImageFile] = useState(null);
    const [uploadedImageUrl, setUploadedImageUrl] = useState("");
    const [imageLoadingState, setImageLoadingState] = useState(false);
    const dispatch = useDispatch();
    const {featureImageList} = useSelector((state) => state.commonFeature);

    function handleUploadFeatureImage() {
        dispatch(addFeatureImage(uploadedImageUrl))
        .then((data) => {
            if(data?.payload?.success) {
                dispatch(getFeatureImages());
                setImageFile(null);
                setUploadedImageUrl("");
            }
        })
    }

    function handleDeleteFeatureImage(id) {
        dispatch(deleteFeatureImage(id))
        .then((data) => {
            if (data?.payload?.success) {
                dispatch(getFeatureImages());
            }
        });
    }

    useEffect(() => {
        dispatch(getFeatureImages());
    }, [dispatch]);

    console.log(featureImageList, "featureImageList");

    return ( 
        <div>
            <ProductImageUpload
                imageFile={imageFile}
                setImageFile={setImageFile}
                uploadedImageUrl={uploadedImageUrl}
                setUploadedImageUrl={setUploadedImageUrl}
                setImageLoadingState={setImageLoadingState}
                imageLoadingState={imageLoadingState}
                isCustomStyling={true}
                // isEditMode={currentEditedId !
                // == null}
              />
              <Button onClick={handleUploadFeatureImage} className="mt-5 w-full">Upload</Button>
              <div className="flex flex-col gap-4 mt-5 ">
                    {
                        featureImageList && featureImageList.length > 0 ?
                        featureImageList.map(featureImageItem => 
                            <div className="relative">
                                <img
                                    src={featureImageItem.image}
                                    className="w-full h-[400px] object-cover rounded-t-lg hover:object-scale-down"
                                />
                                <Button className="absolute top-2 right-2" onClick={() => handleDeleteFeatureImage(featureImageItem._id)}>
                                    <XIcon size={24} />
                                </Button>
                            </div>
                        ) : null
                    }
              </div>
        </div>
     );
}

export default AdminDashboard;