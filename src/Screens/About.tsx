import logo from "../../logo.png";

export default function About({ classes }: any) {
  return (
    <div
      className={
        classes + " " + "w-screen flex flex-col items-center justify-center"
      }
    >
      <img src={logo} className="h-20 opacity-90" />
      <p className="opacity-70 text-bold text-xl mt-2">Chat App</p>
      <p className="opacity-40 mt-1">
        A Web-based Chatting Application by{" "}
        <a
          
        >
          <b>Akil Alam</b>
        </a>
      </p>
      
    </div>
  );
}
