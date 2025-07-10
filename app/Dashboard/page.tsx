"use client";

import {
  Box,
  Container,
  Typography,
  Card,
  ToggleButton,
  ToggleButtonGroup,
  Button,
} from "@mui/material";
import { useEffect, useState } from "react";
import CcsLogo from "../_components/CcsLogo";

type Role = "WIZARD" | "HACKER";

type Member = {
  email: string;
  is_wizard: boolean;
  is_hacker: boolean;
};

export default function TeamDashboard() {
  const [members, setMembers] = useState<Member[]>([]);
  const [teamCode, setTeamCode] = useState("");
  const [isLeader, setIsLeader] = useState(false);

  const fetchDashboard = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/team-dashboard`,
        {
          credentials: "include",
        }
      );

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to fetch dashboard");

      const players: Member[] = data.players.map((p: any) => ({
        // name: p.name,
        email: p.email,
        // phone: p.phone,
        is_wizard: p.is_wizard ?? true,
        is_hacker: p.is_hacker ?? false,
      }));

      setMembers(players);
      setTeamCode(data.team_code);
      setIsLeader(data.is_leader);
    } catch (err) {
      alert("Could not fetch dashboard");
    }
  };

  const handleRoleChange = (index: number, role: Role | null) => {
    if (!role) return;

    setMembers((prev) =>
      prev.map((m, i) =>
        i === index
          ? {
              ...m,
              is_wizard: role === "WIZARD",
              is_hacker: role === "HACKER",
            }
          : m
      )
    );
  };

  const handleSave = async () => {
    const payload = {
      team_code: teamCode,
      players: members,
    };

    console.log(teamCode);

    // console.log(`players:${members}`);
    console.log("players:", members);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/team-dashboard`,
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Unknown error");

      alert("Saved successfully!");
    } catch (err) {
      alert(
        `Save failed: ${err instanceof Error ? err.message : "Unknown error"}`
      );
    }
  };

  useEffect(() => {
    fetchDashboard();
  }, []);

  const renderMemberCard = (member: Member, index: number, label: string) => (
    <Box key={index} className="text-center mb-8">
      <Typography
        className="text-white text-2xl md:text-4xl font-bold mb-4 tracking-wider"
        sx={{ fontFamily: "monospace" }}
      >
        {label}
      </Typography>
      <Card
        sx={{ bgcolor: "black", boxShadow: "0px 0px 5px 5px #FF0000" }}
        className="p-4 space-y-3"
      >
        {["name", "email", "phone"].map((key) => (
          <Box
            key={key}
            className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2"
          >
            <Typography
              className="text-red-500 font-bold text-xs md:text-sm"
              sx={{ fontFamily: "monospace" }}
            >
              {key.toUpperCase()}:
            </Typography>
            <Typography
              className="text-red-500 font-bold text-xs md:text-sm break-all"
              sx={{ fontFamily: "monospace" }}
            >
              {(member as any)[key]}
            </Typography>
          </Box>
        ))}
        <Box className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
          <Typography
            className="text-red-500 font-bold text-xs md:text-sm"
            sx={{ fontFamily: "monospace" }}
          >
            ROLE:
          </Typography>
          <ToggleButtonGroup
            value={member.is_wizard ? "WIZARD" : "HACKER"}
            exclusive
            onChange={(e, role) => handleRoleChange(index, role)}
            sx={{
              border: "2px solid #1a1a1a",
              borderRadius: "6px",
              backgroundColor: "#0a0a0a",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "0.5rem",
              "& .MuiToggleButton-root": {
                fontFamily: "monospace",
                fontWeight: "bold",
                fontSize: "0.75rem",
                color: "#ffffff",
                borderColor: "#333333",
                backgroundColor: "#1a1a1a",
                padding: "6px 12px",
                flex: "1 1 40%",
                minWidth: "100px",
                transition: "all 0.2s ease-in-out",
                "&:hover": {
                  backgroundColor: "#2a2a2a",
                  borderColor: "#dc2626",
                  color: "#ffffff",
                  transform: "translateY(-1px)",
                  boxShadow: "0 2px 8px rgba(220, 38, 38, 0.3)",
                },
                "&.Mui-selected": {
                  backgroundColor: "#dc2626",
                  color: "#ffffff",
                  borderColor: "#dc2626",
                  boxShadow:
                    "0 0 10px rgba(220, 38, 38, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                  "&:hover": {
                    backgroundColor: "#b91c1c",
                    borderColor: "#b91c1c",
                    transform: "translateY(-1px)",
                    boxShadow:
                      "0 4px 12px rgba(220, 38, 38, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                  },
                },
              },
            }}
          >
            <ToggleButton value="WIZARD">WIZARD</ToggleButton>
            <ToggleButton value="HACKER">HACKER</ToggleButton>
          </ToggleButtonGroup>
        </Box>
      </Card>
    </Box>
  );

  return (
    <Box className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center p-4 pb-32">
      <Box className="absolute inset-0 opacity-30">
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
      </Box>

      <Container maxWidth="sm" className="relative z-10">
        <Box display="flex" justifyContent="center" mb={4}>
          <CcsLogo />
        </Box>

        {members.length > 0 && renderMemberCard(members[0], 0, "LEADER")}
        {members
          .slice(1)
          .map((member, i) =>
            renderMemberCard(member, i + 1, `MEMBER ${i + 1}`)
          )}

        {isLeader && (
          <Box className="flex justify-center mt-8">
            <Button
              variant="outlined"
              onClick={handleSave}
              className="bg-transparent border-2 border-white text-white hover:bg-red-600 hover:border-red-600 font-bold tracking-wide"
            >
              Save Roles
            </Button>
          </Box>
        )}
      </Container>
    </Box>
  );
}
