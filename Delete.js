import { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Delete = () =>{

    const [customer, setCustomer] = useState({})
    const {customerID} = useParams()
    const  navigate  = useNavigate()

    async function fetchData () {
        const result = await axios.get(`http://localhost:8080/customer/${customerID}`)
        setCustomer(result.data)
    }
    useEffect(()=>{
        fetchData()
    },[])

    function deleteData () {
        axios.delete(`http://localhost:8080/customer/${customerID}`)
        alert("Data Deleted successfully !!!")
        navigate('/show')
    }

    return(
        <>
            <form onSubmit={()=>deleteData()}>
                <h2>Do you really want to delete data from customer</h2>
                <h3>Id - {customer.id}</h3>
                <h3>Name - {customer.name}</h3>
                <input type="submit" value="yes" className="btn btn-success"/> &nbsp;
                <NavLink to={"/show"}>
                    <button type="button" className="btn btn-danger">No</button>
                </NavLink>
            </form>
        </>
    )
}
export default Delete;