import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog } from "../ui/dialog";
import { useState } from "react";
import AdminOrderDetailsView from "./order-details";

function AdminOrdersView() {

    const [OpenDetailsDialog, setOpenDetailsDialog] = useState(false);

    return ( 
        <Card>
            <CardHeader>
                <CardTitle>
                    All Orders
                </CardTitle>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Order ID</TableHead>
                            <TableHead>Order Date</TableHead>
                            <TableHead>Order Status</TableHead>
                            <TableHead>Order Price</TableHead>
                            <TableHead>
                                <span className="sr-only">Details</span>
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell>123456</TableCell>
                            <TableCell>27/01/2025</TableCell>
                            <TableCell>In Process</TableCell>
                            <TableCell>Rs. 10000</TableCell>
                            <TableCell>
                                <Dialog open={OpenDetailsDialog} onOpenChange={setOpenDetailsDialog}>
                                <Button onClick={() => setOpenDetailsDialog(true)}>View Details</Button>
                                <AdminOrderDetailsView/>
                                </Dialog>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
     );
}

export default AdminOrdersView;