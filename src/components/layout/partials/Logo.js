import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Image from '../../elements/Image';

const Logo = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'brand',
    className
  );

  return (
    <div
      {...props}
      className={classes}
      style = {{display:"flex" }}
    >
      <h1 className="m-0" style = {{"padding-right":"10px"}}>
        
        {/* <Link to="/">
          <Image
            src={require('./../../../assets/images/logo.svg')}
            alt="Open"
            width={32}
            height={32} />
        </Link> */}
        
      </h1>
      <div style={{color: "white","font-size": "30px","font-weight": "bold"}}>
      RE:MIND
      </div>
    </div>
    // <div style = {{display:"flex" }}>
    //   <div>
    //   <Link to="/">
    //        <Image
    //         src={require('./../../../assets/images/logo.svg')}
    //         alt="Open"
    //         width={32}
    //         height={32} />
    //   </Link>
    //   </div>
    //   <div>
    //     <h1>RECOMPILE</h1>
    //   </div>
    // </div>
    
  );
}

export default Logo;