function SuccessAlert({ message, show }) {

  return (
       <div
        className={`absolute top-10 block w-[40%] left-[50%] translate-x-[-50%] p-4 mb-4 text-base leading-5 text-white bg-green-500 rounded-lg ${show ? "opacity-100" : "opacity-0"} font-regular`}>
        {message}
      </div>
  );
}
export default SuccessAlert;

