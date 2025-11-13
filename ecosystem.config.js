console.log("adding envs: ", { ...process.env });

module.exports = {
  apps: [
    {
      name: "atend-website",
      cwd: "./atend-website",
      script: "npm",
      args: "start",
      exec_mode: "fork",
      watch: false,
      env: { PORT: 3000, ...process.env },
      autorestart: true,
      max_restarts: 10,
      min_uptime: "10s",
      // Logs (caminhos relativos à raiz do projeto, não ao cwd)
      error_file: "../logs/atend-website-error.log",
      out_file: "../logs/atend-website-out.log",
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
    },
  ],
};
