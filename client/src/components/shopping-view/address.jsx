import { useState } from "react";
import CommonForm from "../common/form";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { addressFormControls } from "@/config";


const initialAddressFormData = {
    address : '',
    city : '',
    phone : '',
    pincode : '',
    notes : '',
}

function Address() {

    const [formData, setFormData] = useState(initialAddressFormData)

    function handleMangeAddress(event) {
        event.preventDefault();
    }

    function isFormValid() {
        return Object.keys(formData)
        .map(key => formData[key].trim() !== '')
        .every((item) => item);
    }

    return ( 
        <Card>
            <div>
                Address List
            </div>
            <CardHeader>
                <CardTitle>
                    Add New Address
                </CardTitle>
            </CardHeader>
            <CardContent>
                <CommonForm
                    formControls={addressFormControls}
                    formData={formData}
                    setFormData={setFormData}
                    buttonText={"Add"}
                    onSubmit={handleMangeAddress}
                    isBtnDisabled={!isFormValid()}
                />
            </CardContent>
        </Card>
     );
}

export default Address;