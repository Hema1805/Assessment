async function login(username, password)
{
  
const response = await fetch("/api/login", { method: "POST", body: new URLSearchParams({ username, password })  
});  

const data = await response.json();    

if (!response.ok) 
{        
throw new Error(data.message || "Login failed");   
}
   
return data;
}