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
    },
  ],
};
