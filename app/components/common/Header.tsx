import { Box, Button } from "@mui/material";
import { NavLink } from "react-router";

const links = [
  { path: "/", label: "Home" },
  { path: "/contact", label: "Contact" },
];

const Header = () => {
  return (
    <div className="flex items-center justify-between gap-5">
      <h3>Header</h3>

      <div className="flex items-center justify-end">
        {links.map((link) => (
          <Box key={link.path}>
            <NavLink to={link.path} end style={{ textDecoration: "none" }}>
              {({ isActive }) => (
                <Button
                  variant={isActive ? "contained" : "text"}
                  color="primary"
                  sx={{ borderRadius: 0, padding: 2, fontWeight: "bold" }}
                >
                  {link.label}
                </Button>
              )}
            </NavLink>
          </Box>
        ))}
      </div>
    </div>
  );
};

export default Header;
