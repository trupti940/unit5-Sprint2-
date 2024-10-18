import React, {useRef} from 'react';

const SubmitForm = () => {
    const firstNRef = useRef(null);
    const lastNRef = useRef(null);
    const emailRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = {
            firstName: firstNRef.current.value,
            lastName: lastNRef.current.value,
            email:emailRef.current.value,
        };

        if (formData.firstName && formData.lastName && formData.email){
            console.log("Form Data:", formData);
        }else{
            console.log("All fields are required!");
        }
    };

    return (
        <form onSubmit = {handleSubmit}>
            <div>
                <label>First Name:</label>
                <input type="text" ref={firstNRef}/>
            </div>
            <div>
                <label>Last Name:</label>
                <input type="text" ref={lastNRef}/>
            </div>
            <div>
                <label>Email:</label>
                <input type="text" ref={emailRef}/>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default SubmitForm;