import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
} from "@mui/material";

const Feature = ({ title, desc }: { title: string; desc: string }) => (
  <Card
    variant="outlined"
    sx={{
      height: "100%",
      boxShadow: 1,
      ":hover": { boxShadow: 3 },
    }}
  >
    <CardHeader
      title={
        <Typography variant="h6" fontWeight={800}>
          {title}
        </Typography>
      }
      sx={{ pb: 0 }}
    />
    <CardContent>
      <Typography variant="body2" color="text.secondary">
        {desc}
      </Typography>
    </CardContent>
  </Card>
);

const HomePage = () => {
  return (
    <div className="grid grid-cols-1 gap-6 p-5 md:gap-8 md:p-8">
      {/* Top bar quick links (react-router v7 NavLink -> MUI Button) */}
      <div className="flex items-center justify-center">
        <Typography variant="h2" fontWeight={900} textAlign="center">
          MUI + Vite + React Router + Tailwind ⚡
        </Typography>
      </div>
      <Divider />
      {/* Hero */}
      <Box
        sx={{
          p: { xs: 3, md: 5 },
          boxShadow: 2,
        }}
      >
        <Typography variant="h3" fontWeight={900} className="leading-tight">
          Quick Starter Boilerplate
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ mt: 1.5, maxWidth: 720 }}
        >
          Batteries included: React 19, MUI v7, React Router v7, Tailwind v4,
          Redux Toolkit, Persist, and Vite. Clean, modern, and ready to ship. No
          fluff.
        </Typography>

        <div className="mt-5 flex flex-wrap items-center gap-3">
          <Button variant="contained" size="large">
            Hello world
          </Button>
          <Button variant="outlined" size="large">
            View Docs
          </Button>
          <Button variant="text" size="large">
            Open GitHub
          </Button>
        </div>
      </Box>

      {/* Quick actions */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <Feature
          title="TypeScript + SWC"
          desc="Fast dev & builds via @vitejs/plugin-react-swc. Type-safety out of the box."
        />
        <Feature
          title="MUI Theme-Ready"
          desc="Centralized theme with palette, typography, and components that play nice with Tailwind utilities."
        />
        <Feature
          title="Router v7 Friendly"
          desc="Latest NavLink API with active state → filled buttons. Drop-in routes, nested layouts."
        />
      </div>

      {/* Status / placeholders you can wire later */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Card>
          <CardHeader
            title={<Typography fontWeight={800}>State Management</Typography>}
            subheader="RTK + Persist pre-installed"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Wire your slices in <code>store.ts</code>, persist what matters,
              encrypt if needed. Replace this card with your first feature
              module.
            </Typography>
            <div className="mt-3 flex gap-2">
              <Button variant="contained" size="small">
                Create slice
              </Button>
              <Button variant="outlined" size="small">
                Add persist
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader
            title={<Typography fontWeight={800}>Styling</Typography>}
            subheader="Tailwind v4 + MUI"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Use Tailwind for layout spacing + quick utilities, MUI for
              accessible components and theming. Best of both worlds; zero
              fighting.
            </Typography>
            <div className="mt-3 flex gap-2">
              <Button variant="outlined" size="small">
                Tailwind classes
              </Button>
              <Button variant="outlined" size="small">
                MUI <code>sx</code>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HomePage;
