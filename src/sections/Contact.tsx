const Contact = () => {
  return (
    <section>
      <div className="container py-7">
        <h2 className="sub-heading mb-5">
          <span>#</span>contact-me<span></span>
        </h2>
        <div className="">
          <div>
            <p className="text-gray font-medium max-w-[35rem] mb-5">
              I’m interested in any opportunities. However, if you have other
              request or question, don’t hesitate to contact me
            </p>
          </div>
          <div className="w-full">
            <form action="" className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input type="text" name="name" placeholder="Name" />
                <input type="email" name="email" placeholder="Email" />
              </div>
              <input type="text" name="title" placeholder="Title" />
              <textarea name="message" placeholder="Message"></textarea>
              <button type="submit" className="btn btn-primary">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
