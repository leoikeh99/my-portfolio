import { useForm } from "react-hook-form";
import { ContactMe, ContactMeSchema } from "../lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactMe>({
    defaultValues: {
      name: "",
      email: "",
      title: "",
      message: "",
    },
    resolver: zodResolver(ContactMeSchema),
  });

  const onSubmit = async (values: ContactMe) => {
    const res = await emailjs.send(
      import.meta.env.VITE_EMAIL_SERVICE_ID,
      import.meta.env.VITE_EMAIL_TEMPLATE_ID,
      values,
      {
        publicKey: import.meta.env.VITE_EMAIL_PUBLIC_KEY,
      }
    );
    if (res.status !== 200) {
      toast.error("Failed to send email");
      return;
    } else toast.success("Email sent successfully");
  };

  return (
    <section id="contact">
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
            <form
              action=""
              className="space-y-4"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <input
                    {...register("name")}
                    type="text"
                    name="name"
                    placeholder="Name"
                  />
                  {errors.name && (
                    <span className="text-red-500">{errors.name.message}</span>
                  )}
                </div>
                <div className="space-y-1">
                  <input
                    {...register("email")}
                    type="email"
                    name="email"
                    placeholder="Email"
                  />
                  {errors.email && (
                    <span className="text-red-500">{errors.email.message}</span>
                  )}
                </div>
              </div>
              <div className="space-y-1">
                <input
                  {...register("title")}
                  type="text"
                  name="title"
                  placeholder="Title"
                />
                {errors.title && (
                  <span className="text-red-500">{errors.title.message}</span>
                )}
              </div>
              <div className="space-y-1">
                <textarea
                  {...register("message")}
                  name="message"
                  placeholder="Message"
                />
                {errors.message && (
                  <span className="text-red-500">{errors.message.message}</span>
                )}
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
