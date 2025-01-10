export default function Contact() {


    
    return(
        <div>
            <h1>this is the Contact page</h1>
            <div>
                <label for="first-name">First Name</label>
                <input type="text" name="first-name" placeholder="Enter your First Name." required></input>
                <label for="last-name">Last Name</label>
                <input type="text" name="last-name" placeholder="Enter your Last Name." required></input>
                <label for="phone-number">Phone Number</label>
                <input type="text" name="phone" placeholder="Enter your phone number." required></input>
                <label for="email">Email</label>
                <input type="text" name="email" placeholder="Enter your Email address." required></input>
            </div>
        </div>
    )
}