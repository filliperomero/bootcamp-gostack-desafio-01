const projects = [];

class ProjectController {
  // Get all Projects
  async index(req, res) {
    return res.json(projects);
  }
}

export default new ProjectController();
