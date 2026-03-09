type ButtonProps = {
    children: React.ReactNode;
    type?: "button" | "submit";
    variant?: "primary" | "secondary";
    onClick?: () => void;
    className?: string;
  };
  
  export default function Button({
    children,
    type = "button",
    variant = "primary",
    onClick,
    className = "",
  }: ButtonProps) {
  
    const base =
      "w-full py-3 rounded-lg text-lg transition duration-200 cursor-pointer";
  
    const styles = {
      primary: "bg-indigo-400 hover:bg-indigo-500 text-white",
      secondary: "bg-indigo-300 hover:bg-indigo-400 text-white",
    };
  
    return (
      <button
        type={type}
        onClick={onClick}
        className={`${base} ${styles[variant]} ${className}`}
      >
        {children}
      </button>
    );
  }