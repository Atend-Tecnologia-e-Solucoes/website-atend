console.log("adding envs: ", { ...process.env });

module.exports = {
  apps: [
    {
      name: "atend-website",
      cwd: "./atend-website",
      script: "npm",
      args: "run start",
      exec_mode: "fork",
      watch: false,
      env: { PORT: 3000, ...process.env },

      // Logs (caminhos relativos à raiz do projeto, não ao cwd)
      error_file: "../logs/atend-website-error.log",
      out_file: "../logs/atend-website-out.log",
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
    },
    {
      name: "ironblock-web",
      cwd: "./ironblock-web",
      script: "npm",
      args: "run start",
      exec_mode: "fork",
      watch: false,
      env: { PORT: 3001, ...process.env },
      error_file: "../logs/ironblock-web-error.log",
      out_file: "../logs/ironblock-web-out.log",
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
    },
  ],
};
