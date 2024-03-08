export const checkvaliddata=(email,password)=>{
    const isemailvalid=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const ispasswordvalid=/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(password);
    if(!isemailvalid) return "Email id is not valid";
    if(!ispasswordvalid) return "Password is not valid";

    return null;
}