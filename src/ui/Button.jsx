import { Link } from "react-router-dom";

function Button({ children, disabled, to, type, onClick }) {
  const base =
    "text-sm focus-bg-yellow-300 inline-block rounded-full bg-yellow-400  font-semibold uppercase tracking-wide transition-colors duration-300 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed ";

  const styles = {
    primary: base + " px-4 py-3 md:px-6 md:py-4 ",
    small: base + " px-4 py-2 md:px-5 md:py-2.5 text-xs",
    round: base + " px-3 py-1 md:px-3.5 md:py-2 text-sm",
    secondary:
      "text-sm focus-bg-stone-300 focus:text-stone-800 inline-block rounded-full border-2 border-stone-300 px-4 py-2 font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-300 hover:bg-stone-300 hover:text-stone-700 focus:outline-none focus:ring focus:ring-stone-800 focus:ring-offset-2 disabled:cursor-not-allowed md:px-6 md:py-3",
  };

  if (to)
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button className={styles[type]} onClick={onClick} disabled={disabled}>
        {children}
      </button>
    );

  return (
    <button className={styles[type]} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
