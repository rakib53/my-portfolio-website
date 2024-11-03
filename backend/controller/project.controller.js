const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");
const { ProjectModel } = require("../model/project.model");

// Get all the projects
const getProjects = async (req, res, next) => {
  try {
    const allProjects = await ProjectModel.find();
    res.send(allProjects);
  } catch (error) {
    next(error);
  }
};

// Create a new project
const createProject = async (req, res, next) => {
  const {
    title,
    description,
    liveSiteLink,
    githubLink,
    thumbnail,
    technologies,
  } = req?.body;

  const project = {
    title,
    description,
    liveSiteLink,
    githubLink,
    thumbnail,
    technologies,
  };
  try {
    const newProject = new ProjectModel(project);
    const savedProject = await newProject.save();
    if (savedProject?._id) {
      res.status(200).json(savedProject);
    } else {
      res.status(400).json({
        error: "Error creating project!",
      });
    }
  } catch (error) {
    next(error);
  }
};

// Delete a project
const deleteProject = async (req, res) => {
  const { id } = req.query;

  const deleteProject = await ProjectModel.deleteOne({ _id: id });
  if (deleteProject?.acknowledged) {
    res.status(200).json({ _id: id });
  } else {
    res.status(400).json({
      error: "Error deleting project!",
    });
  }
};

// Send mail function
const sendEmail = async (to, subject, html) => {
  const transporter = nodemailer.createTransport(
    smtpTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })
  );

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject,
    html: html,
  };

  return transporter.sendMail(mailOptions);
};

// Query template
const queryEmailTemplate = (email, fullName, query) => {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Welcome to [Your Website]</title>
    <style>
      body {
        font-family: "Helvetica Neue", Arial, sans-serif;
        margin: 0;
        padding: 0;
        background-color: #f4f4f7;
        color: #333;
      }
      .container {
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
        background-color: #fff;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      }
      .header {
        text-align: center;
        padding: 20px 0;
        background-color: #1c3f3a;
        color: white;
        border-radius: 8px 8px 0 0;
      }
      .header h1 {
        margin: 0;
        font-size: 24px;
      }
      .content {
        padding: 20px;
        line-height: 1.6;
      }
      .content h2 {
        color: #1c3f3a;
        font-size: 22px;
      }
      .cta {
        text-align: center;
        margin-top: 20px;
      }
      .cta a {
        text-decoration: none;
        background-color: #1c3f3a;
        color: white;
        padding: 12px 24px;
        border-radius: 6px;
        font-size: 16px;
      }
      .footer {
        text-align: center;
        padding: 20px;
        font-size: 12px;
        color: #aaa;
      }
      .footer a {
        color: #1c3f3a;
        text-decoration: none;
      }
      @media only screen and (max-width: 600px) {
        .container {
          padding: 10px;
        }
        .cta a {
          font-size: 14px;
        }
      }
    </style>
  </head>
  <body>
    <div class="container">
      <!-- Header -->
      <div class="header">
        <h1>A new query from ${fullName}</h1>
      </div>

      <!-- Content -->
      <div class="content">
        <h2>Query from ${email},</h2>
        <p>
         ${query}
        </p>
      </div>

      <!-- Footer -->
      <div class="footer">
        <p>© 2024, All rights reserved Rakib hossen.</p>
      </div>
    </div>
  </body>
</html>
`;
};

// Send mail endpoint
const sendQueryEmail = async (req, res, next) => {
  try {
    const { email, fullName, query } = req.body;

    const isSentQuery = await sendEmail(
      "rakibdev53@gmail.com",
      `New project query arrival from ${fullName}`,
      queryEmailTemplate(email, fullName, query)
    );

    if (isSentQuery?.messageId) {
      res.status(200).json({ message: "Query submitted" });
    } else {
      res.status(404).json({
        message: "Failed to send query.",
      });
    }
  } catch (error) {
    res.status(500).json({ message: error?.message, error });
  }
};

module.exports = {
  getProjects,
  createProject,
  deleteProject,
  sendQueryEmail,
};
