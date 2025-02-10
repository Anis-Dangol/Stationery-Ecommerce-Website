import { Button } from "../ui/button";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Label } from "../ui/label";



function AddressCard({
    addressInfo, 
    handleDeleteAddress, 
    handleEditAddress, 
    setCurrentSelectedAddress,
    selectedId
}) {
    return ( 
        <Card 
            onClick={
                setCurrentSelectedAddress 
                ? () => setCurrentSelectedAddress(addressInfo) 
                : null
            }
            className={`cursor-pointer border-red-700 
                ${selectedId?._id == addressInfo?._id 
                ? 'border-red-900 border-[4px]' 
                : 'border-black'}
            `}
        >
            <CardContent className={`grid p-4 gap-4`}>
                <Label>
                    <span className="font-bold">Address: </span>
                    {addressInfo?.address}
                </Label>
                <Label>
                    <span className="font-bold">City: </span>
                    {addressInfo?.city}
                </Label>
                <Label>
                    <span className="font-bold">Phone: </span>
                    {addressInfo?.phone}
                </Label>
                <Label>
                    <span className="font-bold">Pincode: </span>
                    {addressInfo?.pincode}
                </Label>
                <Label>
                    <span className="font-bold">Notes: </span>
                    {addressInfo?.notes}
                </Label>
            </CardContent>
            <CardFooter className="p-3 flex justify-between">
                <Button 
                    onClick={() => handleEditAddress(addressInfo)}
                >Edit
                </Button>
                <Button 
                    onClick={() => handleDeleteAddress(addressInfo)}
                >Delete
                </Button>
            </CardFooter>
        </Card>
     );
}

export default AddressCard;