import { ArrowRight } from "@mui/icons-material";
import { MenuItem, MenuList } from "@mui/material";
import { grey } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";

const links = [
  {
    item: "web development",
    nestedLinks: [
      "Front End",
      "back end",
      "wordpress",
      "data sceince",
      "ui & ux",
    ],
  },
  { item: "business" },
  { item: "finance & accountaing", nestedLinks: ["Compliance", "Ecommerce"] },
  { item: "it & software" },
  { item: "office productivity" },
  { item: "personal development" },
  { item: "design" },
  { item: "marketing" },
  { item: "lifestyle" },
  { item: "photography & videos" },
  { item: "health & fitness" },
  { item: "music" },
  { item: "technology" },
];

const useStyles = makeStyles({
  wrapList: {
    display: "flex",
  },
  ul: {
    borderRight: `1px solid ${grey[200]}`,
    minWidth: 230,
  },
});

export const Categories = React.forwardRef((props, ref) => {
  const [nestedLinks, setNestedLinks] = useState({ isOpen: false, links: [] });
  const classes = useStyles();
  const handleHover = (link) => {
    if (link.nestedLinks && link.nestedLinks.length) {
      setNestedLinks((current) => {
        return { ...current, isOpen: true, links: link.nestedLinks };
      });
    } else {
      setNestedLinks((current) => {
        return { ...current, isOpen: false, links: [] };
      });
    }
  };
  const handleMouseLeave = () => {
    setNestedLinks((current) => {
      return { ...current, isOpen: false, links: [] };
    });
  };

  return (
    <div className={classes.wrapList} ref={ref}>
      <MenuList className={classes.ul}>
        {links.map((link) => (
          <MenuItem
            onMouseOver={() => handleHover(link)}
            key={link.item}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: "0.5rem",
              alignItems: "center",
              textTransform: "capitalize",
            }}
          >
            <span>{link.item}</span>
            <ArrowRight />
          </MenuItem>
        ))}
      </MenuList>

      {nestedLinks.isOpen && (
        <MenuList className={classes.ul} onMouseLeave={handleMouseLeave}>
          {nestedLinks.links.map((link) => (
            <MenuItem
              key={link}
              sx={{
                textTransform: "capitalize",
              }}
            >
              <span>{link}</span>
            </MenuItem>
          ))}
        </MenuList>
      )}
    </div>
  );
});
