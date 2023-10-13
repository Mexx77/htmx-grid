import express, { Request } from "express";
import bodyParser from "body-parser";
import pug from "pug";
import { ColumnID, grid, Tile, tilesByTileName } from "./grid";

const app = express();
const port = 3000;
app.set("view engine", "pug");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get("/", (req, res) => {
  res.render("index", { grid: Array.from(grid.values()) });
});

app.post("/tiles", (req, res) => {
  parseAndSaveTiles(req);
  const render = pug.compileFile("./views/grid.pug");
  res.send(render({ grid: Array.from(grid.values()) }));
});

app.get("/col-name/edit/:colID", (req, res) => {
  const render = pug.compileFile("./views/col-name-edit.pug");
  res.send(render({ col: grid.get(req.params.colID) }));
});

app.put("/col-name/:colID", (req, res) => {
  const colID = req.params.colID;
  const { colName: newColName } = req.body;
  const col = grid.get(colID);
  col.name = newColName;
  grid.set(colID, col);
  const render = pug.compileFile("./views/col-name.pug");
  res.send(render({ col }));
});

const parseAndSaveTiles = (req: Request) => {
  const { flatGrid } = req.body;
  let colID: ColumnID;
  let tiles: Tile[] = [];
  for (const item of flatGrid) {
    const newColID = item.split("col--")[1];
    if (newColID) {
      setColumn(colID, tiles);
      colID = newColID;
      tiles = [];
      continue;
    }
    const tile = tilesByTileName.get(item);
    tiles.push(tile);
  }
  setColumn(colID, tiles);
};

const setColumn = (colID: ColumnID, tiles: Tile[]) => {
  if (colID !== undefined) {
    grid.set(colID, { id: colID, name: grid.get(colID).name, tiles });
  }
};

app.listen(port, () => {
  console.log(`htmx-grid listening on port ${port}`);
});
