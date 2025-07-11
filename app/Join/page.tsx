// "use client";

// import {
//   TextField,
//   Button,
//   Typography,
//   Box,
//   Container,
//   Paper,
//   ThemeProvider,
//   createTheme,
// } from "@mui/material";
// // import AddBg from "./components/AddBg";
// import CCSLogoLarge from "../_components/CCSLogoLarge";
// import { useRouter } from "next/navigation";

// const darkTheme = createTheme({
//   palette: {
//     mode: "dark",
//     primary: {
//       main: "#fff",
//     },
//     background: {
//       default: "#000000",
//       paper: "transparent",
//     },
//     text: {
//       primary: "#ffffff",
//     },
//   },
//   components: {
//     MuiTextField: {
//       styleOverrides: {
//         root: {
//           "& .MuiOutlinedInput-root": {
//             "& fieldset": {
//               borderColor: "#ffffff",
//               borderWidth: "2px",
//             },
//             "&:hover fieldset": {
//               borderColor: "#dc2626",
//             },
//             "&.Mui-focused fieldset": {
//               borderColor: "#dc2626",
//             },
//           },
//           "& .MuiInputLabel-root": {
//             color: "#ffffff",
//             fontWeight: "bold",
//             fontSize: "0.875rem",
//             letterSpacing: "0.05em",
//           },
//           "& .MuiOutlinedInput-input": {
//             color: "#ffffff",
//             height: "1.5rem",
//           },
//         },
//       },
//     },
//     MuiButton: {
//       styleOverrides: {
//         root: {
//           borderWidth: "2px",
//           fontWeight: "bold",
//           letterSpacing: "0.05em",
//           height: "3rem",
//           "&:hover": {
//             borderWidth: "2px",
//           },
//         },
//       },
//     },
//   },
// });

// export default function JoinTeam() {
//   const router = useRouter();

//   return (
//     <ThemeProvider theme={darkTheme}>
//       <div className="min-h-screen bg-black text-white relative overflow-hidden  ">
//         <Box className="absolute inset-0 opacity-30">
//           <svg width="100%" height="100%" className="absolute inset-0">
//             <defs>
//               <pattern
//                 id="circuit"
//                 x="0"
//                 y="0"
//                 width="100"
//                 height="100"
//                 patternUnits="userSpaceOnUse"
//               >
//                 <path
//                   d="M20 20h60v20h-20v20h-20v20h-20z"
//                   fill="none"
//                   stroke="#dc2626"
//                   strokeWidth="2"
//                 />
//                 <path
//                   d="M80 40h-20v20h20v20h-40v-20h-20"
//                   fill="none"
//                   stroke="#dc2626"
//                   strokeWidth="2"
//                 />
//               </pattern>
//             </defs>
//             <rect width="100%" height="100%" fill="url(#circuit)" />
//           </svg>
//         </Box>
//         <Box className="relative z-10  pt-1 md:pt-1 flex items-center justify-between p-4 md:p-6">
//           <div className="flex items-center space-x-3">
//             <CCSLogoLarge />
//           </div>
//         </Box>

//         <Container maxWidth="sm" className="relative z-10 px-4 md:px-6">
//           <Box className="flex flex-col items-center justify-center  space-y-6 md:space-y-1">
//             <Typography
//               variant="h2"
//               className="text-3xl md:text-4xl lg:text-5xl font-bold text-center tracking-wider mb-4 md:mb-8"
//               sx={{ fontFamily: "megarok", fontSize: "80px" }}
//             >
//               Join a team
//             </Typography>

//             <Paper
//               elevation={0}
//               className="w-full border-4 border-white bg-transparent p-4 md:p-6 lg:p-8 space-y-4 md:space-y-6"
//             >
//               <Box className="space-y-4 md:space-y-6">
//                 <Typography
//                   className="sm:text-2xl md:text-8xl"
//                   sx={{
//                     fontFamily: "GothamXNarrow",
//                     fontWeight: "bold",
//                     fontSize: "20px",
//                   }}
//                 >
//                   Name
//                 </Typography>
//                 <TextField fullWidth variant="outlined" className="w-full" />
//                 <Typography
//                   sx={{
//                     fontFamily: "GothamXNarrow",
//                     fontWeight: "bold",
//                     fontSize: "20px",
//                   }}
//                 >
//                   Email
//                 </Typography>

//                 <TextField
//                   fullWidth
//                   type="email"
//                   variant="outlined"
//                   className="w-full"
//                 />
//                 <Typography
//                   sx={{
//                     fontFamily: "GothamXNarrow",
//                     fontWeight: "bold",
//                     fontSize: "20px",
//                   }}
//                 >
//                   Phone No
//                 </Typography>

//                 <TextField
//                   fullWidth
//                   type="tel"
//                   variant="outlined"
//                   className="w-full"
//                 />
//                 <Typography
//                   sx={{
//                     fontFamily: "GothamXNarrow",
//                     fontWeight: "bold",
//                     fontSize: "20px",
//                   }}
//                 >
//                   Team Code
//                 </Typography>

//                 <TextField fullWidth variant="outlined" className="w-full" />

//                 <Box className="pt-2 md:pt-4">
//                   <Button
//                     onClick={() => router.push("/Dashboard")}
//                     fullWidth
//                     variant="outlined"
//                     className="w-full bg-transparent border-2 border-white text-white hover:bg-red-600 hover:border-red-600 font-bold tracking-wide"
//                   >
//                     SUBMIT
//                   </Button>

//                   <Button
//                     onClick={() => router.push("/Add")}
//                     fullWidth
//                     variant="outlined"
//                     className="w-full mt-4 bg-transparent border-2 border-white text-white hover:bg-red-600 hover:border-red-600 font-bold tracking-wide"
//                   >
//                     Or Create team
//                   </Button>
//                 </Box>
//               </Box>
//             </Paper>
//           </Box>
//         </Container>
//       </div>
//     </ThemeProvider>
//   );
// }

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import CCSLogoLarge from "../_components/CCSLogoLarge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function JoinTeam() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [teamCode, setTeamCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/join-team`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            username,
            team_code: teamCode,
          }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        alert(data.error || "Failed to join team");
      } else {
        alert("Team joined successfully!");
        router.push("/Dashboard");
      }
    } catch (err) {
      console.error("Error joining team", err);
      alert("Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden flex flex-col">
      {/* Circuit background */}
      <div className="absolute inset-0 opacity-30">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern
              id="circuit"
              x="0"
              y="0"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M20 20h60v20h-20v20h-20v20h-20z"
                fill="none"
                stroke="#dc2626"
                strokeWidth="2"
              />
              <path
                d="M80 40h-20v20h20v20h-40v-20h-20"
                fill="none"
                stroke="#dc2626"
                strokeWidth="2"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      {/* Header with logo */}
      <div className="relative z-10 pt-4 md:pt-6 flex items-center justify-between px-4 md:px-6">
        <div className="flex items-center">
          <CCSLogoLarge />
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-8 md:py-12 relative z-10">
        <div className="w-full max-w-md mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 md:mb-10 tracking-wider" style={{ fontFamily: "megarok" }}>
            Join a team
          </h1>

          <Card className="border-2 border-purple-500/50 bg-black/60 backdrop-blur-md shadow-lg shadow-purple-500/20">
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl text-center text-white">Enter your details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Enter your name"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="mobile">Mobile Number</Label>
                <Input
                  id="mobile"
                  type="tel"
                  placeholder="Enter your mobile number"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="teamCode">Team Code</Label>
                <Input
                  id="teamCode"
                  placeholder="Enter your team code"
                  value={teamCode}
                  onChange={(e) => setTeamCode(e.target.value)}
                />
              </div>
              
              <div className="pt-4 space-y-3">
                <Button 
                  onClick={handleSubmit}
                  disabled={isLoading}
                  className="w-full py-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold text-lg shadow-lg shadow-purple-600/30 border-none transition-all duration-300"
                >
                  {isLoading ? "JOINING TEAM..." : "SUBMIT"}
                </Button>
                
                <Button 
                  variant="outline"
                  onClick={() => router.push("/Add")}
                  className="w-full py-6 border-2 border-purple-500 text-white bg-transparent hover:bg-purple-500/20 font-bold text-lg transition-all duration-300"
                >
                  CREATE NEW TEAM
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
