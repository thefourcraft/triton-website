// Setup redirects here
const redirectMap = {
  "/discord": "https://discord.gg/9FsawxR",
  "/github": "https://github.com/Rexcantor/Triton/",
  "/github_issues": "https://github.com/Rexcantor/Triton/issues",
  "/github_bugs": "https://github.com/Rexcantor/Triton/labels/bug",
  "/github_config": "https://github.com/Rexcantor/Triton/blob/v1/config.yml",
  "/github_config_bungee": "https://github.com/Rexcantor/Triton/blob/v1/bungee_config.yml",
  "/api": "https://github.com/Rexcantor/Triton/wiki",
  "/spigot": "https://www.spigotmc.org/resources/triton.30331/",
  "/api-latest": "https://cdn.rexcantor64.com/triton/api/TritonAPI-v1.4.0.jar",
};

module.exports = (req, res, next) => {
  if (redirectMap[req.path]) res.redirect(redirectMap[req.path]);
  else next();
};
