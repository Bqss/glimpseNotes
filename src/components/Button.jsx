const Button = ({children , className, ...props}) => {
  return (
    <button className={"bg-blue-700 text-base md:text-lg border border-transparent  hover:bg-blue-500 hover:border-white transition duration-300 hover:-translate-y-1  text-white px-5  py-2 md:py-1 md:px-3 rounded-md " + (className ?? "")} {...props}>
      {children}
    </button>  
  )
}
export default Button;