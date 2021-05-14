import firebase from "../firebase"


export const postComment = (formData)=>{
const rootRef = firebase.database().ref("/")
const mesagges =rootRef.child("messages")
mesagges.push(formData)

}