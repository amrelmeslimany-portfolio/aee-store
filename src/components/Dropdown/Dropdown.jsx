import React, { useState, useRef, useEffect } from "react";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";

import "./Dropdown.css";

const Dropdown = (props) => {
  const { children, ...other } = props;

  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }
    prevOpen.current = open;
  }, [open]);

  // Handle Body

  const handleBody = React.Children.map(children, (child, index) => {
    if (index === 0) {
      return React.cloneElement(child, {
        ref: anchorRef,
        onClick: handleToggle,
        className: open ? "dropdown-active" : "",
        ...child.props,
      });
    } else {
      let clonedElement = React.cloneElement(child, {
        autoFocusItem: open,
        ...child.props,
      });
      return (
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          placement="bottom-start"
          transition
          disablePortal
          className="poper-custom"
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom-start" ? "bottom" : "top",
              }}
            >
              <Paper elevation={0} sx={{ boxShadow: "0px 2px 12px #00000017" }}>
                <ClickAwayListener onClickAway={handleClose}>
                  {clonedElement}
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      );
    }
  });

  return <div {...other}>{handleBody}</div>;
};
export default Dropdown;
