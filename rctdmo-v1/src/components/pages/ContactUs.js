

import { useEffect, useState, useRef } from "react";


const ContactUs = (props) => {

    const [msg, setMsg] = useState("");

    const [formfields, setFormFields] = useState({});

  
    const [formfielderrors, setFormFieldErrors] = useState({});   
    
    useEffect(()=>{

        return ()=>{

        }

    },[]);

    const formSubmit = (e) =>{

        e.preventDefault();
        
        let _msg = ""; 
        let _form_err = false;

        try {



            setFormFieldErrors((preval)=>({...preval,txtname:""}));
            setFormFieldErrors((preval)=>({...preval,txtemail:""}));


            if(formfields.txtname === null || formfields.txtname === undefined || formfields.txtname === "" 
                || formfields.txtname.trim().length === 0
            )
            {
                const _msgerr = "* please enter a valid name";
                setFormFieldErrors((preval)=>({...preval,txtname:_msgerr}))
                _form_err = true;
            }
            
            if(formfields.txtemail === null || formfields.txtemail === undefined || formfields.txtemail === "" 
            || formfields.txtemail.trim().length === 0)
            {
                const _msgerr = "* please enter a valid email";
                setFormFieldErrors((prevval)=>({...prevval,txtemail:_msgerr}))
                _form_err = true;
            }

            if(!_form_err)
            {
                
                setFormFields((preval)=>({...preval,txtname:""}));
                setFormFields((preval)=>({...preval,txtemail:""}));

                _msg = "* form submitted";
                setMsg(_msg);
            }


        } catch (error) {
            
            const _err = `${_msg}::err - ${error}`;

            console.log(_err);
            setMsg((prevval)=>_err);
        }

    }

    const handleFormFieldChange = (e) => {

        e.preventDefault();
        
        let _msg = "";

        try {

            const _name = e.target.name;
            const _value = e.target.value;

            setFormFields((prevval)=>({...prevval,[_name]:_value}));
            setFormFieldErrors((preval)=>({...preval,txtname:""}));
            setFormFieldErrors((preval)=>({...preval,txtemail:""}));

            if(formfields.txtname === null || formfields.txtname === undefined || formfields.txtname === "" 
                || formfields.txtname.trim().length === 0
            )
            {
                const _msgerr = "* please enter a valid name";
                setFormFieldErrors((preval)=>({...preval,txtname:_msgerr}))
            }
            
            if(formfields.txtemail === null || formfields.txtemail === undefined || formfields.txtemail === "" 
            || formfields.txtemail.trim().length === 0)
            {
                const _msgerr = "* please enter a valid email";
                setFormFieldErrors((prevval)=>({...prevval,txtemail:_msgerr}))
            }


        } catch (error) {
            
            const _err = `handleFormFieldChange::err - ${error}`;

            console.log(_err);
            setMsg((prevval)=>_err);
        }

    } 

    return(
        <>
            <h4>ContactUs Page</h4>
            <span>{msg}</span>       
            <p></p>     
            <div> 
                <form onSubmit={formSubmit}>
                    <div>
                        <label>* name: </label>
                        <input type="text" placeholder="*name required" maxlength="25"                                                  
                          name="txtname" onChange={(e)=>handleFormFieldChange(e)} 
                          value={formfields.txtname || ""}
                         />
                         {formfielderrors.txtname && <label>{formfielderrors.txtname}</label>}
                    </div>
                    <div>
                        <label>* email: </label>
                        <input type="text" placeholder="*email required" maxlength="50"                          
                          name="txtemail" onChange={(e)=>handleFormFieldChange(e)}
                          value={formfields.txtemail || ""}
                         />
                         {formfielderrors.txtemail && <label>{formfielderrors.txtemail}</label>}
                    </div>
                    <div>
                        <textarea name="txtcomment" rows={5} cols={30} placeholder="* comments is required"/>
                    </div>
                    <p></p> 
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default ContactUs;