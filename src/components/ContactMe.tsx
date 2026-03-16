import Navbar from "./UI/Navbar";
import ovalsdesign5 from "../assets/ovals-5.svg";
import Button from "./UI/Button";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import classes from "./ContactMe.module.css";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
});

type FormData = z.infer<typeof schema>;

export default function ContactMe() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  function onSubmit(data: FormData) {
    console.log(data);
  }

  return (
    <footer className={classes["root-container"]}>
      <div className={classes["main-content"]}>
        <article>
          <h2>Contact</h2>
          <p>
            I would love to hear about your project and how I {"\n"} can help.
            Please fill in the form, and I’ll get back {"\n"}
            to you as soon as possible.
          </p>
        </article>

        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("name")}
            placeholder="NAME"
            className={errors?.name ? classes.error : ""}
          />
          <p className={classes["error-msg"]}>
            {errors?.name && errors.name.message}
          </p>

          <input
            {...register("email")}
            placeholder="EMAIL"
            className={errors?.email ? classes.error : ""}
          />
          <p className={classes["error-msg"]}>
            {errors?.email && errors.email.message}
          </p>

          <textarea
            {...register("message")}
            placeholder="MESSAGE"
            className={errors?.message ? classes.error : ""}
          ></textarea>
          <p className={classes["error-msg"]}>
            {errors?.message && errors.message.message}
          </p>

          <Button className={classes.button}>SEND MESSAGE</Button>
        </form>
      </div>
      <img
        className={classes["oval-design"]}
        src={ovalsdesign5}
        alt="Oval Design 5"
      />
      <div className={classes["navbar-container"]}>
        <Navbar
          className={classes.navbar}
          brandName="anenepraise"
          aria-label="Footer Navigation"
        />
      </div>
    </footer>
  );
}
