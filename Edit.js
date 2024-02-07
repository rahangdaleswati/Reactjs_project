import { useForm } from "react-hook-form"
import car from "../../Assets/car.webp"
import "./Register.css"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import { useEffect } from "react"


const Edit = () =>{
    const {register, handleSubmit, setValue} = useForm()
    const {customerID} = useParams()
    const Navigate = useNavigate()

    async function fetchData () {
        const result = await axios.get(`http://localhost:8080/customer/${customerID}`)
        setValue("name", result.data.name)
        setValue("email", result.data.email)
        setValue("pickup", result.data.pickup)
        setValue("destination", result.data.destination)
        setValue("city", result.data.city)
        setValue("state", result.data.state)
        setValue("zip", result.data.zip)
        setValue("contact", result.data.contact)
        setValue("date", result.data.date)
        setValue("time", result.data.time)
    }
    useEffect(()=>{
        fetchData()
    },[])

    function saveData (data){
        axios.put(`http://localhost:8080/customer/${customerID}`,data)
        alert("Data updated !!!")
        Navigate('/show')
    }

    return(
        <>
            <img src={car} alt="car background" className="w-100 img" height={686}/>

            <h1 className="text-primary title text-bold">Update Details</h1>

            <form onSubmit={handleSubmit(saveData)} className="row g-3 w-50 mx-auto bg-dark mt-3 rounded-2 form opacity-75">
                <div className="col-md-6">
                    <label htmlFor="name" className="form-label text-warning">Name</label>
                    <input type="text" className="form-control" id="name" {...register("name")}/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="email" className="form-label text-warning">Email</label>
                    <input type="email" className="form-control" id="email" {...register("email")}/>
                </div>
                <div className="col-12">
                    <label htmlFor="inputAddress" className="form-label text-warning">Pickup Address</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" {...register("pickup")}/>
                </div>
                <div className="col-12">
                    <label htmlFor="inputAddress2" className="form-label text-warning">Destination Address</label>
                    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" {...register("destination")}/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputCity" className="form-label text-warning">City</label>
                    <input type="text" className="form-control" id="inputCity" {...register("city")}/>
                </div>
                <div className="col-md-4">
                    <label htmlFor="inputState" className="form-label text-warning">State</label>
                    <select id="inputState" className="form-select" {...register("state")}>
                        <option>select state</option>
                        <option value="Maharashtra">Maharashtra</option>
                        <option value="Gujrat">Gujrat</option>
                        <option value="Goa">Goa</option>
                        <option value="Karnataka">Karnataka</option>
                    </select>
                </div>
                <div className="col-md-2">
                    <label htmlFor="inputZip" className="form-label text-warning">Zip</label>
                    <input type="text" className="form-control" id="inputZip" {...register("zip")}/>
                </div>
                <div className="col-md-4 ">
                    <label htmlFor="contact" className="form-label text-warning">Contact</label>
                    <input type="tel" className="form-control" id="contact" {...register("contact")}/>
                </div>
                <div className="col-md-4">
                    <label htmlFor="date" className="form-label text-warning">pickup Date</label>
                    <input type="date" className="form-control" id="date" {...register("date")}/>
                </div>
                <div className="col-md-4">
                    <label htmlFor="time" className="form-label text-warning">Time</label>
                    <input type="time" className="form-control" id="time" {...register("time")}/>
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary text-warning w-100 mb-4">Update Record</button>
                </div>
            </form>
        </>
    )
}
export default Edit;