import React from "react";
import swal from "sweetalert";

const WithAlert2 = (props) =>{
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
    return (
        <React.Fragment>
            {props.render(confirm, Alert)}
        </React.Fragment>
    )
}

export default WithAlert2