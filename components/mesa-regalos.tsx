export const MesaRegalos = () => {
  return (
    <div id="gift Table" className="bg-[#b69f6b] flex flex-col items-center justify-center w-full">
      <svg className="mt-4" width="100px" height="100px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#fffCCCCCC" stroke-width="0.048"></g><g id="SVGRepo_iconCarrier"> <path d="M12 7V20M12 7H8.46429C7.94332 7 7.4437 6.78929 7.07533 6.41421C6.70695 6.03914 6.5 5.53043 6.5 5C6.5 4.46957 6.70695 3.96086 7.07533 3.58579C7.4437 3.21071 7.94332 3 8.46429 3C11.2143 3 12 7 12 7ZM12 7H15.5357C16.0567 7 16.5563 6.78929 16.9247 6.41421C17.293 6.03914 17.5 5.53043 17.5 5C17.5 4.46957 17.293 3.96086 16.9247 3.58579C16.5563 3.21071 16.0567 3 15.5357 3C12.7857 3 12 7 12 7ZM5 12H19V17.8C19 18.9201 19 19.4802 18.782 19.908C18.5903 20.2843 18.2843 20.5903 17.908 20.782C17.4802 21 16.9201 21 15.8 21H8.2C7.07989 21 6.51984 21 6.09202 20.782C5.71569 20.5903 5.40973 20.2843 5.21799 19.908C5 19.4802 5 18.9201 5 17.8V12ZM4.6 12H19.4C19.9601 12 20.2401 12 20.454 11.891C20.6422 11.7951 20.7951 11.6422 20.891 11.454C21 11.2401 21 10.9601 21 10.4V8.6C21 8.03995 21 7.75992 20.891 7.54601C20.7951 7.35785 20.6422 7.20487 20.454 7.10899C20.2401 7 19.9601 7 19.4 7H4.6C4.03995 7 3.75992 7 3.54601 7.10899C3.35785 7.20487 3.20487 7.35785 3.10899 7.54601C3 7.75992 3 8.03995 3 8.6V10.4C3 10.9601 3 11.2401 3.10899 11.454C3.20487 11.6422 3.35785 11.7951 3.54601 11.891C3.75992 12 4.03995 12 4.6 12Z" stroke="#fff" stroke-width="1.056" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
      <h1 className="text-white font-bold uppercase tracking-wider text-xl mb-12 mt-4">Mesa de regalos</h1>
      <div
        role="button"
        className="flex items-center justify-center cursor-pointer w-60 mb-4 border rounded-md shadow-md hover:shadow-lg max-h-[90px] pb-4"
      >
        <a
          href="https://www.amazon.com.mx/wedding/share/brandonyfaby"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="/sears.png"
            alt="mesa-regalos"
          />
        </a>
      </div>
      <div
        role="button"
        className="flex items-center justify-center cursor-pointer w-60 mb-4 border rounded-md shadow-md hover:shadow-lg py-1"
      >
        <a
          href="https://mesaderegalos.liverpool.com.mx/milistaderegalos/51399094"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="/liverpool.png"
            alt="mesa-regalos"
          />
        </a>
      </div>
    </div>
  )
}