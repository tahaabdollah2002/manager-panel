import swal from "sweetalert";
import { jpAxios } from "../JpAxios";


export const setUserService = async (data)=>{
    const res = await jpAxios.post('/users' , data);
    if (res) {
        console.log(res);
        swal(`${res.data.name} با موفقیت ایجاد شد`, {
            icon: "success",
            buttons: "متوجه شدم",            
        });
    }
}

export const updateUserService = async (data , userId)=>{
    const res = await jpAxios.put(`/users/${userId}` , data);
    if (res) {
        console.log(res);
        swal(`${res.data.name} با موفقیت ویرایش شد`, {
            icon: "success",
            buttons: "متوجه شدم",            
        });
    }
} 

export const getUserService = async (setData, userId)=>{
    jpAxios.get(`/users/${userId}`).then(res=>{
        setData({
            name: res.data.name ,
            username : res.data.username ,
            email : res.data.email,
            address : {
                street: res.data.address.street ,
                city: res.data.address.city ,
                suite: res.data.address.suite ,
                zipcode: res.data.address.zipcode 
            }
        })
    });
}