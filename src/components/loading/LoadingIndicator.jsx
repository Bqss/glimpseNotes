const LoadingIndicator = ({isLoading, children}) => {
  return isLoading ? (
      <div className="w-full flex mt-20 justify-center flex-1">
        {children}
      </div>
    ) : null ;
  
};

export default LoadingIndicator;
