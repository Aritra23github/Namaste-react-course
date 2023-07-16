import React from "react";
import ReactDom from "react-dom/client";
import { Card, Button, Nav, Navbar, Container } from "react-bootstrap";

//! Restaurant App Planning
/*
* Header
*  - Logo
*  - Nav Item
* Body
*  - Search
*  - Restaurant Component
*       - Restaurant Cart Component
* Footer
*  - Copyright
*  - Address 
*  - Carrer
*/

const Header = () => {
    return (
        <div className="header">    
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            src="https://i.pinimg.com/originals/34/0c/6a/340c6add7519212185a08d4205eb1965.png"
                            width="100"
                            height="100"
                            className="d-inline-block align-top"
                            alt="Food Ordering Logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="justify-content-end">
                            <Nav.Link href="#offers">Offers</Nav.Link>
                            <Nav.Link href="#help">Help</Nav.Link>
                            <Nav.Link href="#cart">Cart</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

const RestaurantContainer = (props) => {
    const { resData } = props;
    const {cloudinaryImageId, name, cuisines, avgRating, slaString, costForTwo} = resData?.data;
    return (
        <div>
            <Card style={{ width: '18rem' }} className="res-cart">
                <Card.Img variant="top" 
                    src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+ cloudinaryImageId} 
                />
                <Card.Body>
                    <Card.Title>{resData.data.name}</Card.Title>
                    <Card.Text style={{fontSize: '12px'}}>
                        {cuisines.join(', ')}
                    </Card.Text>
                    <div className="rating-tag rate">
                        <span className="icon-star style-icon">*</span>
                        <span>{avgRating}</span>
                    </div>
                    <div>
                        <span>{slaString}</span>
                    </div>
                    <div>
                        <span>{costForTwo/100} FOR TWO</span>
                    </div>
                    <span role="button" aria-label="open" className="view_btn">Quick View</span>
                </Card.Body>
            </Card>
        </div>
    )
}

const restList = [
    {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "427371",
          "name": "Taskeen",
          "uuid": "24323991-f15d-4728-a233-75a1e427831f",
          "city": "7",
          "area": "Burrabazar",
          "totalRatingsString": "20+ ratings",
          "cloudinaryImageId": "fsp2yqpgzq1h8igsznbg",
          "cuisines": [
            "Mughlai",
            "Awadhi",
            "Bengali",
            "North Indian",
            "Beverages",
            "Desserts"
          ],
          "tags": [
            
          ],
          "costForTwo": 29900,
          "costForTwoString": "₹299 FOR TWO",
          "deliveryTime": 74,
          "minDeliveryTime": 74,
          "maxDeliveryTime": 74,
          "slaString": "74 MINS",
          "lastMileTravel": 14.800000190734863,
          "slugs": {
            "restaurant": "taskeen-burrabazar-burrabazar",
            "city": "kolkata"
          },
          "cityState": "7",
          "address": "16, Zakaria St, Bara Bazar, Kolkata, West Bengal 700016, India",
          "locality": "Bara Bazar",
          "parentId": 237880,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              {
                "name": "time",
                "fee": 0,
                "message": ""
              },
              {
                "name": "distance",
                "fee": 15900,
                "message": ""
              },
              {
                "name": "special",
                "fee": 0,
                "message": ""
              }
            ],
            "totalFees": 15900,
            "message": "",
            "title": "Delivery Charge",
            "amount": "15900",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 1,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "14.8 kms",
          "hasSurge": false,
          "aggregatedDiscountInfoV3": {
            "header": "₹100 OFF",
            "subHeader": "ABOVE ₹159",
            "discountTag": "FLAT DEAL",
            "headerTypeV2": 0
          },
          "sla": {
            "restaurantId": "427371",
            "deliveryTime": 74,
            "minDeliveryTime": 74,
            "maxDeliveryTime": 74,
            "lastMileTravel": 14.800000190734863,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "IT_IS_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "3.9",
          "totalRatings": 20,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "17597",
          "name": "ATS Arun Tea Stall",
          "uuid": "1e766645-94e7-4b3a-a24c-bd9aaa87672f",
          "city": "7",
          "area": "Bhowanipore",
          "totalRatingsString": "1000+ ratings",
          "cloudinaryImageId": "qf7ypvspvv3n79ohpn5w",
          "cuisines": [
            "Beverages",
            "Snacks",
            "Desserts",
            "Fast Food"
          ],
          "tags": [
            
          ],
          "costForTwo": 10000,
          "costForTwoString": "₹100 FOR TWO",
          "deliveryTime": 62,
          "minDeliveryTime": 62,
          "maxDeliveryTime": 62,
          "slaString": "62 MINS",
          "lastMileTravel": 14.899999618530273,
          "slugs": {
            "restaurant": "arun-tea-stall-metro-plaza-shopping-centre-central-kolkata",
            "city": "kolkata"
          },
          "cityState": "7",
          "address": "4/1 SHAMBHUNATH PANDIT STREET",
          "locality": "Near Golmandir",
          "parentId": 37652,
          "unserviceable": false,
          "veg": true,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              {
                "name": "distance",
                "fee": 15900,
                "message": ""
              },
              {
                "name": "time",
                "fee": 0,
                "message": ""
              },
              {
                "name": "special",
                "fee": 0,
                "message": ""
              }
            ],
            "totalFees": 15900,
            "message": "",
            "title": "Delivery Charge",
            "amount": "15900",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": "Closes soon"
          },
          "longDistanceEnabled": 1,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "14.8 kms",
          "hasSurge": false,
          "aggregatedDiscountInfoV3": {
            "header": "₹150 OFF",
            "subHeader": "ABOVE ₹499",
            "discountTag": "FLAT DEAL",
            "headerTypeV2": 0
          },
          "sla": {
            "restaurantId": "17597",
            "deliveryTime": 62,
            "minDeliveryTime": 62,
            "maxDeliveryTime": 62,
            "lastMileTravel": 14.899999618530273,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "IT_IS_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "4.3",
          "totalRatings": 1000,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "295595",
          "name": "Hondo's",
          "uuid": "f1688e6e-2e0e-429d-9477-46f66c88f6c3",
          "city": "7",
          "area": "Jodhpur Park",
          "totalRatingsString": "1000+ ratings",
          "cloudinaryImageId": "1e2b51f470122ff87077ee92976577ca",
          "cuisines": [
            "American",
            "Chinese",
            "Continental",
            "Desserts"
          ],
          "tags": [
            
          ],
          "costForTwo": 30000,
          "costForTwoString": "₹300 FOR TWO",
          "deliveryTime": 93,
          "minDeliveryTime": 93,
          "maxDeliveryTime": 93,
          "slaString": "93 MINS",
          "lastMileTravel": 20.399999618530273,
          "slugs": {
            "restaurant": "hondo's-south-kolkata-south-kolkata",
            "city": "kolkata"
          },
          "cityState": "7",
          "address": "379,Jodhpur Park, Kolkata-700068",
          "locality": "South Kolkata",
          "parentId": 21761,
          "unserviceable": true,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              {
                "name": "time",
                "fee": 0,
                "message": ""
              },
              {
                "name": "distance",
                "fee": 21900,
                "message": ""
              },
              {
                "name": "special",
                "fee": 0,
                "message": ""
              }
            ],
            "totalFees": 21900,
            "message": "",
            "title": "Delivery Charge",
            "amount": "21900",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "20.3 kms",
          "hasSurge": false,
          "aggregatedDiscountInfoV3": {
            "header": "₹100 OFF",
            "subHeader": "ABOVE ₹159",
            "discountTag": "FLAT DEAL",
            "headerTypeV2": 0
          },
          "sla": {
            "restaurantId": "295595",
            "deliveryTime": 93,
            "minDeliveryTime": 93,
            "maxDeliveryTime": 93,
            "lastMileTravel": 20.399999618530273,
            "lastMileDistance": 0,
            "serviceability": "NON_SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "4.0",
          "totalRatings": 1000,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "95449",
          "name": "Subway",
          "uuid": "7ff941a1-ab40-4295-9220-068ea37edf24",
          "city": "7",
          "area": "Regent Park",
          "totalRatingsString": "10000+ ratings",
          "cloudinaryImageId": "1ace5fa65eff3e1223feb696c956b38b",
          "cuisines": [
            "Fast Food",
            "Healthy Food",
            "Salads",
            "Snacks",
            "Desserts",
            "Beverages"
          ],
          "tags": [
            
          ],
          "costForTwo": 35000,
          "costForTwoString": "₹350 FOR TWO",
          "deliveryTime": 107,
          "minDeliveryTime": 107,
          "maxDeliveryTime": 107,
          "slaString": "107 MINS",
          "lastMileTravel": 20.799999237060547,
          "slugs": {
            "restaurant": "subway-tollygunge-naktala",
            "city": "kolkata"
          },
          "cityState": "7",
          "address": "131/46, N. S. C., Bose Road, Tollygunge, Kolkata",
          "locality": "Near Ranikuthi,Regent Park area",
          "parentId": 2,
          "unserviceable": true,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              {
                "name": "distance",
                "fee": 22900,
                "message": ""
              },
              {
                "name": "time",
                "fee": 0,
                "message": ""
              },
              {
                "name": "special",
                "fee": 0,
                "message": ""
              }
            ],
            "totalFees": 22900,
            "message": "",
            "title": "Delivery Charge",
            "amount": "22900",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "20.7 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "95449",
            "deliveryTime": 107,
            "minDeliveryTime": 107,
            "maxDeliveryTime": 107,
            "lastMileTravel": 20.799999237060547,
            "lastMileDistance": 0,
            "serviceability": "NON_SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "4.4",
          "totalRatings": 10000,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "222423",
          "name": "Azad Hind Dhaba",
          "uuid": "0e3d3fac-ce92-4718-950e-4907dd7bbd6d",
          "city": "7",
          "area": "Central Kolkata",
          "totalRatingsString": "1000+ ratings",
          "cloudinaryImageId": "5af6a9b8069daeb459b9b4f971ac3b0c",
          "cuisines": [
            "Chinese",
            "North Indian"
          ],
          "tags": [
            
          ],
          "costForTwo": 50000,
          "costForTwoString": "₹500 FOR TWO",
          "deliveryTime": 70,
          "minDeliveryTime": 70,
          "maxDeliveryTime": 70,
          "slaString": "70 MINS",
          "lastMileTravel": 14.899999618530273,
          "slugs": {
            "restaurant": "azad-hind-dhaba-central-kolkata-central-kolkata",
            "city": "kolkata"
          },
          "cityState": "7",
          "address": "17, Ground Floor, Harish Mukherjee Road, Bhawanipur, Kolkata",
          "locality": "Bhawanipur",
          "parentId": 6275,
          "unserviceable": true,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              {
                "name": "distance",
                "fee": 15900,
                "message": ""
              },
              {
                "name": "time",
                "fee": 0,
                "message": ""
              },
              {
                "name": "special",
                "fee": 0,
                "message": ""
              }
            ],
            "totalFees": 15900,
            "message": "",
            "title": "Delivery Charge",
            "amount": "15900",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "14.8 kms",
          "hasSurge": false,
          "aggregatedDiscountInfoV3": {
            "header": "₹100 OFF",
            "subHeader": "ABOVE ₹159",
            "discountTag": "FLAT DEAL",
            "headerTypeV2": 0
          },
          "sla": {
            "restaurantId": "222423",
            "deliveryTime": 70,
            "minDeliveryTime": 70,
            "maxDeliveryTime": 70,
            "lastMileTravel": 14.899999618530273,
            "lastMileDistance": 0,
            "serviceability": "NON_SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "4.0",
          "totalRatings": 1000,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "438668",
          "name": "Extra Cheese Bistro",
          "uuid": "11030860-698f-4595-baff-3d1d745f2ae3",
          "city": "7",
          "area": "Behala",
          "totalRatingsString": "100+ ratings",
          "cloudinaryImageId": "k7gtljinwynjqzma2qql",
          "cuisines": [
            "Italian-American",
            "Snacks",
            "Fast Food",
            "Desserts"
          ],
          "tags": [
            
          ],
          "costForTwo": 50000,
          "costForTwoString": "₹500 FOR TWO",
          "deliveryTime": 82,
          "minDeliveryTime": 82,
          "maxDeliveryTime": 82,
          "slaString": "82 MINS",
          "lastMileTravel": 19.5,
          "slugs": {
            "restaurant": "extra-cheese-bistro-behala-behala",
            "city": "kolkata"
          },
          "cityState": "7",
          "address": "19A, Banamali Ghosal Ln, Jadu Colony, Sarada Pally, Kolkata, West Bengal 700034, India",
          "locality": "Behala",
          "parentId": 264583,
          "unserviceable": true,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              {
                "name": "distance",
                "fee": 20900,
                "message": ""
              },
              {
                "name": "time",
                "fee": 0,
                "message": ""
              },
              {
                "name": "special",
                "fee": 0,
                "message": ""
              }
            ],
            "totalFees": 20900,
            "message": "",
            "title": "Delivery Charge",
            "amount": "20900",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "19.5 kms",
          "hasSurge": false,
          "aggregatedDiscountInfoV3": {
            "header": "₹100 OFF",
            "subHeader": "ABOVE ₹159",
            "discountTag": "FLAT DEAL",
            "headerTypeV2": 0
          },
          "sla": {
            "restaurantId": "438668",
            "deliveryTime": 82,
            "minDeliveryTime": 82,
            "maxDeliveryTime": 82,
            "lastMileTravel": 19.5,
            "lastMileDistance": 0,
            "serviceability": "NON_SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "4.2",
          "totalRatings": 100,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "502588",
          "name": "Biryani Ka Bachchan",
          "uuid": "7cafb070-315a-4afc-87cd-e38e9c98b796",
          "city": "7",
          "area": "Central Kolkata",
          "totalRatingsString": "500+ ratings",
          "cloudinaryImageId": "k5xddyuhpvlxvyd3qxh9",
          "cuisines": [
            "Biryani",
            "Kebabs",
            "Fast Food"
          ],
          "tags": [
            
          ],
          "costForTwo": 35000,
          "costForTwoString": "₹350 FOR TWO",
          "deliveryTime": 90,
          "minDeliveryTime": 90,
          "maxDeliveryTime": 90,
          "slaString": "90 MINS",
          "lastMileTravel": 18.299999237060547,
          "slugs": {
            "restaurant": "biryani-ka-bachchan-central-kolkata-central-kolkata",
            "city": "kolkata"
          },
          "cityState": "7",
          "address": "139/ 1G Tiljala Road, Kolkata 700046, Behind Topsia, Gulshan Hall - 139/ 1G Tiljala Road, Kolkata 700046, Behind Topsia, Gulshan Hall - 700046",
          "locality": "Tiljala Road",
          "parentId": 301056,
          "unserviceable": true,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              {
                "name": "distance",
                "fee": 19900,
                "message": ""
              },
              {
                "name": "time",
                "fee": 0,
                "message": ""
              },
              {
                "name": "special",
                "fee": 0,
                "message": ""
              }
            ],
            "totalFees": 19900,
            "message": "",
            "title": "Delivery Charge",
            "amount": "19900",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "18.2 kms",
          "hasSurge": false,
          "aggregatedDiscountInfoV3": {
            "header": "₹100 OFF",
            "subHeader": "ABOVE ₹159",
            "discountTag": "FLAT DEAL",
            "headerTypeV2": 0
          },
          "sla": {
            "restaurantId": "502588",
            "deliveryTime": 90,
            "minDeliveryTime": 90,
            "maxDeliveryTime": 90,
            "lastMileTravel": 18.299999237060547,
            "lastMileDistance": 0,
            "serviceability": "NON_SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "3.5",
          "totalRatings": 500,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "396843",
          "name": "The Cheesecake Factory",
          "uuid": "bf188175-71d8-4b97-85a5-d24a50368158",
          "city": "7",
          "area": "Jadavpur",
          "totalRatingsString": "100+ ratings",
          "cloudinaryImageId": "h06yzwwrqc6kbewzuhrk",
          "cuisines": [
            "Continental",
            "Desserts",
            "Pizzas"
          ],
          "tags": [
            
          ],
          "costForTwo": 20000,
          "costForTwoString": "₹200 FOR TWO",
          "deliveryTime": 96,
          "minDeliveryTime": 96,
          "maxDeliveryTime": 96,
          "slaString": "96 MINS",
          "lastMileTravel": 19.700000762939453,
          "slugs": {
            "restaurant": "the-cheesecake-factory-jadavpur-jadavpur",
            "city": "kolkata"
          },
          "cityState": "7",
          "address": "60/12A, Hari Pada Dutta Ln, Rajendra Prasad Colony, Tollygunge, Kolkata, West Bengal 700033, India",
          "locality": "Rajendra Prasad Colony",
          "parentId": 257286,
          "unserviceable": true,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              {
                "name": "time",
                "fee": 0,
                "message": ""
              },
              {
                "name": "distance",
                "fee": 20900,
                "message": ""
              },
              {
                "name": "special",
                "fee": 0,
                "message": ""
              }
            ],
            "totalFees": 20900,
            "message": "",
            "title": "Delivery Charge",
            "amount": "20900",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "19.7 kms",
          "hasSurge": false,
          "aggregatedDiscountInfoV3": {
            "header": "₹100 OFF",
            "subHeader": "ABOVE ₹159",
            "discountTag": "FLAT DEAL",
            "headerTypeV2": 0
          },
          "sla": {
            "restaurantId": "396843",
            "deliveryTime": 96,
            "minDeliveryTime": 96,
            "maxDeliveryTime": 96,
            "lastMileTravel": 19.700000762939453,
            "lastMileDistance": 0,
            "serviceability": "NON_SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "3.8",
          "totalRatings": 100,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "58617",
          "name": "Biryani Darbar",
          "uuid": "a0bd6d2d-7058-4612-8353-225fe5094933",
          "city": "7",
          "area": "Central Kolkata",
          "totalRatingsString": "500+ ratings",
          "cloudinaryImageId": "ekxatdz1oojqymmxcri0",
          "cuisines": [
            "Biryani",
            "Kebabs"
          ],
          "tags": [
            
          ],
          "costForTwo": 20000,
          "costForTwoString": "₹200 FOR TWO",
          "deliveryTime": 75,
          "minDeliveryTime": 75,
          "maxDeliveryTime": 75,
          "slaString": "75 MINS",
          "lastMileTravel": 17.399999618530273,
          "slugs": {
            "restaurant": "fries-before-guys-alipore-alipore",
            "city": "kolkata"
          },
          "cityState": "7",
          "address": "51 SYED AMIR ALI AVENUE, KOLKATA MUNICIPAL CORPORATION, Kolkata, West Bengal-700019",
          "locality": "Syed Amir Ali Avenue",
          "parentId": 2696,
          "unserviceable": true,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              {
                "name": "distance",
                "fee": 18900,
                "message": ""
              },
              {
                "name": "time",
                "fee": 0,
                "message": ""
              },
              {
                "name": "special",
                "fee": 0,
                "message": ""
              }
            ],
            "totalFees": 18900,
            "message": "",
            "title": "Delivery Charge",
            "amount": "18900",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "17.3 kms",
          "hasSurge": false,
          "aggregatedDiscountInfoV3": {
            "header": "₹100 OFF",
            "subHeader": "ABOVE ₹159",
            "discountTag": "FLAT DEAL",
            "headerTypeV2": 0
          },
          "sla": {
            "restaurantId": "58617",
            "deliveryTime": 75,
            "minDeliveryTime": 75,
            "maxDeliveryTime": 75,
            "lastMileTravel": 17.399999618530273,
            "lastMileDistance": 0,
            "serviceability": "NON_SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "3.9",
          "totalRatings": 500,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "326167",
          "name": "Gusto Pizza",
          "uuid": "dd96554e-017d-40b8-b423-4fa5ea9304ce",
          "city": "7",
          "area": "Kalighat",
          "totalRatingsString": "1000+ ratings",
          "cloudinaryImageId": "11ad707372c6a41c0600b4653a196628",
          "cuisines": [
            "Pizzas",
            "Pastas",
            "Italian"
          ],
          "tags": [
            
          ],
          "costForTwo": 25000,
          "costForTwoString": "₹250 FOR TWO",
          "deliveryTime": 90,
          "minDeliveryTime": 90,
          "maxDeliveryTime": 90,
          "slaString": "90 MINS",
          "lastMileTravel": 17.600000381469727,
          "slugs": {
            "restaurant": "gusto-pizza-south-kolkata-south-kolkata",
            "city": "kolkata"
          },
          "cityState": "7",
          "address": "18/A PARASAR ROAD GROUND FLOOR, Kolkata,700029",
          "locality": "South Kolkata",
          "parentId": 92299,
          "unserviceable": true,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              {
                "name": "time",
                "fee": 0,
                "message": ""
              },
              {
                "name": "distance",
                "fee": 18900,
                "message": ""
              },
              {
                "name": "special",
                "fee": 0,
                "message": ""
              }
            ],
            "totalFees": 18900,
            "message": "",
            "title": "Delivery Charge",
            "amount": "18900",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "17.6 kms",
          "hasSurge": false,
          "aggregatedDiscountInfoV3": {
            "header": "₹100 OFF",
            "subHeader": "ABOVE ₹159",
            "discountTag": "FLAT DEAL",
            "headerTypeV2": 0
          },
          "sla": {
            "restaurantId": "326167",
            "deliveryTime": 90,
            "minDeliveryTime": 90,
            "maxDeliveryTime": 90,
            "lastMileTravel": 17.600000381469727,
            "lastMileDistance": 0,
            "serviceability": "NON_SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "3.8",
          "totalRatings": 1000,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "84222",
          "name": "Taj Biryani and Restaurant",
          "uuid": "54466eac-e3d5-41f1-be93-84c89dacf5dc",
          "city": "7",
          "area": "Taltala",
          "totalRatingsString": "1000+ ratings",
          "cloudinaryImageId": "d6kchzesrjvn1obqqe1k",
          "cuisines": [
            "Biryani",
            "Mughlai"
          ],
          "tags": [
            
          ],
          "costForTwo": 25000,
          "costForTwoString": "₹250 FOR TWO",
          "deliveryTime": 68,
          "minDeliveryTime": 68,
          "maxDeliveryTime": 68,
          "slaString": "68 MINS",
          "lastMileTravel": 17.299999237060547,
          "slugs": {
            "restaurant": "taj-biryani-and-restaurant-moulali-central-kolkata",
            "city": "kolkata"
          },
          "cityState": "7",
          "address": "114, Lenin Sarani, Kolkata-700013",
          "locality": "Lenin Saran",
          "parentId": 18699,
          "unserviceable": true,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              {
                "name": "time",
                "fee": 0,
                "message": ""
              },
              {
                "name": "distance",
                "fee": 19900,
                "message": ""
              },
              {
                "name": "special",
                "fee": 0,
                "message": ""
              }
            ],
            "totalFees": 19900,
            "message": "",
            "title": "Delivery Charge",
            "amount": "19900",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "17.2 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "84222",
            "deliveryTime": 68,
            "minDeliveryTime": 68,
            "maxDeliveryTime": 68,
            "lastMileTravel": 17.299999237060547,
            "lastMileDistance": 0,
            "serviceability": "NON_SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "3.8",
          "totalRatings": 1000,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "471475",
          "name": "Cake O Clock",
          "uuid": "5b124d62-bbc8-4720-a17f-73f8c1f10c84",
          "city": "7",
          "area": "Haridevpur",
          "totalRatingsString": "20+ ratings",
          "cloudinaryImageId": "cvsb4qtj7ksyzkwddm3v",
          "cuisines": [
            "Bakery"
          ],
          "tags": [
            
          ],
          "costForTwo": 20000,
          "costForTwoString": "₹200 FOR TWO",
          "deliveryTime": 101,
          "minDeliveryTime": 101,
          "maxDeliveryTime": 101,
          "slaString": "101 MINS",
          "lastMileTravel": 21,
          "slugs": {
            "restaurant": "cake-o'-clock-jadavpur-jadavpur",
            "city": "kolkata"
          },
          "cityState": "7",
          "address": "HARIDEVPUR,NASKAR PARA ROAD, BOROUGH-X III, KOLKATA MUNICIPAL CORPORATION, Kolkata, West Bengal - 700041",
          "locality": "Naskar Para Road",
          "parentId": 21771,
          "unserviceable": true,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              {
                "name": "distance",
                "fee": 21900,
                "message": ""
              },
              {
                "name": "time",
                "fee": 0,
                "message": ""
              },
              {
                "name": "special",
                "fee": 0,
                "message": ""
              }
            ],
            "totalFees": 21900,
            "message": "",
            "title": "Delivery Charge",
            "amount": "21900",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "21 kms",
          "hasSurge": false,
          "aggregatedDiscountInfoV3": {
            "header": "₹100 OFF",
            "subHeader": "ABOVE ₹159",
            "discountTag": "FLAT DEAL",
            "headerTypeV2": 0
          },
          "sla": {
            "restaurantId": "471475",
            "deliveryTime": 101,
            "minDeliveryTime": 101,
            "maxDeliveryTime": 101,
            "lastMileTravel": 21,
            "lastMileDistance": 0,
            "serviceability": "NON_SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "4.0",
          "totalRatings": 20,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "314502",
          "name": "The Biryani Mahal",
          "uuid": "4e06d1f5-e768-4fc9-b105-57395aac6c13",
          "city": "7",
          "area": "Taltala",
          "totalRatingsString": "1000+ ratings",
          "cloudinaryImageId": "klesa3tgqtc10df6nbnw",
          "cuisines": [
            "Biryani"
          ],
          "tags": [
            
          ],
          "costForTwo": 25000,
          "costForTwoString": "₹250 FOR TWO",
          "deliveryTime": 63,
          "minDeliveryTime": 63,
          "maxDeliveryTime": 63,
          "slaString": "63 MINS",
          "lastMileTravel": 16.600000381469727,
          "slugs": {
            "restaurant": "the-biryani-mahal-esplanade-esplanade",
            "city": "kolkata"
          },
          "cityState": "7",
          "address": "54/2 RAFI AHMED KIDWAI ROAD, Kolkata - 700016",
          "locality": "Esplanade",
          "parentId": 205454,
          "unserviceable": true,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              {
                "name": "distance",
                "fee": 17900,
                "message": ""
              },
              {
                "name": "time",
                "fee": 0,
                "message": ""
              },
              {
                "name": "special",
                "fee": 0,
                "message": ""
              }
            ],
            "totalFees": 17900,
            "message": "",
            "title": "Delivery Charge",
            "amount": "17900",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "16.6 kms",
          "hasSurge": false,
          "aggregatedDiscountInfoV3": {
            "header": "₹100 OFF",
            "subHeader": "ABOVE ₹159",
            "discountTag": "FLAT DEAL",
            "headerTypeV2": 0
          },
          "sla": {
            "restaurantId": "314502",
            "deliveryTime": 63,
            "minDeliveryTime": 63,
            "maxDeliveryTime": 63,
            "lastMileTravel": 16.600000381469727,
            "lastMileDistance": 0,
            "serviceability": "NON_SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "3.3",
          "totalRatings": 1000,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "163489",
          "name": "Tukisyano, Turkish Ice Cream",
          "uuid": "964a1592-d914-44c1-b46a-aae134d3949b",
          "city": "7",
          "area": "Lake Gardens",
          "totalRatingsString": "20+ ratings",
          "cloudinaryImageId": "247f0c849248c71ccab65fc9a37f6ff4",
          "cuisines": [
            "Ice Cream"
          ],
          "tags": [
            
          ],
          "costForTwo": 20000,
          "costForTwoString": "₹200 FOR TWO",
          "deliveryTime": 94,
          "minDeliveryTime": 94,
          "maxDeliveryTime": 94,
          "slaString": "94 MINS",
          "lastMileTravel": 19.700000762939453,
          "slugs": {
            "restaurant": "turkishyano-south-kolkata",
            "city": "kolkata"
          },
          "cityState": "7",
          "address": "369, Prince Anwar Shah Road, Kolkata - 700045. Near Lords More Be Bonnie",
          "locality": "Lake Gardens",
          "parentId": 218509,
          "unserviceable": true,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              {
                "name": "distance",
                "fee": 20900,
                "message": ""
              },
              {
                "name": "time",
                "fee": 0,
                "message": ""
              },
              {
                "name": "special",
                "fee": 0,
                "message": ""
              }
            ],
            "totalFees": 20900,
            "message": "",
            "title": "Delivery Charge",
            "amount": "20900",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "19.7 kms",
          "hasSurge": false,
          "aggregatedDiscountInfoV3": {
            "header": "₹100 OFF",
            "subHeader": "ABOVE ₹159",
            "discountTag": "FLAT DEAL",
            "headerTypeV2": 0
          },
          "sla": {
            "restaurantId": "163489",
            "deliveryTime": 94,
            "minDeliveryTime": 94,
            "maxDeliveryTime": 94,
            "lastMileTravel": 19.700000762939453,
            "lastMileDistance": 0,
            "serviceability": "NON_SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "3.5",
          "totalRatings": 20,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "427651",
          "name": "Kiss The Cook",
          "uuid": "bcc438c4-5129-40c1-b251-a5de19c7102c",
          "city": "7",
          "area": "Bikramgar",
          "totalRatingsString": "100+ ratings",
          "cloudinaryImageId": "riwszifd9bmuc1b9dcms",
          "cuisines": [
            "Continental",
            "Italian"
          ],
          "tags": [
            
          ],
          "costForTwo": 50000,
          "costForTwoString": "₹500 FOR TWO",
          "deliveryTime": 107,
          "minDeliveryTime": 107,
          "maxDeliveryTime": 107,
          "slaString": "107 MINS",
          "lastMileTravel": 20.5,
          "slugs": {
            "restaurant": "kiss-the-cook-jadavpur-jadavpur",
            "city": "kolkata"
          },
          "cityState": "7",
          "address": "8/35A BIKRAMGARH, JADAVPUR, KOLKATA-700032 , BOROUGH-X, KOLKATA MUNICIPAL CORPORATION, Kolkata, West Bengal - 700032",
          "locality": "Jadavpur",
          "parentId": 118933,
          "unserviceable": true,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              {
                "name": "distance",
                "fee": 21900,
                "message": ""
              },
              {
                "name": "time",
                "fee": 0,
                "message": ""
              },
              {
                "name": "special",
                "fee": 0,
                "message": ""
              }
            ],
            "totalFees": 21900,
            "message": "",
            "title": "Delivery Charge",
            "amount": "21900",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "20.5 kms",
          "hasSurge": false,
          "aggregatedDiscountInfoV3": {
            "header": "₹100 OFF",
            "subHeader": "ABOVE ₹159",
            "discountTag": "FLAT DEAL",
            "headerTypeV2": 0
          },
          "sla": {
            "restaurantId": "427651",
            "deliveryTime": 107,
            "minDeliveryTime": 107,
            "maxDeliveryTime": 107,
            "lastMileTravel": 20.5,
            "lastMileDistance": 0,
            "serviceability": "NON_SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "3.9",
          "totalRatings": 100,
          "new": false
        },
        "subtype": "basic"
      }
];

const Body = () => {
    
    return (
        <div className="body">
            <div className="search-bar">
                Search
            </div>
            <div className="res-container">
                {
                    restList.map(res => {
                        return (
                            <RestaurantContainer 
                                key={res.data.id} 
                                resData={res} 
                            />  
                        )
                    })
                }
            </div>
        </div>
    )
}

const Footer = () => {}

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
            <Footer />
        </div>
    )
}

const root = ReactDom.createRoot(document.getElementById('root'));

root.render(<AppLayout />);