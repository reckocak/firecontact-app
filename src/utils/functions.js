import firebase from "./firebase";
import { getDatabase, ref, push, set, onValue, remove, update } from "firebase/database";
import { useEffect, useState } from "react";
import { toastErrorNotify, toastSuccessNotify, toastWarnNotify } from "./toastify";


//Bilgi Ekleme
export const AddUser=(info)=>{
    const db = getDatabase(firebase);
    const userRef=ref(db, 'users/')
    const newUserRef=push(userRef);
    set(newUserRef,{
        username:info.username,
        phoneNumber:info.phoneNumber,
        gender:info.gender
    });
    toastSuccessNotify('Added Successfully')

}

//Bilgi Cagirma
export const useFetch=()=>{

    const [isLoading, setIsLoading]=useState();
    const [contactList, setContactList]=useState();

    useEffect(()=>{
        const db = getDatabase();
        const userRef = ref(db, "users/");
        onValue(userRef, (snapshot) => {
          const data = snapshot.val();
          const userArray = [];

          for (let id in data) {
            userArray.push({ id, ...data[id] });
          }
          setContactList(userArray);
          setIsLoading(false);
        });

    }, [])
    return{contactList,isLoading}
}

//Bilgi Silme

export const DeleteUser=(id)=>{
    const db = getDatabase(firebase);
    remove(ref(db, 'users/'+id));
    toastErrorNotify('Deleted Successfully')

}

//Bilgi Güncelleme

export const UpdateUser=(info)=>{
    const db = getDatabase();
    const updates ={};
    updates['users/'+info.id]=info;
    update(ref(db), updates);
    toastWarnNotify("Updated Successfully");
    console.log('osman');
    
}