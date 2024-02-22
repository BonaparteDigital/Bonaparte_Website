import React, { useState }from "react";

const Subscribe = () => {
    const [email, setEmail] = useState("");

const handleSubmit = (evt) => {

    evt.preventDefault();
    var xhr = new XMLHttpRequest();
    var url = "https://api.hsforms.com/submissions/v3/integration/submit/23706289/3968e95b-0467-46ab-a36f-882ef8f784ab"
    var data = {
        "fields":[
            {
                "name": "email",
                "value": email
            }
        ],
        "context":{
            "pageUri": "www.bonapartedigital.com",
            "pageName": "Bonaparte"
        },
    }

    var final_data = JSON.stringify(data)

    xhr.open("POST", url);
    // Sets the value of the "Content-Type" HTTP request headers to "application/json"
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                alert(xhr.responseText); //Returns a 200 error if the submission is succesfull.
            } else if (xhr.readyState === 4 && xhr.status === 403) {
                alert(xhr.responseText); //Returns a 403 error if the portal isn't allowed to post submissions.
            } else if (xhr.readyState === 4 && xhr.status === 404) {
                alert(xhr.responseText); //Returns a 404 error if the formGuid ins't found.
            }
        }

    xhr.send(final_data);
}

return (
    <form className="w-full max-w-sm relative" onSubmit={handleSubmit}>
    <div className="flex items-center py-2">
      <input className="appearance-none bg-transparent border-none w-full text-olive mr-3 py-1 px-2 leading-tight focus:outline-none placeholder:text-olive-light" value={email} type="text" onChange={e => setEmail(e.target.value)} placeholder="Enter your email" aria-label="Email"/>
      <button className="md:inline-block text-md font-bold bg-olive text-green px-6 py-2 rounded-full transition duration-300 hover:shadow-[-5px_5px_0px_0px_#EC8602] hover:transform hover:translate-x-1.5 hover:-translate-y-1.5" type="submit">
        Submit
      </button>
      <div className="absolute bottom-0 left-0 right-0 border-b border-olive" style={{ marginRight: '100px' }}></div>
    </div>
  </form>
 )
}

export default Subscribe