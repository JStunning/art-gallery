import { Button, Menu, MenuItem } from '@material-ui/core';
import React from 'react';

const Categories = ({ categories }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  if (!categories.length) return <p>Loading...</p>;

  return (
    <>
      <Button
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Categories
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {categories.map((category) => (
          <MenuItem onClick={handleClose} key={category.id}>{category.name}</MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default Categories;
