import {React, useEffect, useState} from 'react';
import style from '../style.module.css'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { jpAxios } from '../JpAxios';
import WithAlert from '../HOC/withAlert';

const Users = (props)=>{
    const{confirm, Alert} = props
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [mainUsers, setMainUsers] = useState([]);
    useEffect(() => {
        jpAxios.get('/users').then(res=>{
            setUsers(res.data);
            setMainUsers(res.data);
        }).catch(err=>{
            console.log(err);
        })
    }, []);
    const handleDelete = async (itemId)=>{
            if (await confirm(`آیا از حذف رکورد ${itemId} اطمینان دارید؟`)) {
                axios({
                    method: 'DELETE',
                    url: `https://jsonplaceholder.typicode.com/users/${itemId}`
                }).then(res=>{
                    if(res.status === 200){
                        let newUser = users.filter(u=>u.id !==itemId);
                        setUsers(newUser);
                        Alert("حذف با موفقیت انجام شد", "success")
                    }else{
                        Alert("عملیات با خطا مواجه شد", "error")
                    }
                })
                // axios.delete(`https://jsonplaceholder.typicode.com/users/${itemId}`)
              
            } else {
              Alert("شما از حذف رکورد منصرف شدید!", "info")
            }
        ;
    }
    const handleSearch=(e)=>{
    setUsers(mainUsers.filter(u=>u.name.includes(e.target.value)))
    }
    return (
        <div className={`${style.item_content} mt-5 p-4 container-fluid`}>
            <h4 className="text-center">مدیریت کاربران</h4>
            <div className="row my-2 mb-4 justify-content-between w-100 mx-0">
                <div className="form-group col-10 col-md-6 col-lg-4">
                    <input type="text" className="form-control shadow" placeholder="جستجو" onChange={handleSearch}/>
                </div>
                <div className="col-2 text-start px-0">
                    <Link to="/user/add">
                        <button className="btn btn-success">
                            <i className="fas fa-plus text-light"></i>
                        </button>
                    </Link>
                </div>
            </div>
            {users.length ? (
                <table className="table bg-light shadow">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>نام</th>
                        <th>نام کاربری</th>
                        <th>ایمیل</th>
                        <th>عملیات</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(u => (
                        <tr key={u.id}>
                        <td>{u.id}</td>
                        <td>{u.name}</td>
                        <td>{u.username}</td>
                        <td>{u.email}</td>
                        <td>
                            <i className="fas fa-edit text-warning mx-2 pointer"
                            onClick={()=>navigate(`/user/add/${u.id}`)}
                            ></i>
                            <i className="fas fa-trash text-danger mx-2 pointer" onClick={()=>handleDelete(u.id)}></i>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
            ) : (
                <h4 className='text-center text-info'>لطفا صبر کنید...</h4>
            )}
            
        </div>
    )

}

export default WithAlert(Users);