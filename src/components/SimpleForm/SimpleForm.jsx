
const SimpleForm = () => {
const handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.name.value);
    console.log(e.target.email.value);
    console.log (e.target.phone.value);
    console.log('please submit this properly');
}

    return (
        <div>
            <form onSubmit={handleSubmit}> 
                <input type="text" name="name" />
                <br />
                <input type="email" name="email" />
                <br />
                <input type="phone" name="phone" />
                <br />
                <input type="submit" value="submit"/>
            </form>
        </div>
    );
};

export default SimpleForm;