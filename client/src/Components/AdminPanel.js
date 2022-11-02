import {Button ,EditableText,Toaster,Position,Card,Spinner, } from "@blueprintjs/core"
import '@blueprintjs/core/lib/css/blueprint.css';
import axios from "axios"
import React,{ useEffect,useState } from "react"
//import data from "../mock-data.json"
import "./page.css"

const AppToaster = Toaster.create({
    position: Position.TOP,
})

const baseURL = "http://localhost:5000/parcels/"

function Parcel(){
    const [parcels , setParcels] = useState([]);
    const [loading, setLoading] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          setLoading(true);
          try {
            const response = await axios.get(baseURL);
            setParcels(response.data);
          } catch (error) {
            console.log({ error });
            AppToaster.show({
              message: "Unable to load data, Something went wrong!",
              intent: "danger",
              timeout: 3000,
            });
          } finally {
            setLoading(false);
          }
        };
        fetchData();
      }, []);

    const onChangeHandler = (id, key, value) => {
        setParcels(values => {
            return values.map(item =>
                item.id === id ? { ...item, [key]: value } : item 
                )
        })
    }

    const updateParcels = id => {
        const data = parcels.find(item => item.id === id)
        axios.put(`http://localhost:5000/parcels/${id}`, data).then (response => {
            AppToaster.show({
                message: "updated successfully",
                intent: "success",
                timeout: 3000,
            })
        })
    }

    return(   
        <div className="container">
            <h1 className="title">Parcel Table</h1>
            {loading ? (
                <div className="spinner">
                    <Spinner/>
                    </div>
            ) : (
            <Card>
            <table>
                <thead>
                    <tr>
                        <th>PARCEL_ID</th>
                        <th>STATUS</th>
                        <th>CURRENT LOCATION</th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>
                        {parcels.map(parcel =>{
                        return(
                            <tr key={parcel.id}>
                            <td>{parcel.id}</td>
                            <td>
                      <EditableText
                        value={parcel.status}
                        onChange={(value) =>
                          onChangeHandler(parcel.id, "status", value)
                        }
                      />
                    </td>

                    <td>
                      <EditableText
                        value={parcel.location}
                        onChange={(value) =>
                          onChangeHandler(parcel.id, "location", value)
                        }
                      />
                    </td>
                            <td>
                            <Button className="btn" 
                            intent="primary" 
                            onClick={()=>updateParcels(parcel.id)}
                            >update
                            </Button> 
                            </td>
                            </tr>
                        )

                })}
                           
                </tbody>
            </table>
            </Card>
            )}
        </div>
     )
                        
            }
export default Parcel;