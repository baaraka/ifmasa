import "./Contacts.scss";

function Contact() {
  return (
    <div className="contact">
      <div className="contactComponent">
        <div className="left">
          <img
            src="https://images.pexels.com/photos/4560142/pexels-photo-4560142.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
            alt=""
          />
        </div>
        <div className="right">
          <form>
            <div className="labelDiv">
              <label>Name</label>
              <input type="text" />
            </div>
            <div className="labelDiv">
              <label>Email</label>
              <input type="email" />
            </div>
            <div className="labelDiv">
              <label>Message</label>
              <textarea name="" id="" cols="22" rows="5"></textarea>
            </div>
            <button>SUBMIT</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
