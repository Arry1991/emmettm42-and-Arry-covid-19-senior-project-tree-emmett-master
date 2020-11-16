import React, { Component, useState } from 'react';
import './businessmain.css';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { Link } from 'react-router-dom';
import axios from "axios";
import { 
    Button, 
    FormGroup, 
    Label, 
    Input
} from 'reactstrap';


const BusinessInfo = (props) => {
    const [formData, setFormData] = useState({
        name: "",
        type: "",
        email: "",
        owner_email: "",
        url: "",
        phone: "",
        town: "",
        county: "",
        zip: "",
        description: ""
    });

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value});
        console.log(formData);
    }

    // on Form Submit run this function
    const registerHandler = () => {
        let formData = new FormData();
        let formDataAddress = new FormData();
        
        formData.append("name", formData.business_name);
        formData.append("type", formData.business_type);
        formData.append("email", formData.email);
        formData.append("owner_email", formData.owner_email);
        formData.append("url", formData.url);
        formData.append("phone", formData.business_phone);

        formDataAddress.append("street", formDataAddress.street);
        formDataAddress.append("town", formDataAddress.town);
        formDataAddress.append("zip", formDataAddress.street);
        formDataAddress.append("county", formDataAddress.county);


        // set urls
        const urlBusiness = "/react-backend/business.php"
        const urlAddress = "/react-backend/businessaddress.php"

        // post business info data
        axios
            .post(urlBusiness, formData)
            .then((res) => {
                console.log(res);
            });
        
        // post business address data
        
        axios
            .post(urlAddress, formDataAddress)
            .then((res) => {
                console.log(res);
            }); 
    };

    return(
        <>
            <h1>Edit Business Info</h1>
            <AvForm className='form' onValidSubmit={registerHandler}>
                <FormGroup>
                    <AvField
                        label='Change Business Name'
                        type='name'
                        name='name'
                        
                        onChange={(e) => {
                            onChange(e);
                        }}
                    />

                    <AvField
                        label='Street Address'
                        type='address'
                        name='street'
                        onChange={(e) => {
                            onChange(e);
                        }}                 
                    />

                    <AvField
                        label= 'Town'
                        type='town'
                        name='town'
                        onChange={(e) => {
                            onChange(e);
                        }}                  
                    />

                    {/* List of Cunties. To-Do: Hide this data in another file/make a helper function */}
                    <Label>County</Label>
                    <Input 
                        type="select" 
                        name="county" 
                        id="county" 
                        onChange={(e) => {
                            onChange(e);
                        }}>
                    <option>Albany</option>
                    <option>Allegany</option>
                    <option>Bronx</option>
                    <option>Broome</option>
                    <option>Cattaraugus</option>
                    <option>Cayuga</option>
                    <option>Chautauqua</option>
                    <option>Chemung</option>
                    <option>Chenango</option>
                    <option>Clinton</option>
                    <option>Columbia</option>
                    <option>Cortland</option>
                    <option>Delaware</option>
                    <option>Dutchess</option>
                    <option>Erie</option>
                    <option>Essex</option>
                    <option>Franklin</option>
                    <option>Fulton</option>
                    <option>Genesee</option>
                    <option>Greene</option>
                    <option>Hamilton</option>
                    <option>Herkimer</option>
                    <option>Jefferson</option>
                    <option>Kings</option>
                    <option>Lewis</option>
                    <option>Livingston</option>
                    <option>Madison	</option>
                    <option>Monroe</option>
                    <option>Montgomery</option>
                    <option>Nassau</option>
                    <option>New York</option>
                    <option>Niagara</option>
                    <option>Oneida</option>
                    <option>Onondaga</option>
                    <option>Ontario	</option>
                    <option>Orange</option>
                    <option>Orleans</option>
                    <option>Oswego</option>
                    <option>Otsego</option>
                    <option>Putnam</option>
                    <option>Queens</option>
                    <option>Rensselaer</option>
                    <option>Richmond</option>
                    <option>Rockland</option>
                    <option>Saint Lawrence</option>
                    <option>Saratoga</option>
                    <option>Schenectady</option>
                    <option>Schoharie</option>
                    <option>Schuyler</option>
                    <option>Seneca</option>
                    <option>Steuben</option>
                    <option>Suffolk</option>
                    <option>Sullivan</option>
                    <option>Tioga</option>
                    <option>Tompkins</option>
                    <option>Ulster</option>
                    <option>Warren</option>
                    <option>Washington</option>
                    <option>Wayne</option>
                    <option>Westchester</option>
                    <option>Wyoming</option>
                    <option>Yates</option>
                </Input>
                    
                    {/*Couldn't figure out padding for these reactsrap elements. This can be straightened out with CSS*/}
                    <p></p>
                    <AvField
                        label='ZIP'
                        type='zip'
                        name='zip'
                        onChange={(e) => {
                            onChange(e);
                        }}
                                            
                    />

                    <AvField
                        label='Update Business Email'
                        type='email'
                        name='email'
                        onChange={(e) => {
                            onChange(e);
                        }}                   
                    />

                    
                    <AvField
                        label='Update Owner Business Email'
                        type='email'
                        name='owner_email'
                        onChange={(e) => {
                            onChange(e);
                        }}                   
                    />

                    <AvField
                        label='Phone Number'
                        type='phone'
                        name='phone'
                        onChange={(e) => {
                            onChange(e);
                        }}                   
                    />

                    <AvField
                        label='URL'
                        type='url'
                        name='url'
                        onChange={(e) => {
                            onChange(e);
                        }}                   
                    />
                
                <Label>Change Business Type</Label>
                <Input 
                    type="select" 
                    name="type" 
                    id="type"
                    onChange={(e) => {
                        onChange(e);
                    }}>
                    <option>Restaurant</option>
                    <option>Retail</option>
                    <option>Banking/Finance</option>
                    <option>Auto Sales/Services</option>
                    <option>Medical Office</option>
                    <option>Daycare</option>
                    <option>Construction</option>
                    <option>Sports/Recreation</option>
                    <option>Other</option>
                </Input>
                </FormGroup>
                
                <FormGroup>


                </FormGroup>

                <FormGroup>
                <Label>Edit Description</Label>
                <Input 
                    type="textarea" 
                    name="description" 
                    id="businessDescription" 
                    onChange={(e) => {
                            onChange(e);
                        }}                
                />
                </FormGroup>
                <FormGroup>
                    <ul>
                        <li> <Button color="success">Submit</Button> </li>
                        <li> <Button tag={Link} to="/BusinessMain">Back</Button> </li>
                    </ul>
                </FormGroup>
            </AvForm>
        </>
    )
}

export default BusinessInfo;
