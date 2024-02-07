import { useEffect, useState } from "react";
import axios from "axios";
import "./show.css"
import { NavLink } from "react-router-dom";

const Show = () =>{

    const [customer, setCustomer] = useState([])
    const [searchcustomer,setsearchCustomer] = useState("")

    async function getData(){
        const response = await axios.get("http://localhost:8080/customer")
        console.log(response)
        const result = response.data
        console.log(result)
        setCustomer(result)
    }
    useEffect(()=>{
        getData();
    },[])

    const searchData = customer.filter((customer)=>{
        return customer.name.toLowerCase().includes(searchcustomer.toLowerCase())
    })

    return(
        <>
            <h2 className="text-primary">Customer Detail</h2>
            <div className="c3">
                <label className="c2 fs-4">search customer :-</label>
                <div id='seearchbar'>
                    <i class="bi bi-search"></i>
                    <input className="c1 ms-2 p-2" type="search" onChange={(e)=>setsearchCustomer(e.target.value)}/>
                </div>
            </div>
            <table className="table table-hover table-dark mt-4">
                <thead>
                    <tr>
                        <th>Booking ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Pickup Address</th>
                        <th>Destination Address</th>
                        <th>city</th>
                        <th>state</th>
                        <th>Zipcode</th>
                        <th>Contact</th>
                        <th>Pickup Date</th>
                        <th>Pickup Time</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        searchData.map((em) =>{
                            return(
                                <tr key={em.id}>
                                <td>{em.id}</td>
                                <td>{em.name}</td>
                                <td>{em.email}</td>
                                <td>{em.pickup}</td>
                                <td>{em.destination}</td>
                                <td>{em.city}</td>
                                <td>{em.state}</td>
                                <td>{em.zip}</td>
                                <td>{em.contact}</td>
                                <td>{em.date}</td>
                                <td>{em.time}</td>
                                <td>
                                    <NavLink to={`/customer/update/${em.id}`}><button className="btn btn-success"><i class="bi bi-pencil-square"></i></button></NavLink> &nbsp;
                                    <NavLink to={`/customer/delete/${em.id}`}><button className="btn btn-danger"><i class="bi bi-trash"></i></button></NavLink>
                                </td>
                            </tr>
                            )  
                        })
                    }
                </tbody>
            </table>
        </>
    )
}
export default Show;