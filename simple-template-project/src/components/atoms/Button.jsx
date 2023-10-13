import Link from 'next/link';

import classes from './Button.module.css';

const Button = (props) => {
  const { link, children } = props;

  if (link) {
    return (
      <Link className={classes.btn} href={link}>
        {children}
      </Link>
    );
  }

  return <button className={classes.btn}>{children}</button>;
};

export default Button;
