// getUsers button 
 document.getElementById("btn-users").addEventListener('click', getUsers);
 function getUsers() {
   fetch("http://localhost:3000/users/")
  .then((res)=> res.json())
  .then((data) => console.log(data))
  .catch((err)=> console.log(err))
 }

const login = document.getElementById("loginpage");
const register = document.getElementById("rForm");
const note = document.getElementById("nForm")

if(login) login.addEventListener('submit',loginpageFunction)
if(register) register.addEventListener('submit',registerpageFunction)
if(note) note.addEventListener('submit',notepageFunction)

function loginpageFunction(e)
{
    e.preventDefault();
    let email=document.getElementById('email').value;
    let password=document.getElementById('password').value;


    class User{
        constructor(email,password)
        {
            this.emailid=email;
            this.passcode=password;
        }
    
    
    
    getuname(){
        return this.emailid;
    }
    setuname(newemail){
        this.emailid = email;
    }
    getpword(){
        return this.passcode;
    }
    setpword(newpassword){
        this.passcode = password
    }

    }

    const Userl=new User(email,password);
    console.log(Userl);

}


function registerpageFunction(e)
{
    e.preventDefault()
    let fname=document.getElementById('first_name').value;
    let lname=document.getElementById('last_name').value;
    let email=document.getElementById('email').value;
    let password=document.getElementById('pswd').value;

    class User{
        constructor(fname,lname,email,password)
        {
            this.firstname=fname;
            this.lastname=lname;
            this.email=email;
            this.password=password;
        }
        getemail(){
            return this.email;
        }
        setemail(newemail){
            this.email = newemail;
        }
        getpassword(){
            return this.password;
        }
        setpassword(newpassword){
            this.password=newpassword
        }
        getfirstname(){
            return this.firstname;
        }
        setfirstname(newfirstname){
            this.firstname = newfirstname;
        }
        getlastname(){
            return this.lastname;
        }
        setlastname(newlastname){
            this.lastname=newlastname;
        }
    }

    const user1=new User(fname,lname,email,password);
    console.log(user1);
}


function notepageFunction(e)
{
    e.preventDefault();
    let note=document.getElementById('note').value;

    class User{
        constructor(note)
        {
            this.tnotes=note;
        }
    
    
    gettnotes(){
        return this.tnotes;
    }
    settnotes(note){
        this.tnotes = note;
    }
   

    }

    const Userl=new User(note);
    console.log(Userl);

}