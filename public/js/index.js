htmx.onLoad(function (content) {
  const sortables = content.querySelectorAll(".sortable");
  for (const sortable of sortables) {
    new Sortable(sortable, { group: "grid" });
  }
});
