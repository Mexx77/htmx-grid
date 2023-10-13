export interface Tile {
  name: string;
  desc: string;
  iconClass: string;
  iconColor?: string;
}

export type ColumnID = string;

interface Column {
  id: ColumnID;
  name: string;
  tiles: Tile[];
}

const blue = "#1872c6";

export const tilesByTileName = new Map<string, Tile>([
  [
    "Jira",
    {
      name: "Jira",
      desc: "Issue Tracking",
      iconClass: "fab fa-jira",
    },
  ],
  [
    "Docker Hub",
    {
      name: "Docker Hub",
      desc: "Container Repository",
      iconClass: "fab fa-docker",
    },
  ],
  [
    "Gitlab",
    {
      name: "Gitlab",
      desc: "Version Control",
      iconClass: "fab fa-gitlab",
      iconColor: "#ef6a30",
    },
  ],
  [
    "Outlook",
    {
      name: "Outlook",
      desc: "Email",
      iconClass: "fa-envelope",
      iconColor: blue,
    },
  ],
  [
    "Teams",
    {
      name: "Teams",
      desc: "Video and Chat",
      iconClass: "fa-users",
      iconColor: blue,
    },
  ],
  [
    "Confluence",
    {
      name: "Confluence",
      desc: "Wiki",
      iconClass: "fab fa-confluence",
      iconColor: blue,
    },
  ],
  [
    "ISD",
    {
      name: "ISD",
      desc: "Infrastructure Service Desk",
      iconClass: "far fa-comments",
    },
  ],
  [
    "Projectile",
    {
      name: "Projectile",
      desc: "Time Tracking",
      iconClass: "fas fa-clock",
    },
  ],
]);

export const grid = new Map<ColumnID, Column>([
  [
    "1",
    {
      id: "1",
      name: "Gib mir einen Namen!",
      tiles: [tilesByTileName.get("Jira")],
    },
  ],
  [
    "2",
    {
      id: "2",
      name: "Development",
      tiles: [tilesByTileName.get("Docker Hub"), tilesByTileName.get("Gitlab")],
    },
  ],
  [
    "3",
    {
      id: "3",
      name: "Communication",
      tiles: [
        tilesByTileName.get("Outlook"),
        tilesByTileName.get("Teams"),
        tilesByTileName.get("Confluence"),
      ],
    },
  ],
  [
    "4",
    {
      id: "4",
      name: "Organisation",
      tiles: [tilesByTileName.get("ISD"), tilesByTileName.get("Projectile")],
    },
  ],
]);
