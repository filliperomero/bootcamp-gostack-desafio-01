const projects = [];

class ProjectController {
  // Get all Projects
  async index(req, res) {
    return res.json(projects);
  }

  // Create a Project
  async store(req, res) {
    const { id, title } = req.body;

    // Checks if the project already exist in our system
    const proj = projects.find(p => p.id === id);
    if (proj) {
      return res
        .status(400)
        .json({ error: true, msg: 'Project with this id already exist.' });
    }

    const project = {
      id,
      title,
      tasks: [],
    };
    projects.push(project);

    return res.json(project);
  }

  // Update the project
  async update(req, res) {
    const { title } = req.body;
    const { id } = req.params;

    // Checks if the project exist in our system
    const project = projects.find(p => p.id === id);
    if (!project)
      return res.status(404).json({ error: true, msg: 'Project not found.' });

    project.title = title;

    return res.json(project);
  }
}

export default new ProjectController();
