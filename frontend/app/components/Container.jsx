export default function Container({ children, className }) {
  return (
    <div
      className={`container mx-auto w-full max-w-custom-1240 px-5 overflow-hidden 1366px:max-w-custom-1200 1200px:max-w-custom-1144 1200px:px-7 550px:px-2 ${className}`}
    >
      {children}
    </div>
  );
}
