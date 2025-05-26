import { useState } from "react";

export default function FormContact({
  ref = null,
  reverse = false,
  buttonText,
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [subject, setSubject] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setTimeout(() => {
          setName("");
          setEmail("");
          setSubject("");
          setText("");
        }, 2000);
      }}
    >
      <div
        className={`flex gap-3 ${reverse ? "flex-col-reverse" : "flex-col"}`}
      >
        <textarea
          ref={ref && ref}
          value={text}
          className={`w-full resize-y ${
            reverse ? "min-h-[250px]" : "min-h-[150px]"
          }  input-style ${
            reverse ? "py-[10px] px-[15px]" : "py-[5px] px-[10px]"
          }`}
          placeholder="Your Comment... "
          onChange={(e) => setText(e.target.value)}
        />
        {reverse && (
          <input
            type="text"
            name="subject"
            value={subject}
            placeholder="Subject"
            className={`input-style ${
              reverse ? "py-[10px] px-[15px]" : "py-[5px] px-[10px] "
            }`}
            onChange={(e) => setSubject(e.target.value)}
          />
        )}
        <div className="flex justify-between items-center w-full">
          <input
            type="text"
            name="text"
            placeholder="Your Name"
            value={name}
            className={`w-[49%] input-style ${
              reverse ? "py-[10px] px-[15px]" : "py-[5px] px-[10px]"
            }`}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            className={`w-[49%] input-style ${
              reverse ? "py-[10px] px-[15px]" : "py-[5px] px-[10px]"
            }`}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>
      <button
        type="submit"
        className="py-2 px-4 content-center leading-[1.33] bg-accent normal-body hover:bg-[#2c2c2c] font-bold text-white mt-[10px] main-trans rounded-sm"
      >
        {buttonText}
      </button>
    </form>
  );
}
