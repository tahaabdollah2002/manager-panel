import React from "react";
import swal from "sweetalert";

const WithAlert = (MainComponent) =>{
    const NewComponent = (props) =>{
        const confirm = (message) =>{
            return swal({
                title: "حذف رکورد !",
                text: message,
                icon: "warning",
                buttons: ["خیر" , "بله"],
                dangerMode: true,
              })
        }
        const Alert = (message, icon) =>{
            return swal(message, {
                icon: icon,
                buttons: "متوجه شدم",
            });
        }
        return(
            <MainComponent {...props} confirm={confirm} Alert={Alert}/>
        )
    }
    return NewComponent
}

export default WithAlert